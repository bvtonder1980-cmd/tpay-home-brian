'use client';
import { Button, Form, Spinner } from "react-bootstrap";
import Stepper from '@mui/material/Stepper';
import PropTypes from 'prop-types';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import UserIcon from '@mui/icons-material/Person';
import PolicyIcon from '@mui/icons-material/Policy';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PasswordIcon from '@mui/icons-material/Password';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import React, { useState, useRef, createRef, useEffect } from 'react';
import UserDetails from "./registration_steps/UserDetails";
import { useTranslation, Trans } from "react-i18next";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import 'react-circular-progressbar/dist/styles.css';

import './Register.css';
import PasswordSetup from "./registration_steps/PasswordSetup";
import LegalEntityDetails from "./registration_steps/LegalEntityDetails";
import FinalizeRegistration from "./registration_steps/FinalizeRegistration";
import api from "@/utilities/APIConnector/client";

import "./LoginBox.scss";

import { useRouter } from "next/navigation";
import { Close } from "@mui/icons-material";
import { getScrolledPercentage } from "@/app/home2/homeScripts";

interface CustomFormData {
    [key: string]: any;
}

interface StepState {
    currentStep: number;
}

interface RegisterProps {
    progressUpdated: (percentage: number) => void;
    showRegister: boolean;
    setShowRegister: (show: boolean) => void;
    goToLogin: () => void;
    setLoginMessage: (message: string) => void;
    setLoginError: (error: string) => void;
}

interface StepRef {
    validateForm: () => boolean;
    getFormData: () => CustomFormData;
}

let percentages: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0
};

