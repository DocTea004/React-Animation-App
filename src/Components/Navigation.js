import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from "../img/logo.svg";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="tea_code"  />
            </div>
            <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/features">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing">
                            Pricing
                        </Link>
                    </li>
                </ul>
                <PrimaryButton name={'Sign Up'}  />
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display:flex;
    justify-content:space-between;
    min-height:10vh;
    align-items:center;
    
    ul{
        display:flex;
        justify-content:space-between;
        width:40%;
    }
   
`;

export default Navigation
