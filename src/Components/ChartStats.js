import React from 'react'
import styled from 'styled-components'

const ChartStats = ({name, amount}) => {
    return (
        <ChartStatStyled>
              <p>
                  {name}
              </p>
              <h4>
                  {amount}
              </h4>
        </ChartStatStyled>
    )
}

const ChartStatStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    padding: 2rem;
    height:10rem;  
    padding-right:1rem;
    
    h4{
        font-size:3rem;
        color:var(--purple-primary)
    }
    p{
        color:black;
    }
`;

export default ChartStats
