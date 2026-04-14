'use client';
import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Table, Modal, Form, Button, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import successGif from '../../../../../../public/images/success.gif';
import api from "../../../../../../utilities/APIConnector/client";
import User from "@/models/User/User";
import secureLocalStorage from "react-secure-storage";
import { updateAuthCache } from "@/utilities/auth/authUtils";
import Entity from "@/models/Entity/Entity";

interface FormData {
    [key: string]: any;
}

interface FinalizeRegistrationProps {
    setIsValid: (isValid: boolean) => void;
    data: FormData;
}

interface ApiResponse {
    success: boolean;
    response?: any;
    error?: any;
}

const FinalizeRegistration = forwardRef<any, FinalizeRegistrationProps>(({ setIsValid, data }, ref) => {
    const [errors, setErrors] = useState<any[]>([]);        
    const [confirmedShow, setConfirmedShow] = useState<boolean>(false);

    const handleShow = () => setConfirmedShow(true);

    const validateForm = (): boolean => {
        return true;
    };

    useImperativeHandle(ref, () => ({
        validateForm
    }));

    const local_fieldNameMap: Record<string, string> = {
        "first_name": "First Name",
        "last_name": "Last Name",
        "identification": "Identification",
        "email": "Email Address",
        "legalEntityName": "Legal Entity Name",
        "companyRegistrationNo": "Company Registration Number",
        "taxNumber": "VAT Number",
        "taxRegistered": "VAT Registered"
    };

    const api_to_local_fieldNameMap: Record<string, string> = {
        "first_name": "first_name",
        "last_name": "last_name",
        "identification": "identification",
        "email": "email",
        "name": "legalEntityName",
        "registration_number": "companyRegistrationNo",
        "tax_number": "taxNumber",
        "is_tax_registered": "taxRegistered"
    };

    const renderErrors = (errors: any[]) => {
        if(errors.length === 0) {
            return null;
        }

        console.error(errors);

        errors.forEach((error,ind) => {
            var fieldname = error.field ?? "";
            fieldname = fieldname.split(".").pop()?.toString() ?? "";
            var local_fieldname = api_to_local_fieldNameMap[fieldname.toString()] ?? "";
            errors[ind].fieldname = local_fieldname;
        });

        return (
            <div>
                <Alert variant="danger">
                    <ul style={{ marginBottom: '0px' }}>
                        {errors.map((error, index) => (
                            <li key={index}><b>{local_fieldNameMap[error.fieldname]}:</b> {error.error_message}</li>
                        ))}
                    </ul>
                </Alert>
            </div>
        );
    };

    const fieldsWithErrors = errors.map((error, index) => {
        return error.fieldname ?? "";
    });

    return (
        <>
            <Modal show={confirmedShow}>
                <Modal.Header>
                <Modal.Title>Welcome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                        <div className="d-flex justify-content-center">
                            <img src={successGif.src} style={{width:'10%', margin:'40px', marginTop:'0px', minWidth:'100px'}} alt="Success"/>
                        </div>
                        </Col>
                    </Row>
                    <p style={{ textAlign: 'center' }}>That's it, let's get you travelPaying!</p>
                    <p style={{ textAlign: 'center' }}>You'll be logged in to the system and redirected to the dashboard shortly.</p>
                </Modal.Body>
                <Modal.Footer style={{ textAlign: 'center' }}>
                <Spinner animation="border" role="status"/>
                </Modal.Footer>
            </Modal>
            <div style={{ padding: '20px' }}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '18px' }}>
                            Almost There!
                        </p>
                        <p>Please review your details before finalizing your registration</p>
                    </Col>
                </Row>

                {renderErrors(errors)}

                <div>
                    <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>
                        Your Details
                    </h4>
                    <Table bordered striped>
                        <tbody>
                            <tr className={fieldsWithErrors.includes("first_name") ? "error-row" : ""}><td style={{ width: '25%' }}>First Name:</td><td>{data.first_name}</td></tr>
                            <tr className={fieldsWithErrors.includes("last_name") ? "error-row" : ""}><td style={{ width: '25%' }}>Last Name:</td><td>{data.last_name}</td></tr>
                            <tr className={fieldsWithErrors.includes("identification") ? "error-row" : ""}><td style={{ width: '25%' }}>Identification:</td><td>{data.identification}</td></tr>
                            <tr className={fieldsWithErrors.includes("email") ? "error-row" : ""}><td style={{ width: '25%' }}>Email Address:</td><td>{data.email}</td></tr>
                        </tbody>
                    </Table>

                    <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>
                        Company Details
                    </h4>
                    <Table bordered striped>
                        <tbody>
                            <tr className={fieldsWithErrors.includes("legalEntityName") ? "error-row" : ""}><td style={{ width: '25%' }}>Legal Entity Name:</td><td>{data.legalEntityName}</td></tr>
                            <tr className={fieldsWithErrors.includes("companyRegistrationNo") ? "error-row" : ""}><td style={{ width: '25%' }}>Registration Number:</td><td>{data.companyRegistrationNo}</td></tr>
                            <tr className={fieldsWithErrors.includes("taxRegistered") ? "error-row" : ""}><td style={{ width: '25%' }}>VAT Registered:</td><td>{data.taxRegistered ? "Yes" : "No"}</td></tr>
                            {data.taxRegistered && <tr className={fieldsWithErrors.includes("taxNumber") ? "error-row" : ""}><td style={{ width: '25%' }}>VAT Number:</td><td>{data.taxNumber}</td></tr>}
                        </tbody>
                    </Table>
                </div>

                <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '20px', marginBottom: '20px' }}>
                    Everything looking good? Let's get you registered!
                </p>
                <p style={{ textAlign: 'center' }}>
                    <Button size="lg" variant="success" style={{backgroundColor: '#273896', borderColor: '#273896'}} onClick={async () => { 

                        var subData = {
                            entity: {
                                name: data.legalEntityName,
                                registration_number: data.companyRegistrationNo,
                                tax_number: data.taxNumber,
                                is_tax_registered: data.taxRegistered,
                                profile: {
                                    display_name: data.agency,
                                    metadata: {}
                                },
                            },
                            users: [
                                {
                                    first_name: data.first_name,
                                    last_name: data.last_name,
                                    username: data.email,
                                    password: data.password,
                                    email: data.email,
                                    identification: data.identification,
                                    profile: {
                                        display_name: data.first_name,
                                        metadata: {}
                                    }
                                }
                            ]
                        };

                        setErrors([]);

                        const response: ApiResponse | undefined = await api.post('/register','',subData,false);
                    
                        if(response?.success)
                        {
                            await response.response;

                            handleShow(); 
                            try {
                                const tok = await api.token(data.email, data.password, true);
                                
                                if (tok.success) {
                                    secureLocalStorage.setItem("authToken", JSON.stringify(tok));
                                    api.storeToken(tok);
                                    updateAuthCache(true, tok);
                                    const user = await User.me();
                                    const companies = user.memberships?.map(m => new Entity(m.entity)) ?? [];
                                    if(companies.length > 1)
                                    {
                                        window.location.href = "/companySelect";
                                    }
                                    else
                                    if(companies.length === 0)
                                    {
                                        localStorage.setItem('selectedCompany', "-99");
                                        localStorage.setItem('selectedCompanyName', "N/A");
                                        localStorage.setItem('selectedCompanyUUID', "");
                                        window.location.href = `/dashboard`;
                                    }
                                    else
                                    if(companies.length == 1)
                                    {
                                        localStorage.setItem('selectedCompany', companies[0].party_uuid);
                                        localStorage.setItem('selectedCompanyName', companies[0].name);
                                        localStorage.setItem('selectedCompanyUUID', companies[0].uuid);
                                        window.location.href = `/dashboard`;
                                    }
                                } else {
                                    window.location.href = "/login";
                                }
                            } catch (err) {
                                window.location.href = "/login";
                                console.error(err);
                            }
                        }
                        else
                        {
                            try {
                                if(typeof response.error === 'object') {
                                    var errors = response.error as any[];
                                    var errorMessages = [];
                                    for(var errorno in errors) {
                                        errorMessages.push(errors[errorno]);
                                    }
                                    setErrors(errorMessages);
                                }
                                else
                                {
                                    alert("An error occurred while completing your registration:\n\n" + response.error);
                                }
                            }
                            catch(error) {
                                alert("An error occurred while completing your registration.");
                                console.error(error);
                            }
                        }
                    }}>
                        Complete Registration
                    </Button>
                </p>
            </div>
        </>
    );
});



export default FinalizeRegistration;
