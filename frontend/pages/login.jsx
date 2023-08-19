import React, { useState } from 'react';
// import "./css/main.css";
import Header from './header';
import Footer from './footer';
import "./css/style.css";
import "./css/strip.css";
import "./css/responsive.css";
import "./css/color.css";
import "./css/main.css";



export default function Login() {
    //   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or perform validation
        // console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset form inputs
        // setName('');
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the API
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);
            });
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Header />
            <div class="theme-layout">
                <div class="container-fluid pdng0">
                    <div class="row merged">
                        <div class="offset-md-3 col-md-6">
                            <div class="login-reg-bg">
                                <div class="log-reg-area sign">
                                    <h2 class="log-title">Login</h2>

                                    <form onSubmit={handleSubmit}>

                                        <div class="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label class="control-label">Email</label><i class="mtrl-select"></i>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <label class="control-label">Password</label><i class="mtrl-select"></i>
                                        </div>

                                        <a href="/signup">Don't have an account ?</a>
                                        <div class="submit-btns">
                                            <button class="mtr-btn login" name="submit" type="submit"><span>Login</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </>
    );
}
