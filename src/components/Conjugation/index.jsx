import { Container, Head, Item } from "./styled";
import { useAuth } from "../../hooks/useAuth";

const Conjugation = () => {
    
    const { first } = useAuth()
    
    
    return (
        <>
        
            {first.map((f) => {
                return (
                    <Container>
                        <table>
                            <thead>
                                <Head>{f.tense}</Head>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <Item>{f.first}</Item>
                                </tr>
                                <tr>
                                    <Item>{f.second}</Item>
                                </tr>
                                <tr>
                                    <Item>{f.third}</Item>
                                </tr>
                                <tr>
                                    <Item>{f.fourth}</Item>
                                </tr>
                                <tr>
                                    <Item>{f.fifth}</Item>
                                </tr>
                                <tr>
                                    <Item>{f.sixth}</Item>
                                </tr>
                            </tbody>
                        </table>
                    </Container>                    
                )
            })}
            
        </>
    )
}

export default Conjugation;