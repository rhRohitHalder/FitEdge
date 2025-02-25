import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Log = () => {
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        // Perform Sign In Logic Here (e.g., authentication)

        // Redirect to Login Page
        navigate("/login");
    };

    return (
        <StyledWrapper>
            <div className="form-container">
                <p className="title">Sign In</p>
                <form className="form" onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Id</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button type="submit" className="sign">Sign in</button>
                </form>
                <div className="social-message">
                    <div className="line" />
                    <p className="message">Login with social accounts</p>
                    <div className="line" />
                </div>
                <div className="social-icons">
                    <button aria-label="Log in with Google" className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                        </svg>
                    </button>
                </div>
                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#">Sign up</a>
                </p>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(17, 24, 39, 1);
  
  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(31, 41, 55, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
  
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .form {
    margin-top: 1.5rem;
  }

  .input-group {
    margin-top: 0.25rem;
  }

  .input-group label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    color: rgba(156, 163, 175,1);
    margin: 8px 0 14px 0;
  }

  .sign {
    display: block;
    width: 100%;
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border-radius: 0.375rem;
    font-weight: 600;
  }
`;

export default Log;
