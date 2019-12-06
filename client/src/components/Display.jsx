import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: black;
  width: 480px;
  height: auto;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  color:white;
`;

const Display = ({ name, country, searches }) => {
    return (
        <Card>
            <p className="name">Name: {name}</p>
            <p className="country">Country: {country}</p>
            <p className="searches">Searches: {searches}</p>
        </Card>
    )
}

export default Display;