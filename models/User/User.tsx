import api from "../../utilities/APIConnector/client";
import secureLocalStorage from "react-secure-storage";
import Entity, { EntityData } from "../Entity/Entity";

// Type definitions
interface UserProfile {
    display_name: string;
    phone_number: string;
    date_of_birth: Date | null;
    metadata: any | null;
    status: string;
}


interface UserMembership {
    entity: EntityData;
    is_default: boolean;
    inherited: boolean;
    start_date: Date | null;
    end_date: Date | null;
    is_active: boolean;
}

interface UserData {
    uuid: string;
    tenant: string;
    entity: string;
    first_name: string;
    middle_names?: string | null;
    last_name: string;
    username: string;
    email: string;
    status: string;
    is_active: boolean;
    date_joined?: Date | null;
    profile: UserProfile;
    entity_name: string;
    tenant_name: string;
    verificationStatus: VerificationStatus;
    memberships: UserMembership[];
}

interface VerificationData {
    type: string;
    scope: string;
    status: string;
    last_attempt: string;
    failed_attempts: number;
    details: any | null;
}

interface VerificationStatus {
    verification_status: string;
    verifications: VerificationData[];
}

class User {
    static myData: User | null = null;

    // Instance properties
    uuid: string;
    tenant: string;
    entity: string;
    first_name: string;
    middle_names?: string | null;
    last_name: string;
    username: string;
    email: string;
    date_joined?: Date | null;
    status: string;
    is_active: boolean;
    profile: UserProfile;
    entity_name: string;
    tenant_name: string;
    verificationStatus: VerificationStatus;
    memberships: UserMembership[];
    constructor(data: UserData = {
        uuid: "",
        tenant: "",
        entity: "",
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        status: "",
        is_active: false,
        profile: {
            display_name: "",
            phone_number: "",
            date_of_birth: null,
            metadata: null,
            status: ""
        },
        entity_name: "",
        tenant_name: "",
        verificationStatus: {
            verification_status: "",
            verifications: []
        },
        memberships: [],
        date_joined: null
    }) {
        this.uuid = data.uuid;
        this.tenant = data.tenant;
        this.entity = data.entity;
        this.first_name = data.first_name;
        this.middle_names = data.middle_names;
        this.last_name = data.last_name;
        this.username = data.username;
        this.email = data.email;
        this.status = data.status;
        this.is_active = data.is_active;
        this.profile = data.profile;
        this.entity_name = data.entity_name;
        this.tenant_name = data.tenant_name;
        this.verificationStatus = data.verificationStatus;
        this.memberships = data.memberships;
        this.date_joined = data.date_joined ?? null;
    }

    name = (): string => `${this.profile?.display_name ?? this.first_name} ${this.last_name}`;

    // Get full name including status
    fullNameWithStatus = (): string => {
        const statusText = this.status ? ` (${this.status})` : '';
        return `${this.first_name} ${this.last_name}${statusText}`;
    };

    toUserData = (): UserData => {
        return {
            uuid: this.uuid,
            tenant: this.tenant,
            entity: this.entity,
            first_name: this.first_name,
            middle_names: this.middle_names,
            last_name: this.last_name,
            username: this.username,
            email: this.email,
            status: this.status,
            is_active: this.is_active,
            profile: this.profile,
            entity_name: this.entity_name,
            tenant_name: this.tenant_name,
            verificationStatus: this.verificationStatus,
            memberships: this.memberships,
            date_joined: this.date_joined
        };
    }

    // Check if user is active
    isActive = (): boolean => this.is_active;

    // Get profile display name
    getDisplayName = (): string => this.profile?.display_name ?? this.first_name;

    // Get phone number from profile
    getPhoneNumber = (): string => this.profile?.phone_number ?? "";

    // Get date of birth
    getDateOfBirth = (): Date | null => this.profile?.date_of_birth ?? null;

    // Get metadata
    getMetadata = (): any | null => this.profile?.metadata ?? null;

    getDefaultEntity = (): Entity | null => {
        var defaultEntity = this.memberships.find(m => m.is_default);
        if(!defaultEntity) {
            defaultEntity = this.memberships[0] ?? undefined;
        }
        return new Entity(defaultEntity?.entity ?? {});
    }

