import api from "../../utilities/APIConnector/client";

// Type definitions
interface EntityProfile {
    [key: string]: any;
}

interface EntityAddress {
    id?: number;
    name: string;
    street: string;
    building?: string | null;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    is_primary: boolean;
}

interface EntityData {
    uuid: string;
    party_uuid: string;
    name: string;
    tenant: string;
    tenant_name: string;
    unique_code: string;
    parent_entity?: string | null;
    group?: string | null;
    registration_number?: string | null;
    is_tax_registered: boolean | null;
    tax_number?: string | null;
    status: string;
    is_active: boolean;
    profile: EntityProfile | null;
    addresses: EntityAddress[] | null;
}

class Entity {
    static myData: Entity | null = null;
    
    // Instance properties
    party_uuid: string;
    uuid: string;
    unique_code: string;
    name: string;
    tenant: string;
    tenant_name: string;
    parent_entity?: string | null;
    group?: string | null;
    registration_number?: string | null;
    is_tax_registered: boolean;
    tax_number?: string | null;
    status: string;
    is_active: boolean;
    profile: EntityProfile | null;
    addresses: EntityAddress[] | null;

    constructor(data: EntityData = {
        party_uuid: "",
        uuid: "",
        unique_code: "",
        name: "",
        tenant: "",
        tenant_name: "",
        parent_entity: null,
        group: null,
        registration_number: null,
        is_tax_registered: false,
        tax_number: null,
        status: "",
        is_active: false,
        profile: null,
        addresses: null
    }) {
        this.party_uuid = data.party_uuid;
        this.uuid = data.uuid;
        this.unique_code = data.unique_code;
        this.name = data.name;
        this.tenant = data.tenant;
        this.tenant_name = data.tenant_name;
        this.parent_entity = data.parent_entity;
        this.group = data.group;
        this.registration_number = data.registration_number;
        this.is_tax_registered = data.is_tax_registered ?? false;
        this.tax_number = data.tax_number;
        this.status = data.status;
        this.is_active = data.is_active;
        this.profile = data.profile ?? {};
        this.addresses = data.addresses ?? [];
    }

    // Get display name
    getDisplayName = (): string => this.name;

    // Check if entity is active
    isActive = (): boolean => this.is_active;

    // Get registration info
    getRegistrationInfo = (): string => {
        if (this.registration_number) {
            return `${this.registration_number}`;
        }
        return "No registration";
    };

    // Get tax info
    getTaxInfo = (): string => {
        if (this.is_tax_registered && this.tax_number) {
            return `Tax: ${this.tax_number}`;
        }
        return this.is_tax_registered ? "Tax registered" : "Not tax registered";
    };

    static async fetch(uuid: string): Promise<Entity | null> {
        try {
            const response = await api.get('/entities', `/${uuid}/`);
            if (response.success && response.response.data) {
                return Entity.fromJson(JSON.stringify(response.response.data));
            }
        } catch (error) {
            console.error('Failed to fetch entity:', error);
        }
        return null;
    }

    static async list(): Promise<Entity[]> {
        try {
            const response = await api.get('/entities', '');
            
            if (response.success && response.response.data) {
                return response.response.data.map((entityData: any) => 
                    Entity.fromJson(JSON.stringify(entityData))
                );
            }
        } catch (error) {
            console.error('Failed to fetch entities:', error);
        }
        return [];
    }

    async update(updatedFields?: Partial<EntityData>): Promise<void> {
        const payload: any = {};
        
        // Only include fields that are being updated
        if (updatedFields) {
            if (updatedFields.name !== undefined) payload.name = updatedFields.name;
            if (updatedFields.group !== undefined) payload.group = updatedFields.group;
            if (updatedFields.registration_number !== undefined) payload.registration_number = updatedFields.registration_number;
            if (updatedFields.is_tax_registered !== undefined) payload.is_tax_registered = updatedFields.is_tax_registered;
            if (updatedFields.tax_number !== undefined) payload.tax_number = updatedFields.tax_number;
            if (updatedFields.status !== undefined) payload.status = updatedFields.status;
            if (updatedFields.is_active !== undefined) payload.is_active = updatedFields.is_active;
            if (updatedFields.profile !== undefined) payload.profile = updatedFields.profile;
            if (updatedFields.addresses !== undefined) payload.addresses = updatedFields.addresses;
        }
        
        const response = await api.patch('/entities', `/${this.uuid}/`, payload);
        if (!response.success) {
            throw new Error('Failed to update entity');
        }
    }

    toJson(): string {
        return JSON.stringify(this.toDataOBJ());
    }

    toDataOBJ(): any {
        return {
            uuid: this.uuid,
            party_uuid: this.party_uuid,
            name: this.name,
            tenant: this.tenant,
            tenant_name: this.tenant_name,
            parent_entity: this.parent_entity,
            group: this.group,
            registration_number: this.registration_number,
            is_tax_registered: this.is_tax_registered,
            tax_number: this.tax_number,
            status: this.status,
            is_active: this.is_active,
            profile: this.profile,
            addresses: this.addresses
        };
    }

    static fromJson(jsonStr: string): Entity | null {
        if (!jsonStr || jsonStr.trim() === "") {
            return null;
        }

        const jsonData = JSON.parse(jsonStr);

        if (jsonData === null || jsonData === false) {
            return null;
        }

        // Handle API response structure with nested data
        const entityData = jsonData.data || jsonData;

        return new Entity(entityData);
    }
}

export default Entity;
export type { EntityData };