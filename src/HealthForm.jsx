import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Healthform = () => {
    const navigate = useNavigate();

    const handleDashBoard = (event) => {
        event.preventDefault();
        navigate("/Dashboard");
    };

    return (
        <StyledWrapper>
            <div className="form-container">
                <p className="title">Your Details</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" id="age" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" name="weight" id="weight" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="height">Height</label>
                        <input type="text" name="height" id="height" placeholder="" />
                    </div>
                    <button onClick={handleDashBoard} className="sign">Submit</button>
                </form>
                <div className="social-message">
                    <div className="line" />
                    <p className="message">Login with social accounts</p>
                    <div className="line" />
                </div>
                <div className="social-icons">
                    <button aria-label="Log in with Google" className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
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

  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
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

  .sign {
    display: block;
    width: 100%;
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    border-radius: 0.375rem;
    font-weight: 600;
  }
`;

export default Healthform;
