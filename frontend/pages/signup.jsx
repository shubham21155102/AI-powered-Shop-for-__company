import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import "./css/style.css";
import "./css/strip.css";
import "./css/responsive.css";
import "./css/color.css";
import "./css/main.css";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  // const [otpSent, setOtpSent] = useState(false);

  // const handleSendOTP = () => {
  //   fetch('http://localhost:5000/send-otp', {
  //     method: 'POST',
  //     body: JSON.stringify({ email }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.error) {
  //         alert(data.error);
  //       } else {
  //         console.log(data);
  //         setOtpSent(true);
  //         setEmail('');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      username,
      // otp,
    };

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          console.log(data);
          setName('');
          setEmail('');
          setPassword('');
          setUsername('');
          setOtp('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log('Form Data:', formData);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('UserName', username);
    console.log('OTP', otp);
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
                  <h2 class="log-title">Sign Up</h2>

                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label class="control-label">Full Name</label>
                      <i class="mtrl-select"></i>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label class="control-label">User Name</label>
                      <i class="mtrl-select"></i>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="control-label">Email</label>
                      <i class="mtrl-select"></i>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label class="control-label">Password</label>
                      <i class="mtrl-select"></i>
                    </div>
                    {/* {otpSent ? (
                      <div class="form-group">
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <label class="control-label">OTP</label>
                        <i class="mtrl-select"></i>
                      </div>
                    ) : (
                      <button
                        class="mtr-btn login"
                        name="sendOTP"
                        type="button"
                        onClick={handleSendOTP}
                      >
                        Send OTP
                      </button>
                    )} */}
                    <a href="/login">Already have an account?</a>
                    <div class="submit-btns">
                      <button class="mtr-btn login" name="submit" type="submit">
                        <span>Login</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
