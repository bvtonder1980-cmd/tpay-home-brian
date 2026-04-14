import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Form, Row, Col, Card, Alert } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface FormData {
    password: string;
    passwordConfirm: string;
}

interface PasswordSetupProps {
    setIsValid: (isValid: boolean) => void;
    data: FormData;
    onPercentageChange?: (percentage: number) => void;
}

interface FormErrors {
    password?: string;
    passwordConfirm?: string;
}

interface CriteriaMet {
    minLength: boolean;
    uppercase: boolean;
    lowercase: boolean;
    symbol: boolean;
    strong: boolean;
}

const PasswordSetup = forwardRef<any, PasswordSetupProps>(({ setIsValid, data, onPercentageChange }, ref) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    const [errors, setErrors] = useState<FormErrors>({});

    const [formData, setFormData] = useState<FormData>({
        password: data?.password || '',
        passwordConfirm: data?.passwordConfirm || '',
    });

    const [criteriaMet, setCriteriaMet] = useState<CriteriaMet>({
        minLength:(formData.password.length >= 8),
        uppercase:(/[A-Z]/.test(formData.password)),
        lowercase:(/[a-z]/.test(formData.password)),
        symbol:(/[@$!%*?&]/.test(formData.password)),
        strong: (formData.password.length >= 8) && (/[A-Z]/.test(formData.password)) && (/[a-z]/.test(formData.password)) && (/[@$!%*?&]/.test(formData.password))
    });

    const validatePassword = (field: string, value: string) => {
        validateForm();
    };

    const getFormData = (): FormData => formData;
    
    const validateForm = (): boolean => {
        let newErrors: FormErrors = {};
        
        if(Object.values(criteriaMet).includes(false))
            newErrors.password = "Your password doesn't meet the strength requirements";

        if (formData.password.trim() === "") {
            newErrors.password = 'Password is required';
        }

        if (formData.passwordConfirm.trim() === "") {
            newErrors.passwordConfirm = 'Please confirm your password';
        }

        if ((formData.passwordConfirm.trim() !== "") && (formData.password.trim() !== "") && formData.passwordConfirm !== formData.password) {
            newErrors.passwordConfirm = 'Passwords do not match';
        }

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0;
        setIsValid(isValid);
        return isValid;
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let newErrors: FormErrors = {};

        validatePasswordStrength(formData.password);
        
        if(Object.values(criteriaMet).includes(false))
            newErrors.password = "Your password doesn't meet the strength requirements";

        if (formData.password.trim() === "") {
            newErrors.password = 'Password is required';
        }

        if(formData.passwordConfirm && formData.passwordConfirm.length > 0)
        {
            if (formData.passwordConfirm.trim() === "") {
                newErrors.passwordConfirm = 'Please confirm your password';
            }

            if (formData.passwordConfirm.trim() !== "" && formData.password.trim() !== "" && formData.passwordConfirm !== formData.password) {
                newErrors.passwordConfirm = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0;
        setIsValid(isValid);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === "newPassword") {
            setFormData({
                ...formData,
                password: value
            });
            //validatePasswordStrength(value);
            //validatePassword(id, value);
        }
        if (id === "confirmNewPassword") {
            setFormData({
                ...formData,
                passwordConfirm: value
            });
            //validatePassword(id, value);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        validatePassword(id, value);
    };

    const validatePasswordStrength = (password: string) => {
        var crit: CriteriaMet = {
            minLength: false,
            uppercase: false,
            lowercase: false,
            symbol: false,
            strong: false
        };

        if(password.length >= 8)
            crit.minLength = true;
        else
            crit.minLength = false;

        if(/[A-Z]/.test(password))
            crit.uppercase = true;
        else
            crit.uppercase = false;

        if(/[a-z]/.test(password))
            crit.lowercase = true;
        else
            crit.lowercase = false;

        if(/[@$!%*?&]/.test(password))
            crit.symbol = true;
        else
            crit.symbol = false;

        crit.strong = crit.minLength && crit.uppercase && crit.lowercase && crit.symbol;

        setCriteriaMet(crit);
    };

    // Percentage complete logic
    const getPercentageComplete = (): number => {
        // Required: password, passwordConfirm, and all password criteria met
        let filled = 0;
        const total = 3; // password, passwordConfirm, strong
        if (formData.password && formData.password.length > 0) filled++;
        if (formData.passwordConfirm && formData.passwordConfirm.length > 0) filled++;
        if (criteriaMet.strong) filled++;
        return Math.round((filled / total) * 100);
    };

    // Event-driven callback for percentage change
    const [lastPercent, setLastPercent] = useState<number>(0);
    useEffect(() => {
        const percent = getPercentageComplete();
        if (percent !== lastPercent) {
            setLastPercent(percent);
            if (typeof onPercentageChange === 'function') {
                onPercentageChange(percent);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, criteriaMet]);

    useImperativeHandle(ref, () => ({
        validateForm,
        getFormData,
        getPercentageComplete
    }));

    return (
        <>
            <div style={{ padding: '20px' }}>
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ textAlign: 'center' }}>Create a secure password for your account</p>
                    </div>
                </div>
                <div>
                        <div>
                            <Col style={{ textAlign: 'center' }}>
                                <Alert style={{fontSize:'12px', padding:'10px', backgroundColor: '#cccccc', borderColor: 'grey', color: 'black'}}>
                                    Your password must meet the following requirements:
                                    <div className="passwordChecklist">
                                        <ul>
                                            <li>{(criteriaMet.minLength ? <CheckIcon color="success"/> : <><CloseIcon fontSize="small" color="error"/>&nbsp;</>)}&nbsp;&nbsp;<span style={{color:(criteriaMet.minLength ? "green" : "red")}}>Minimum 8 characters</span></li>
                                            <li>{(criteriaMet.uppercase ? <CheckIcon color="success"/> : <><CloseIcon fontSize="small" color="error"/>&nbsp;</>)}&nbsp;&nbsp;<span style={{color:(criteriaMet.uppercase ? "green" : "red")}}>At least one uppercase letter</span></li>
                                            <li>{(criteriaMet.lowercase ? <CheckIcon color="success"/> : <><CloseIcon fontSize="small" color="error"/>&nbsp;</>)}&nbsp;&nbsp;<span style={{color:(criteriaMet.lowercase ? "green" : "red")}}>At least one lowercase letter</span></li>
                                            <li>{(criteriaMet.symbol ? <CheckIcon color="success"/> : <><CloseIcon fontSize="small" color="error"/>&nbsp;</>)}&nbsp;&nbsp;<span style={{color:(criteriaMet.symbol ? "green" : "red")}}>At least one symbol (@$!%*?&)</span></li>
                                        </ul>
                                    </div>
                                    <span id="errorMessage" className="font-weight-bold text-danger"></span>
                                </Alert>
                            </Col>
                        </div>
                        <div>
                            <Col>
                                <Form.Label style={{marginTop:'0px'}} className="regFormLabel" htmlFor="newPassword">
                                    Password <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="newPassword"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onKeyUp={handleKeyUp}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Col>
                        </div>

                        <div style={{marginTop:'20px'}}>
                            <Col>
                                <Form.Label style={{marginTop:'0px'}} className="regFormLabel" htmlFor="confirmNewPassword">
                                    Confirm Password <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="confirmNewPassword"
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                    onKeyUp={handleKeyUp}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.passwordConfirm}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.passwordConfirm}
                                </Form.Control.Feedback>
                            </Col>
                        </div>
                </div>
            </div>
        </>
    );
});

export default PasswordSetup;
