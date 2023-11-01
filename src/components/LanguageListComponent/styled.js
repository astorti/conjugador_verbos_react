import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    border-radius: 5px;
    height: 40px;
    width: 104%;
    margin: 5px auto 5px;
`

export const Id = styled.div`
    margin-left: 10px;
`

export const Language = styled.div`
    text-align: center;
`

export const Actions = styled.div`
    margin-right: 10px;
`

export const Text = styled.p`
    background-color: transparent;
    
`

export const DeleteButton = styled.button`
    background-color: #F96161;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`