    static async me(): Promise<User> {  
        //if(this.myData != null)
        //    return this.myData;

        var response = await api.get('/users','/current/');

        if(response.success)
        {
            User.myData = User.fromJson(JSON.stringify(response.response.data));
            /*if (User.myData) {
                User.myData.verificationStatus = await VerificationManager.getVerificationStatus('user', User.myData.uuid);
            }*/
            secureLocalStorage.setItem("currentUser", JSON.stringify(User.myData));
            return User.myData || new User();
        }

        User.myData = new User();
        //User.myData.verificationStatus = await VerificationManager.getVerificationStatus('user', User.myData.uuid);
        return User.myData;
    }

    static async logout(redirect: boolean = true): Promise<void> {
        var token = await api.getCurrentToken();
        if(token)
        {
            await api.logout(token);
        }
        
        secureLocalStorage.clear();
        User.myData = null;
        if(redirect)
            window.location.href = '/';
    }

    static async fetch(uuid: string): Promise<User | null> {
        var response = await api.get('/users',`/${uuid}/`);

        if(response.success)
        {
            return User.fromJson(JSON.stringify(response.response.data));
        }

        return null;
    }

    async update(updatedFields?: Partial<UserData>): Promise<void> {
        var payload: any = {};
        
        // Only include fields that are being updated
        if (updatedFields) {
            if (updatedFields.first_name !== undefined) payload.first_name = updatedFields.first_name;
            if (updatedFields.last_name !== undefined) payload.last_name = updatedFields.last_name;
            if (updatedFields.email !== undefined) payload.email = updatedFields.email;
            if (updatedFields.username !== undefined) payload.username = updatedFields.username;
            if (updatedFields.status !== undefined) payload.status = updatedFields.status;
            if (updatedFields.is_active !== undefined) payload.is_active = updatedFields.is_active;
            if (updatedFields.profile !== undefined) payload.profile = updatedFields.profile;
        }
        
        var response = await api.patch('/users', `/${this.uuid}/`, payload);
    }

    toJson(): string {
        return JSON.stringify(this.toDataOBJ());
    }

    toDataOBJ(): any {
        return {
            uuid: this.uuid,
            tenant: this.tenant,
            entity: this.entity,
            first_name: this.first_name,
            middle_names: this.middle_names,
            last_name: this.last_name,
            username: this.username,
            email: this.email,
            status: this.status,
            is_active: this.is_active,
            profile: this.profile,
            entity_name: this.entity_name,
            tenant_name: this.tenant_name,
            verificationStatus: this.verificationStatus,
            date_joined: this.date_joined
        };
    }

    static fromJson(jsonStr: string): User | null {
        if(!jsonStr || jsonStr.trim() == "")
            return null;

        var jsonData = JSON.parse(jsonStr);

        if(jsonData === null || jsonData === false)
            return null;

        // Handle API response structure with nested data
        const userData = jsonData.data || jsonData;

        return new User(userData);
    }
}

export default User;

class VerificationManager {
    /**
     * Perform Anti-Money Laundering (AML) and Politically Exposed Person (PEP) screening
     * @param {string} idNumber - Person's passport number, national ID number, etc.
     * @param {string} personsName - Person or company's name or alias
     * @param {string} searchBy - Search by 'name' or 'id_number'
     * @returns {Promise<Object>} Response with verification result
     */
    static async AMLPEPCheck(idNumber: string, personsName: string, searchBy: string = 'id_number'): Promise<any> {
        const requestData = {
            id_number: idNumber,
            persons_name: personsName,
            search_by: searchBy
        };
        
        var response = await api.post('/verify', '/aml-pep/', requestData);
        return response;
    }

    /**
     * Verify South African ID number
     * @param {string} idNumber - 13-digit South African ID number
     * @returns {Promise<Object>} Response with ID verification result
     */
    static async verifyID(idNumber: string): Promise<any> {
        const requestData = {
            id_number: idNumber
        };
        
        var response = await api.post('/verify', '/id/', requestData);
        return response;
    }

    /**
     * Perform KYC verification with document uploads
     * @param {string} identityDocumentType - 'id_card', 'driver_license', or 'passport'
     * @param {File} selfiePhoto - Base64 encoded selfie photo
     * @param {File | null} documentFront - Front of document (required for ID card and driver's license)
     * @param {File | null} documentBack - Back of document (required for ID card and driver's license)
     * @param {File | null} passport - Passport biometric page (required for passport)
     * @returns {Promise<Object>} Response with KYC verification result
     */
    static async verifyKYC(identityDocumentType: string, selfiePhoto: File, documentFront: File | null = null, documentBack: File | null = null, passport: File | null = null): Promise<any> {
        const formData = new FormData();
        formData.append('identity_document_type', identityDocumentType);
        formData.append('selfie_photo', selfiePhoto);
        
        if (identityDocumentType === 'id_card' && documentFront && documentBack) {
            formData.append('id_card_front', documentFront);
            formData.append('id_card_back', documentBack);
        } else if (identityDocumentType === 'driver_license' && documentFront && documentBack) {
            formData.append('driver_license_front', documentFront);
            formData.append('driver_license_back', documentBack);
        } else if (identityDocumentType === 'passport' && passport) {
            formData.append('passport', passport);
        }
        
        var response = await api.post('/verify', '/kyc/', formData);
        return response;
    }