export default function Register({ setLoginMessage, setLoginError, goToLogin, progressUpdated, showRegister, setShowRegister }: RegisterProps) {
    const { t } = useTranslation('register');
    const router = useRouter();
    const initialStep: StepState = {
        currentStep: 1
    };

    const [state, setState] = useState<StepState>(initialStep);
    const [isValidUserDetails, setIsValidUserDetails] = useState<boolean>(false);
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
    const [isValidLegalEntity, setIsValidLegalEntity] = useState<boolean>(false);
    const [isValidFinalizeRegistration, setIsValidFinalizeRegistration] = useState<boolean>(false);
    const userDetailsRef = useRef<StepRef>(null);
    const passwordSetupRef = useRef<StepRef>(null);
    const legalEntityDetailsRef = useRef<StepRef>(null);
    const finalizeRegistrationRef = useRef<StepRef>(null);

    const [requestNewAllowed, setRequestNewAllowed] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(0);

    const [rt, setRt] = useState<number>(-1);

    // Countdown timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        if (countdown > 0) {
            interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        setRequestNewAllowed(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [countdown]);

    const [emailChecked, setEmailChecked] = useState<boolean>(false);
    const [alreadyRegistered, setAlreadyRegistered] = useState<boolean>(false);
    const [codeSent, setCodeSent] = useState<boolean>(false);

    const [codeSending, setCodeSending] = useState<boolean>(false);
    const [codeVerifying, setCodeVerifying] = useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [totalPercentage, setTotalPercentage] = useState<number>(0);

    const [data, setData] = useState<CustomFormData>({});

    const [otp, setOtp] = useState<string>("");

    const [init, setInit] = useState<boolean>(false);

    const handlePercentageChange = (percent: number, step: number) => {
        
        percentages[step] = percent;
        var total = ((percentages[1] + percentages[2] + percentages[3]) / 3);
        setTotalPercentage(Math.round(total));

        progressUpdated(Math.round(total));
    };

    const handleClick = (clickType: string) => {
        const { currentStep } = state;
        let newStep = currentStep;
        clickType === "next" ? newStep++ : newStep--;

        if (newStep > 0 && newStep <= 5) {
            if (clickType === "next") {
                if(newStep == 2)
                {
                    const isFormValid = userDetailsRef.current?.validateForm();
                    if (!isFormValid) {
                        alert("Please fill out all required fields correctly.");
                        return;
                    }

                    setData({
                        ...data,
                        ...userDetailsRef.current?.getFormData()
                    })
                }
                else
                if(newStep == 3)
                {
                    const isFormValid = passwordSetupRef.current?.validateForm();
                    if (!isFormValid) {
                        alert("Please fill out all required fields correctly.");
                        return;
                    }

                    setData({
                        ...data,
                        ...passwordSetupRef.current?.getFormData()
                    })
                }
                else
                if(newStep == 4)
                {
                    const isFormValid = legalEntityDetailsRef.current?.validateForm();
                    if (!isFormValid) {
                        alert("Please fill out all required fields correctly.");
                        return;
                    }

                    setData({
                        ...data,
                        ...legalEntityDetailsRef.current?.getFormData()
                    })
                }
                else
                if(newStep == 5)
                {
                }
            }
            document.getElementsByClassName('login-box-content')[0].scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            setState({
                ...state,
                currentStep: newStep
            });
        }
    };

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#0090d6'
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#0090d6'
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor: '#eaeaf0',
            borderRadius: 1,
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
    }));

    const ColorlibStepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(({ theme, ownerState }) => ({
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        transition: '250ms ease-in-out',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[700],
        }),
        ...(ownerState.active && {
            backgroundColor: '#48626f',
        }),
        ...(ownerState.completed && {
            backgroundColor: '#0090d6',
        }),
    }));
    
    const handleStepClick = (label: string) => {
        var step = steps.indexOf(label) + 1;

        var allow = true;

        var lastGoodStep = -1;

        if(step > state.currentStep)
            for(var i = state.currentStep; i<step; i++)
            {
                if(!allow)
                    break;

                if(i == 1)
                {
                    if(userDetailsRef.current == undefined)
                    {
                        allow = isValidUserDetails;
                    }
                    else
                    {
                        const isFormValid = userDetailsRef.current.validateForm();
                        if (!isFormValid) {
                            alert("Please fill out all required fields correctly.");
                            return;
                        }
    
                        setData({
                            ...data,
                            ...userDetailsRef.current.getFormData()
                        })
                    }

                    if(allow)
                        lastGoodStep = i;
                }
                else
                if(i == 2)
                {
                    if(passwordSetupRef.current == undefined)
                    {
                        allow = isValidPassword;
                    }
                    else
                    {
                        const isFormValid = passwordSetupRef.current.validateForm();
                        if (!isFormValid) {
                            alert("Please fill out all required fields correctly.");
                            return;
                        }
    
                        setData({
                            ...data,
                            ...passwordSetupRef.current.getFormData()
                        })
                    }

                    if(allow)
                        lastGoodStep = i;
                }
                else
                if(i == 3)
                {
                    if(legalEntityDetailsRef.current == undefined)
                    {
                        allow = isValidLegalEntity;
                    }
                    else
                    {
                        const isFormValid = legalEntityDetailsRef.current.validateForm();
                        if (!isFormValid) {
                            alert("Please fill out all required fields correctly.");
                            return;
                        }
    
                        setData({
                            ...data,
                            ...legalEntityDetailsRef.current.getFormData()
                        })
                    }

                    if(allow)
                        lastGoodStep = i;
                }
            }

        if(allow)
            setState(
            {
                ...state,
                currentStep: step
            });
        else
            setState(
            {
                ...state,
                currentStep: lastGoodStep + 1
            });
    };

    const checkEmailExists = async () => {
        var r = await api.get("/users", `/exists?email=${email}`, false);

        if(r.success)
        {
            if(r.response.data.exists)
            {
                setAlreadyRegistered(true);
                setLoginMessage("You are already registered. Please login to continue.");
                setLoginError("");
                goToLogin();
                return true;
            }
        }

        return false;
    }

    const checkEmail = async () => {
        setCodeSent(false);
        setCodeSending(true);
        setEmailError("");

        if(!email)
        {
            setEmailError("Please enter your email address");
            setCodeSending(false);
            return;
        }

        if(!/\S+@\S+\.\S+/.test(email))
        {
            setEmailError("Please enter a valid email address");
            setCodeSending(false);
            return;
        }

        // var rr = await api.post()

        const r = await requestVerificationCode(email);
        
        if(r.success)
        {
            setCodeSent(true);
            setRt(r.response.rt);
        }
        else
        {
            setEmailError(r.error);
        }

        setCodeSending(false);
    }

    const requestVerificationCode = async (email: string) => {

        const r = await api.post("/auth/otp", "/email", {
            email: email
        },false);

        if(!r.success)
        {
            setRequestNewAllowed(true);
            setCountdown(0);
        }
        else
        {
            setRequestNewAllowed(false);
            setCountdown(60); // Start 60-second countdown
        }

        return r;
    }

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        
        // Only allow numbers
        if (!/^\d*$/.test(value)) {
            return;
        }

        // Update the OTP string
        const newOtp = otp.split('');
        newOtp[index] = value;
        const updatedOtp = newOtp.join('').slice(0, 6);
        setOtp(updatedOtp);
        setEmailError('');

        // Auto-focus next input if value is entered
        if (value && index < 5) {
            const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const pasteOtp = (text: string) => {
        const trimmed = (text || '').trim();
        const match = trimmed.match(/^\d+/);
        if (!match) return;

        const digits = match[0].slice(0, 6);
        if (!digits) return;

        setOtp(digits);
        setEmailError('');

        // Focus next input (or last) after paste
        const nextIndex = Math.min(digits.length, 5);
        const nextInput = document.querySelector(`input[data-index="${nextIndex}"]`) as HTMLInputElement | null;
        nextInput?.focus();
    };

    const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const text = e.clipboardData.getData('text');
        if (!text) return;
        e.preventDefault();
        pasteOtp(text);
    };

    const handleOtpKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        // Handle Ctrl/Cmd+V paste (some browsers don't reliably fire this onKeyUp; onPaste covers that case)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
            void navigator.clipboard?.readText?.().then((text) => {
                if (text) pasteOtp(text);
            });
            return;
        }
        
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
            }
        }
        
        // Handle arrow keys
        if (e.key === 'ArrowLeft' && index > 0) {
            const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
            }
        }
        
        if (e.key === 'ArrowRight' && index < 5) {
            const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
            if (nextInput) {
                nextInput.focus();
            }
        }
        
        if(otp.length == 6)
        {
            verifyCode();
        }
    };

    const handleResendCode = async () => {
        if (!requestNewAllowed) return;
        
        setCodeSending(true);
        setOtp("");
        const r = await requestVerificationCode(email);
        
        if (r.success) {
            setRt(r.response.rt || Date.now());
            setCodeSent(true);
            setEmailError('');
        } else {
            setEmailError(r.error || 'Failed to send verification code');
        }
        
        setCodeSending(false);
    };

    const verifyCode = async () => {
        // Validate OTP length before proceeding
        if (otp.length !== 6) {
            setEmailError('Please enter all 6 digits of the verification code');
            return;
        }
        
        setCodeVerifying(true);
        const r = await api.post("/auth/otp", "/email/verify", {
            email: email,
            rt: rt,
            otp: otp
        },false);
        if(r.success)
        {
            setData({
                ...data,
                email: email
            })
            
            if(await checkEmailExists())
            {
                return;
            }

            setEmailChecked(true);
        }
        else
        {
            setEmailError(r.error);
        }

        

        setCodeVerifying(false);
    }

    interface ColorlibStepIconProps {
        active?: boolean;
        completed?: boolean;
        className?: string;
        icon?: React.ReactNode;
    }

    function ColorlibStepIcon(props: ColorlibStepIconProps) {
        const { active, completed, className } = props;

        const icons: { [key: string]: React.ReactElement } = {
            '1': <UserIcon />,
            '2': <PasswordIcon />,
            '3': <PolicyIcon />,
            '4': <ChecklistIcon />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    ColorlibStepIcon.propTypes = {
        active: PropTypes.bool,
        className: PropTypes.string,
        completed: PropTypes.bool,
        icon: PropTypes.node,
    };

    useEffect(() => {
        if(showRegister)
        {
            window.onscroll = () => {
                var scrolledPercentage = getScrolledPercentage();
                if(scrolledPercentage <= 97)
                {
                    setShowRegister(false);
                }   
            }
        }
    }, [showRegister]);

    const steps = ['Your Details', 'Password', 'Business Details', 'Finalize'];
    const stepConts: any[] = [
                <UserDetails key="userDetails" onPercentageChange={(percent: number)=>handlePercentageChange(percent, 1)} ref={userDetailsRef} data={data} setIsValid={setIsValidUserDetails} />,
                <PasswordSetup key="passwordSetup" onPercentageChange={(percent: number)=>handlePercentageChange(percent, 2)} data={data as any} ref={passwordSetupRef} setIsValid={setIsValidPassword} />,
                <LegalEntityDetails key="legalEntityDetails" onPercentageChange={(percent: number)=>handlePercentageChange(percent, 3)} data={data} ref={legalEntityDetailsRef} setIsValid={setIsValidLegalEntity} />,
                <FinalizeRegistration key="finalizeRegistration" data={data} ref={finalizeRegistrationRef} setIsValid={setIsValidFinalizeRegistration} />
            ];
    const stepRefs = useRef<(React.RefObject<HTMLDivElement | null>)[]>(stepConts.map(() => createRef<HTMLDivElement>()));

    const content = !emailChecked ? (
        codeSent ? (
            <>
                <h2 style={{textAlign:'center'}}>Register for travelPay</h2>
                <p style={{marginTop:'60px'}}>Please enter the verification code sent to <b>{email}</b> below to verify your email address.</p>
                <Form.Group className={emailError ? "is-invalid" : ""}>
                    <div className="otp-input-container">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                className="otp-input-box"
                                data-index={index}
                                value={otp[index] || ''}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyUp={(e) => handleOtpKeyUp(e, index)}
                                onPaste={handleOtpPaste}
                                onFocus={(e) => e.target.select()}
                                disabled={codeVerifying}
                            />
                        ))}
                    </div>
                </Form.Group>
                <Form.Control.Feedback style={{textAlign:'center'}} type="invalid">{emailError}</Form.Control.Feedback>

                {!codeVerifying && (
                    <div style={{textAlign:'center'}}>
                        <Button style={{marginTop:'20px'}} variant="primary" onClick={() => verifyCode()} disabled={codeVerifying}>
                            {codeVerifying ? "Verifying Code..." : "Verify My Email"}
                        </Button>
                        <br/>
                        <Button variant="link" style={{fontSize:'12px'}} onClick={handleResendCode} disabled={!requestNewAllowed || codeSending}>
                            {codeSending ? 'Sending...' : (countdown > 0 ? `Resend Code (${countdown}s)` : 'Resend Code')}
                        </Button>
                        <br/>
                        <p style={{marginTop:'10px', fontSize:'12px'}}>If you don't receive a code, please check your spam folder or contact support.</p>
                    </div>
                )}

                {codeVerifying && (
                    <div style={{textAlign:'center', marginTop:'20px'}}>
                        <Spinner animation="border" />
                        <p style={{marginTop:'10px'}}>Verifying code...</p>
                    </div>
                )}
            </>
        ) : (
            <>
                <h2 style={{textAlign:'center'}}>Register for travelPay</h2>
                <div style={{ margin: '10px', marginTop: '70px' }}>
                    <p>Before we can register you, let's get your email address so we can verify you.</p>
                    <p>If you're not already registered, we'll send a verification code to your email address before getting your details.</p>
                    <p style={{marginTop:'60px'}}>Please enter your email address below to get started</p>
                    <Form.Group className={emailError ? "is-invalid" : ""}>
                        <Form.Control style={{marginTop:'10px'}} type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailError("")}} />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                    <div style={{textAlign:'center'}}>
                        <Button style={{marginTop:'20px'}} variant="primary" onClick={() => checkEmail()} disabled={codeSending}>
                            {codeSending ? "Sending Verification Code..." : "Get Verification Code"}
                        </Button>
                    </div>
                </div>
            </>
        )
    ) : (
        <>
            <h2 style={{textAlign:'center'}}>Register for travelPay</h2>
            <div style={{ marginTop: '50px', marginBottom: '10px' }}>
                <Stepper alternativeLabel activeStep={state.currentStep - 1} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label} onClick={() => handleStepClick(label)}>
                            <StepLabel style={{color: '#efeeee'}} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            <div style={{ marginTop: '30px', marginBottom: '10px' }}>
                <TransitionGroup>
                    <CSSTransition key={state.currentStep} timeout={300} classNames="fade" nodeRef={stepRefs.current[state.currentStep - 1]}>
                        <div ref={stepRefs.current[state.currentStep - 1]}>{stepConts[state.currentStep - 1]}</div>
                    </CSSTransition>
                </TransitionGroup>
            </div>

            <div className="buttons-container">
                <div style={{ padding: '10px' }}>
                    <table width="100%">
                        <tbody>
                            <tr>
                                {state.currentStep > 1 && <td><Button variant="primary" onClick={() => handleClick("prev")} disabled={state.currentStep === 1}>Back</Button></td>}
                                {state.currentStep < steps.length && <td style={{ textAlign: 'right' }}><Button variant="primary" onClick={() => handleClick("next")} disabled={state.currentStep === steps.length}>Next</Button></td>}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    return (
        <div className={`login-box ${showRegister ? 'show' : ''}`}>
            <div className="login-box-content" style={{ marginBottom: 0, overflowX:'auto'}}>
                <a
                    style={{textDecoration: 'none', color: '#48626f', position:'absolute', right: 30, top: 30, cursor: 'pointer'}}
                    onClick={() => setShowRegister(false)}
                >
                    <Close/>
                </a>
                {content}
            </div>
        </div>
    );
}