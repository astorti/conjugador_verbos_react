import styled from 'styled-components';

export const Main = styled.div`
    background-color: #49796b;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`

export const Menu = styled.div`
    background-color: #49796b;
    width: 30%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`

export const Title = styled.h2`
    background-color: #49796b;
    color: #a0d6b4;
`

export const MenuList = styled.button`
    border: none;
    border-bottom: 2px solid #000000;
    border-top: 2px solid #000000;
    border-radius: 5px;
    padding: 5px;
    background-color: #49796b;
    color: #a0d6b4;
    margin-right: 10px;
    text-decoration: none;
    &:hover{
        background-color: #a0d6b4;
        color: #49796b;
        cursor: pointer;
    }
`
