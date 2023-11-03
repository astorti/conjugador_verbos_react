import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid #000000;
    border-radius: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 20px;
`

export const Title = styled.h3`
    background-color: transparent;
    margin: 30px auto 25px;
    text-align: center;
    width: 500px;
    color: #49796b;
`

export const Form = styled.form`
    width: 80%;
    padding: 30px;
`

export const Line = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px auto;
`


export const Span = styled.span`
    color: #49796b;
    padding: 5px;
    font-weight: bolder;
`

export const Input = styled.input`
    border: 1px solid #49796b;
    border-radius: 3px;
    background-color: #FFFFFF;
    padding: 5px;
    color: #49796b;
`

export const SaveButton = styled.button`
    margin-right: 4px;
    background-color: #a0d6b4;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`

export const UpdateButton = styled.button`
    background-color: #FFFF99;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`

export const CancelButton = styled.button`
    background-color: #93bad0;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`