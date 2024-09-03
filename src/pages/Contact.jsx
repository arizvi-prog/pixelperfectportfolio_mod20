import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                    {errors.message && <p>{errors.message}</p>}
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
