import React, { useState } from 'react';
import Send from './Send';

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
        <div>
            {!show && (
                <form onSubmit={sendHandler}>
                    <label>Name</label>
                    <input type="text" name="name" value={contact.name} onChange={handleChange}/>
                    {errors.name && <small>{errors.name}</small>}

                    <label>Email</label>
                    <input type="email" name="email" value={contact.email} onChange={handleChange}/>
                    {errors.email && <small>{errors.email}</small>}

                    <label>Email Subject</label>
                    <input type="text" name="emailSubject" value={contact.emailSubject}onChange={handleChange}/>
                    {errors.emailSubject && <small>{errors.emailSubject}</small>}

                    <label>Message</label>
                    <textarea name="message" value={contact.message} onChange={handleChange}/>
                    {errors.message && <small>{errors.message}</small>}

                    <button type="submit">Send</button>
                </form>
            )}
            {show && <Send name={contact.name} />}
            {Object.keys(errors).length > 0 && <h5>Please verify that the data is correct.</h5>}
        </div>
    );
};

export default Form;





