import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import card from "../img/creditcard.svg";

const CardSection = () => {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your payments
                        </h2>
                        <p>
                        Freelance sometimes spelled free-lance or free lance freelancer, 
                        or freelance worker, are terms commonly used for a person 
                        who is self-employed and not necessarily committed to 
                        </p>
                    </div>
                    <div className="card-right">
                        <img
                        src={card}
                        alt="card"
                        />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
    }
    .card-right{
        display:flex;
        justify-content:flex-end;
    }
    .card-left{
        p{
            padding:1rem 0;
        }
    }

`;

export default CardSection
