import React, { useState } from 'react';
import Send from './Send';
import Button from './Button';
import '../Styles/Components/Form.css';
import sendIcon from '../assets/send.svg';
import { useCharStates } from '../Context/Context';

const Form = ({ show, setShow, setUserName }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const { t } = useCharStates();

    const validateForm = () => {
        const newErrors = {};
        if (contact.name.length <= 3) newErrors.name = t('errorName');
        if (!/^\S+@\S+\.\S+$/.test(contact.email)) newErrors.email = t('errorEmail');
        if (contact.subject.length <= 5) newErrors.subject = t('errorSubject');
        if (contact.message.length <= 10) newErrors.message = t('errorMesage');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const url = 'https://portfolio-backend-production-81b1.up.railway.app/'

    const sendHandler = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            setShow(true);
            setUserName(contact.name);
            setErrors({});

            try {
                const response = await fetch( url + 'api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(contact),
                });

                if (response.ok) {
                    setShow(true);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className='containerForm'>
            {!show && (
                <form onSubmit={sendHandler} className='form'>
                    <div className='containerNameAndEmail'>
                        <div className='inputGroup'>
                            <label className='labelStyle'>{t('labelName')}</label>
                            <input type="text" name="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className='inputStyle' required />
                            {errors.name && <small className='errorMessage'>{errors.name}</small>}
                        </div>

                        <div className='inputGroup'>
                            <label className='labelStyle'>{t('labelEmail')}</label>
                            <input type="email" name="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className='inputStyle' required />
                            {errors.email && <small className='errorMessage'>{errors.email}</small>}
                        </div>
                    </div>

                    <label className='labelStyle'>{t('labelSubject')}</label>
                    <input type="text" name="subject" value={contact.subject} onChange={(e) => setContact({ ...contact, subject: e.target.value })} className='inputStyle' required />
                    {errors.subject && <small className='errorMessage'>{errors.subject}</small>}

                    <label className='labelStyle'>{t('labelMessage')}</label>
                    <textarea name="message" value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} rows="4" className='inputStyle' placeholder={t('placeholderMessage')}></textarea>
                    {errors.message && <small className='errorMessage'>{errors.message}</small>}

                    <Button type="submit" src={sendIcon} alt="send">{t('sendButton')}</Button>
                </form>
            )}
            {show && <Send name={contact.name} />}
            {Object.keys(errors).length > 0}
        </div>
    );
};

export default Form;
