import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Form, Card, Row, Col } from 'react-bootstrap';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { getYear, getMonth } from "date-fns";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import dateFormat from "dateformat";

interface FormData {
    first_name: string;
    last_name: string;
    nickname: string;
    identification: string;
    email: string;
    cellNo: string;
    dob?: string;
    termsAccepted: boolean;
}

interface FormErrors {
    first_name?: string;
    last_name?: string;
    identification?: string;
    email?: string;
    cellNo?: string;
    dob?: string;
    termsAccepted?: string;
}

interface UserDetailsProps {
    setIsValid: (isValid: boolean) => void;
    data?: Partial<FormData>;
    onPercentageChange?: (percentage: number) => void;
}

const UserDetails = forwardRef<any, UserDetailsProps>(({ setIsValid, data, onPercentageChange }, ref) => {
    
    const [formData, setFormData] = useState<FormData>(
        {...{
        first_name: '',
        last_name: '',
        nickname: '',
        identification: '',
        email: '',
        cellNo: '',
        termsAccepted: false,
    },
    ...data ?? {}
});

    const [errors, setErrors] = useState<FormErrors>({});
    const [lastPercent, setLastPercent] = useState<number>(0);

    const years = Array.from({length: getYear(new Date()) - 1925 + 1}, (_, i) => i + 1925);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prev) => ({ ...prev, [id]: fieldValue }));
        validateField(id, fieldValue);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        /*if (id === 'first_name' && !formData.nickname) {
            setFormData({
                ...formData,
                nickname: value.toString().split(' ')[0] ,
            });
        }*/
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData((prevData) => ({ ...prevData, cellNo: value || '' }));
    
        if (!value || isValidPhoneNumber(value)) {
          setErrors((prevErrors) => ({ ...prevErrors, cellNo: "" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, cellNo: "Invalid phone number" }));
        }
      };

    const validateField = (field: string, value: string | boolean) => {
        let newErrors = { ...errors };
        switch (field) {
            case 'first_name':
                newErrors.first_name = value ? '' : 'First name is required';
                break;
            case 'last_name':
                newErrors.last_name = value ? '' : 'Last name is required';
                break;
            case 'identification':
                newErrors.identification = value ? '' : 'Identification is required';
                break;
            case 'email':
                if (!value) {
                    newErrors.email = 'Email address is required';
                } else if (!/\S+@\S+\.\S+/.test(value as string)) {
                    newErrors.email = 'Please enter a valid email address';
                } else {
                    newErrors.email = '';
                }
                break;
            case 'cellNo':
                newErrors.cellNo = value ? '' : 'Contact number is required';
                break;
            case 'termsAccepted':
                newErrors.termsAccepted = value ? '' : 'You must accept the terms and conditions';
                break;
            default:
                break;
        }
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).every(key => !newErrors[key as keyof FormErrors]));
    };

    const validateForm = (): boolean => {
        let newErrors: FormErrors = {};
        if (!formData.identification) newErrors.identification = 'Identification is required';
        if (!formData.first_name) newErrors.first_name = 'First name is required';
        if (!formData.last_name) newErrors.last_name = 'Last name is required';
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        //if (!formData.cellNo) newErrors.cellNo = 'Contact number is required';
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0;
        setIsValid(isValid);
        return isValid;
    };

    const getUserNickname = (): string => formData.first_name;

    const getUserData = (): FormData => formData;
    const getFormData = (): FormData => formData;

    const getPercentageComplete = (): number => {
        // List all required fields here
        const requiredFields = [
            'first_name',
            'last_name',
            'identification',
            //'dob',
            'email',
            //'cellNo',
            'termsAccepted'
        ];
        let filled = 0;
        requiredFields.forEach(field => {
            if (field === 'termsAccepted') {
                if (formData[field as keyof FormData]) filled++;
            } else if (formData[field as keyof FormData] && formData[field as keyof FormData] !== '') {
                filled++;
            }
        });
        return Math.round((filled / requiredFields.length) * 100);
    };

    useEffect(() => {
        const percent = getPercentageComplete();
        if (percent !== lastPercent) {
            setLastPercent(percent);
            if (typeof onPercentageChange === 'function') {
                onPercentageChange(percent);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    useImperativeHandle(ref, () => ({
        validateForm,
        getUserNickname,
        getUserData,
        getFormData,
        getPercentageComplete
    }));

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div style={{ padding: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p>Before we get started, we need to create your profile</p>
                        <p>This information will be used to set up your account and verify your identity</p>
                    </div>
                    <hr/>
                    <div>
                        <div style={{marginTop:'20px'}}>
                            <Form.Label style={{marginTop:'0px'}} className="regFormLabel" htmlFor="first_name">First Name <span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.first_name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.first_name}
                            </Form.Control.Feedback>
                        </div>
                        <div>
                            <Form.Label className="regFormLabel" htmlFor="last_name">Last Name <span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                isInvalid={!!errors.last_name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.last_name}
                            </Form.Control.Feedback>
                        </div>
                        {/*<div>
                            <Form.Label className="regFormLabel" htmlFor="nickname">Nickname</Form.Label>
                            <Form.Control
                                type="text"
                                id="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                            />
                        </div>*/}
                        <div>
                            <Form.Label className="regFormLabel" htmlFor="identification">Identification Number <span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="identification"
                                value={formData.identification}
                                onChange={handleChange}
                            />
                        </div>
                        {/*<div style={{marginTop:'20px'}}>
                            <Form.Label style={{marginTop:'0px'}} className="regFormLabel" htmlFor="dob">Date of Birth <span style={{color:'red'}}>*</span></Form.Label>
                            <div className="form-control" style={{padding:0}}>
                            <DatePicker 
                                onChange={(date: Date | null) => {
                                    if (date) {
                                        const dateString = dateFormat(date, 'yyyy-mm-dd');
                                        setFormData({...formData, dob: dateString});
                                        validateField('dob', dateString);
                                    }
                                }}
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled,
                                  }) => (
                                    <div
                                      style={{
                                        margin: 5,
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                        <Row>
                                            <Col xs={2}>
                                                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                    <ArrowLeft />
                                                </button>
                                            </Col>
                                            <Col xs={3}>
                                                <select
                                                    value={getYear(date)}
                                                    className="form-control"
                                                    style={{fontSize:'12px', width:'50px', padding:'4px'}}
                                                    onChange={({ target: { value } }) => changeYear(Number(value))}
                                                >
                                                    {years.map((option: number) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                    ))}
                                                </select>
                                            </Col>
                                            <Col xs={5} style={{textAlign:'center'}}>
                                                <select
                                                    className="form-control"
                                                    style={{fontSize:'12px', width:'100%',  padding:'4px'}}
                                                    value={months[getMonth(date)]}
                                                    onChange={({ target: { value } }) =>
                                                    changeMonth(months.indexOf(value))
                                                    }
                                                >
                                                    {months.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                    ))}
                                                </select>
                                            </Col>
                                            <Col xs={2}>
                                                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                    <ArrowRight />
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                  )}
                                selected={formData.dob ? new Date(formData.dob) : null}
                                className="w-100"
                                dateFormat="yyyy-MM-dd"
                                placeholderText="YYYY-MM-DD"
                            />
                            </div>
                            
                            {errors.dob && <div className="invalid-feedback d-block">{errors.dob}</div>}
                        </div>*/}
                        <div>
                            <Form.Label className="regFormLabel" htmlFor="email">Email Address <span style={{color:'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={true}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </div>
                        {/*<div>
                            <Form.Label className="regFormLabel" htmlFor="cellNo">Contact Number <span style={{color:'red'}}>*</span></Form.Label>
                            <PhoneInput
                                international
                                defaultCountry="ZA"
                                value={formData.cellNo}
                                onChange={handlePhoneChange}
                                className={` ${errors.cellNo ? "is-invalid" : ""}`}
                                />
                            <Form.Control.Feedback type="invalid">
                                {errors.cellNo}
                            </Form.Control.Feedback>
                        </div>*/}
                        <div style={{marginTop:'20px'}}>
                            <Form.Check
                                type="checkbox"
                                id="termsAccepted"
                                label="I agree to the terms and conditions"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                isInvalid={!!errors.termsAccepted}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.termsAccepted}
                            </Form.Control.Feedback>
                        </div>
                    </div>
                </div>
            </LocalizationProvider>
        </>
    );
});

export default UserDetails;
