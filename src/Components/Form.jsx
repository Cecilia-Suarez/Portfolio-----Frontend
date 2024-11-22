import React, { useState } from 'react';
import Send from './Send';
import Button from './Button';
import "../Styles/Form.css"

const Form = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        emailSubject: '',
        message: ''
    });

    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (contact.name.length <= 3) newErrors.name = 'The name must be more than 3 characters.'
        if (!/^\S+@\S+\.\S+$/.test(contact.email)) newErrors.email = 'Please enter a valid email.';
        if (contact.emailSubject.length <= 5) newErrors.emailSubject = 'The subject must be more than 5 characters.';
        if (contact.message.length <= 10) newErrors.message = 'The message must be more than 10 characters.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendHandler = (event) => {
        event.preventDefault();

        if (validateForm()) {
            setShow(true);
            setErrors({});
        } else {
            setShow(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };

    return (
        <div className='flex items-center justify-center'>
            {!show && (
                <form onSubmit={sendHandler} className="flex flex-col w-2/5  justify-between">
                    <label className="label-style">Name</label>
                    <input type="text" name="name" value={contact.name} onChange={handleChange} className="input-style" required />
                    {errors.name && <small className="error-message">{errors.name}</small>}

                    <label className="label-style">Email</label>
                    <input type="email" name="email" value={contact.email} onChange={handleChange} className="input-style" required />
                    {errors.email && <small className="error-message">{errors.email}</small>}

                    <label className="label-style">Subject</label>
                    <input type="text" name="emailSubject" value={contact.emailSubject} onChange={handleChange} className="input-style" required />
                    {errors.emailSubject && <small className="error-message">{errors.emailSubject}</small>}

                    <label className="label-style">Message</label>
                    <textarea name="message" value={contact.message} onChange={handleChange} rows="4" className="input-style" placeholder="Write your message here..."></textarea>
                    {errors.message && <small className="error-message">{errors.message}</small>}

                    <Button type='sumbit' className="ml-auto">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
                        </svg>Send</Button>
                </form>
            )}
            {show && <Send name={contact.name} />}
            {Object.keys(errors).length > 0 && <h5 className="error-message">Please verify that the data is correct.</h5>}
        </div>
    );
};

export default Form;





