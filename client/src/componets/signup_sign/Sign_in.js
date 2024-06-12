import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Form submission logic here
            console.log("Form submitted with data:", formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.email) {
            errors.email = "Email is required";
        }
        if (!data.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./logo03.png" alt="Logo" />
                </div>
                <div className="sign_form">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <button type="submit" className='signin_btn'>Continue</button>
                    </form>
                </div>
                <div>
                    <div className="create_accountinfo">
                        <p>New to Amazon?</p>
                        <NavLink to="/register">
                            <button>Create your Amazon Account</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
