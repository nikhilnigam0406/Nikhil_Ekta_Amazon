import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUpForm = () => {
    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const adddata = (e) => {
        const { name, value } = e.target;
        setUdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted with data:", udata);
    };

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./logo03.png" alt="Logo" />
                </div>
                <div className="sign_form">
                    <form onSubmit={handleSubmit}>
                        <h1>New User</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="Username"
                                onChange={adddata}
                                value={udata.fname}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email@.com"
                                onChange={adddata}
                                value={udata.email}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                onChange={adddata}
                                value={udata.mobile}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="At least 6 char"
                                onChange={adddata}
                                value={udata.password}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password Again</label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                onChange={adddata}
                                value={udata.cpassword}
                            />
                        </div>
                        <button className='signin_btn' type="submit">Continue</button>
                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign In</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
