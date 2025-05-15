// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill all fields');
            return;
        }
        alert(`Message sent from ${formData.name} (${formData.email})`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
