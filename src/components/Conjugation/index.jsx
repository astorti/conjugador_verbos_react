import React from "react";
import { Container, Head, Item } from "./styled";

const Conjugation = () => {
    return (
        <Container>
            <table>
                <thead>
                    <Head>Presente</Head>
                </thead>
                
                <tbody>
                    <tr>
                        <Item>Compro</Item>
                    </tr>
                    <tr>
                        <Item>Compras</Item>
                    </tr>
                    <tr>
                        <Item>Compra</Item>
                    </tr>
                    <tr>
                        <Item>Compramos</Item>
                    </tr>
                    <tr>
                        <Item>Comprais</Item>
                    </tr>
                    <tr>
                        <Item>Compram</Item>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default Conjugation;