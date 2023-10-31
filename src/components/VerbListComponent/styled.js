import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #000000;
    border-radius: 5px;
    height: 40px;
    width: 101%;
    margin: 5px auto 5px;
`

export const Id = styled.div`
    width: 12%;
    margin-left: 10px;
`

export const Language = styled.div`
    width: 25%;
    text-align: center;
`

export const Verb = styled.div`
    width: 23%;
    text-align: center;
`

export const Mode = styled.div`
    width: 29%;
    text-align: center;
`

export const Tense = styled.div`
    width: 20%;
    text-align: center;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 16%;
`

export const Text = styled.p`
    background-color: transparent;
    
`

export const UpdateButton = styled.button`
    margin-right: 4px;
    background-color: #a0d6b4;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`

export const DeleteButton = styled.button`
    background-color: #F96161;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
`