    /**
     * Verify bank account details
     * @param {string} accountNumber - Bank account number to verify
     * @param {string} idNumber - 13-digit South African ID number of account holder
     * @param {string} initials - Account holder's initials
     * @param {string} surname - Account holder's surname
     * @param {string} scope - 'entity' or 'user'
     * @returns {Promise<Object>} Response with bank verification result
     */
    static async verifyBank(accountNumber: string, idNumber: string, initials: string, surname: string, scope: string = 'user'): Promise<any> {
        const requestData = {
            account_number: accountNumber,
            idnumber: idNumber,
            initials: initials,
            surname: surname
        };
        
        var response = await api.post('/verify', `/bank/?scope=${scope}`, requestData);
        return response;
    }

    /**
     * Search for VAT registration details
     * @param {string} searchType - 'companyName', 'companyRegNo', or 'vatNumber'
     * @param {string | null} companyName - Company name (required when searchType is 'companyName')
     * @param {string | null} companyRegistrationNumber - Company registration number (required when searchType is 'companyRegNo')
     * @param {string | null} taxNumber - VAT/Tax number (required when searchType is 'vatNumber')
     * @returns {Promise<Object>} Response with VAT search results
     */
    static async searchVAT(searchType: string, companyName: string | null = null, companyRegistrationNumber: string | null = null, taxNumber: string | null = null): Promise<any> {
        const requestData: any = {
            search_type: searchType
        };
        
        if (searchType === 'companyName' && companyName) {
            requestData.company_name = companyName;
        } else if (searchType === 'companyRegNo' && companyRegistrationNumber) {
            requestData.company_registration_number = companyRegistrationNumber;
        } else if (searchType === 'vatNumber' && taxNumber) {
            requestData.tax_number = taxNumber;
        }
        
        var response = await api.post('/verify', '/vat/search/', requestData);
        return response;
    }

    /**
     * Verify VAT registration details (after VAT search)
     * @param {string} dbkey - Database key from VAT Search API response
     * @param {string} primaryId - Primary ID from VAT Search API response
     * @returns {Promise<Object>} Response with VAT verification result
     */
    static async verifyVAT(dbkey: string, primaryId: string): Promise<any> {
        const requestData = {
            dbkey: dbkey,
            primary_id: primaryId
        };
        
        var response = await api.post('/verify', '/vat/', requestData);
        return response;
    }

    /**
     * Get verification status for an entity or user
     * @param {string | null} scope - 'entity' or 'user' (optional)
     * @param {number | null} userId - Filter verifications by user ID (optional)
     * @param {string | null} verificationType - Filter by verification type (optional)
     * @returns {Promise<Object>} Response with verification status
     */
    static async getVerificationStatus(scope: string | null = null, userUUID: string | null = null, verificationType: string | null = null): Promise<VerificationStatus> {
        var ret: VerificationStatus = {
            verification_status: "unverified",
            verifications: []
        };

        var verf: VerificationData = {
            "type": "aml_pep",
            "scope": "user",
            "status": "unverified",
            "last_attempt": "2019-08-24T14:15:22Z",
            "failed_attempts": 0,
            "details": null
        };
        ret.verifications.push(verf);

        verf = {
            "type": "sa_id",
            "scope": "user",
            "status": "unverified",
            "last_attempt": "2019-08-24T14:15:22Z",
            "failed_attempts": 0,
            "details": null
        };
        ret.verifications.push(verf);

        verf = {
            "type": "kyc",
            "scope": "entity",
            "status": "unverified",
            "last_attempt": "2019-08-24T14:15:22Z",
            "failed_attempts": 0,
            "details": null
        };
        ret.verifications.push(verf);

        return ret;

        // Uncomment when API is ready
        /*
        let queryParams: string[] = [];
        
        if (scope) queryParams.push(`scope=${scope}`);
        if (userId) queryParams.push(`user_id=${userId}`);
        if (verificationType) queryParams.push(`verification_type=${verificationType}`);
        
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        
        var response = await api.get('/verify', `/status/${queryString}`);
        return response;
        */
    }
}
