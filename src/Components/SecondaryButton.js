import React from 'react';
import styled from 'styled-components';
import arrow from "../img/arrow.svg";

const SecondaryButton = ({name}) => {
    return (
        <SecondaryButtonStyled >
            {name}
            <img
            src={arrow}
            alt=""
            />
        </SecondaryButtonStyled >
    )
}

const SecondaryButtonStyled = styled.button`
    background-color:var(--dark-primary);
    padding:1rem 2rem;
    font-family:inherit;
    font-size:inherit;
    color:white;
    border-radius:20px;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
    img{
        padding-left:0.9rem;
    }
`;

export default SecondaryButton
