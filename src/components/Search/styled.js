import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px auto;
    width: 80%;
    height: 40px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #a0d6b4;
`

export const Selection = styled.div`
    width: 30%;
    background-color: #a0d6b4;
`

export const Span = styled.span`
    margin-right: 15px;
    background-color: #a0d6b4;
`

export const Select = styled.select`
    background-color: #FFFFFF;
    border: 1px solid black;
    border-radius: 3px;
    width: 100px;
`

export const Button = styled.button`
    background-color: #49796b;
    color: #a0d6b4;
    cursor: pointer;
    border: 1px solid #000000;
    border-radius: 3px;
    padding: 3px;
`