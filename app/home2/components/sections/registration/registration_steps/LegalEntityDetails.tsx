import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Form, Row, Col, Card,ButtonGroup, ToggleButton} from 'react-bootstrap';
import { CheckBox } from "@mui/icons-material";

interface FormData {
    [key: string]: any;
}

interface LegalEntityDetailsProps {
    setIsValid: (isValid: boolean) => void;
    data: FormData;
    onPercentageChange?: (percentage: number) => void;
}

interface CountryOption {
    value: string;
    label: string;
}

interface FormErrors {
    [key: string]: string;
}

const LegalEntityDetails = forwardRef<any, LegalEntityDetailsProps>(({ setIsValid, data, onPercentageChange }, ref) => {
    const [countries, setCountries] = useState<CountryOption[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/api/countries")
          .then((res) => res.json())
          .then((data: any[]) => {
            const countryOptions = data.map((country: any) => ({
              value: country.alpha2Code, // ISO 3166-1 alpha-2 country code
              label: country.name,
            }));
            var s1 = countryOptions.sort((a: CountryOption, b: CountryOption) => a.label.localeCompare(b.label));
            s1 = s1.sort((a: CountryOption, b: CountryOption) => a.label == "South Africa" ? -1 : 1);
            setCountries(s1); // Sort alphabetically
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching countries:", error));
      }, []);
    

    const [formData, setFormData] = useState<FormData>({
        ...{
            //consortium: '',
            //agency: '',
            legalEntityName: '',
            taxRegistered: false,
            taxNumber: '',
            companyRegistrationNo: '',
            //addressLine1: '',
            //addressLine2: '',
            //addressCity: '',
            //addressState: '',
            //addressCountry: '',
            //addressPostalCode: '',
           // postalSameAsAddress: true,
            //postalAddressLine1: '',
            //postalAddressLine2: '',
            //postalAddressPostalCode: '',
            //agencyWebURL: '',
        },
        ...data
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
        validateField(id, type === 'checkbox' ? checked : value);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
    };

    const getFormData = (): FormData => formData;

    const validateField = (field: string, value: string | boolean) => {
        let newErrors = { ...errors };
        switch (field) {
            case 'consortium':
                newErrors.consortium = value ? '' : 'Consortium affiliation is required';
                break;
            case 'agency':
                newErrors.agency = value ? '' : 'Agency name is required';
                break;
            case 'legalEntityName':
                newErrors.legalEntityName = value ? '' : 'Legal entity name is required';
                break;
            case 'taxNumber':
                newErrors.taxNumber = value && formData.taxRegistered || !formData.taxRegistered ? '' : 'Tax number is required';
                break;
            case 'companyRegistrationNo':
                newErrors.companyRegistrationNo = value ? '' : 'Company registration number is required';
                break;
            case 'addressLine1':
                newErrors.addressLine1 = value ? '' : 'Physical address is required';
                break;
            case 'addressCountry':
                newErrors.addressCountry = value ? '' : 'Country is required';
                break;
            case 'addressCity':
                newErrors.addressCity = value ? '' : 'City is required';
                break;
            case 'addressState':
                newErrors.addressState = value ? '' : 'State/Province is required';
                break;
            case 'addressPostalCode':
                newErrors.addressPostalCode = value ? '' : 'Postal code is required';
                break;
            case 'postalAddressLine1':
                newErrors.postalAddressLine1 = value && formData.postalSameAsAddress || !formData.postalSameAsAddress ? '' : 'Postal address is required';
                break;
            case 'postalAddressPostalCode':
                newErrors.postalAddressPostalCode = value && formData.postalSameAsAddress || !formData.postalSameAsAddress ? '' : 'Postal code is required';
                break;
            default:
                break;
        }
        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).every(key => !newErrors[key]));
    };

    const validateForm = (): boolean => {
        let newErrors: FormErrors = {};

        for (const [field, value] of Object.entries(formData)) {
            switch (field) {
                /*case 'consortium':
                    if(!value)
                        newErrors.consortium = 'Consortium affiliation is required';
                    break;
                case 'agency':
                    if(!value)
                        newErrors.agency = 'Agency name is required';
                    break;*/
                case 'legalEntityName':
                    if(!value)
                        newErrors.legalEntityName = 'Legal entity name is required';
                    break;
                case 'taxNumber':
                    if(!(value && formData.taxRegistered || !formData.taxRegistered))
                        newErrors.taxNumber = 'Tax number is required';
                    break;
                case 'companyRegistrationNo':
                    if(!value)
                        newErrors.companyRegistrationNo = 'Company registration number is required';
                    break;
                /*case 'addressLine1':
                    if(!value)
                        newErrors.addressLine1 = 'Physical address is required';
                    break;
                case 'addressCountry':
                    if(!value)
                        newErrors.addressCountry = 'Country is required';
                    break;
                case 'addressCity':
                    if(!value)
                        newErrors.addressCity = 'City is required';
                    break;
                case 'addressState':
                    if(!value)
                        newErrors.addressState = 'State/Province is required';
                    break;
                case 'addressPostalCode':
                    if(!value)
                        newErrors.addressPostalCode = 'Postal code is required';
                    break;
                case 'postalAddressLine1':
                    if(!(value && !formData.postalSameAsAddress || formData.postalSameAsAddress))
                        newErrors.postalAddressLine1 = 'Postal address is required';
                    break;
                case 'postalAddressPostalCode':
                    if(!(value && !formData.postalSameAsAddress || formData.postalSameAsAddress))
                        newErrors.postalAddressPostalCode = 'Postal code is required';
                    break;*/
                default:
                    break;
            }
        }
        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0;
        setIsValid(isValid);
        return isValid;
    };

    // Percentage complete logic
    const getPercentageComplete = (): number => {
        // List all required fields here
        const requiredFields = [
            //'consortium',
            //'agency',
            'legalEntityName',
            'companyRegistrationNo',
           // 'addressLine1',
            //'addressCountry',
            //'addressCity',
            //'addressState',
            //'addressPostalCode',
        ];
        // Tax number required only if taxRegistered is true
        if (formData.taxRegistered) requiredFields.push('taxNumber');
        // Postal address required only if postalSameAsAddress is false
        //if (!formData.postalSameAsAddress) {
        //    requiredFields.push('postalAddressLine1', 'postalAddressPostalCode');
        //}
        let filled = 0;
        requiredFields.forEach(field => {
            if (formData[field] && formData[field] !== '') filled++;
        });
        return Math.round((filled / requiredFields.length) * 100);
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
    }, [formData]);

    useImperativeHandle(ref, () => ({
        validateForm,
        getFormData,
        getPercentageComplete
    }));

    return (
        <>
            <div style={{ padding: '20px' }}>
                <Row>
                    <Col lg="12" style={{ textAlign: 'center' }}>
                        <p style={{fontSize:'1.2em'}}>Thanks for your info {formData.first_name}!<br/>Please complete your company details below.</p>
                    </Col>
                </Row>
                <Row>
                    
                    <Col>
                        {/*<Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="agency">Agency Name <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="agency"
                                    value={formData.agency}
                                    onChange={handleChange}
                                    isInvalid={!!errors.agency}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.agency}
                                </Form.Control.Feedback>
                            </Col>
                        </Row> */} 
                        <Row style={{marginTop:'20px'}}>
                            <Col>
                                <Form.Label className="regFormLabel" style={{marginTop:'0px'}} htmlFor="legalEntityName">Legal Entity Name<span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="legalEntityName"
                                    value={formData.legalEntityName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.legalEntityName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.legalEntityName}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="companyRegistrationNo">Registration Number <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="companyRegistrationNo"
                                    value={formData.companyRegistrationNo}
                                    onChange={handleChange}
                                    isInvalid={!!errors.companyRegistrationNo}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.companyRegistrationNo}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row style={{marginTop:'20px'}}>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id="taxRegistered"
                                    label="My company is VAT registered"
                                    checked={formData.taxRegistered}
                                    onChange={handleChange}
                                    isInvalid={!!errors.taxRegistered}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.taxRegistered}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        {formData.taxRegistered && 
                            <Row>
                                <Col>
                                    <Form.Label className="regFormLabel" htmlFor="taxNumber">Tax Number {formData.taxRegistered && <span style={{color:'red'}}>*</span>}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="taxNumber"
                                        value={formData.taxNumber}
                                        onChange={handleChange}
                                        isInvalid={!!errors.taxNumber}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.taxNumber}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>
                        }

                        {/*<Row style={{marginTop:'40px'}}>
                            <Col>
                                <h4 style={{fontSize:'1.2em'}}>Physical Address</h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressCountry">Country <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Select
                                    id="addressCountry"
                                    value={formData.addressCountry}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressCountry}
                                >
                                    <option value="">Select a country</option>
                                    {countries.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressCountry}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row style={{marginTop:'0px'}}>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressLine1">Address <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addressLine1"
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressLine1}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressLine1}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressLine2">Building/Unit (Optional)</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addressLine2"
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressLine2}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressLine2}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressCity">City <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addressCity"
                                    value={formData.addressCity}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressCity}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressCity}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressState">State/Province <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addressState"
                                    value={formData.addressState}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressState}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressState}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label className="regFormLabel" htmlFor="addressPostalCode">Postal Code <span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addressPostalCode"
                                    value={formData.addressPostalCode}
                                    onChange={handleChange}
                                    isInvalid={!!errors.addressPostalCode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.addressPostalCode}
                                </Form.Control.Feedback>
                            </Col>
                        </Row>*/}
                    </Col>
                </Row>
                
            </div>
        </>
    );
});

export default LegalEntityDetails;