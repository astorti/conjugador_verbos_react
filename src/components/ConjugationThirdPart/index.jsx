import { Container, Head, Item } from "./styled";
import { useAuth } from "../../hooks/useAuth";

const ConjugationThirdPart = () => {
    
    const { third } = useAuth()
    
    
    return (
        <>
        
            {third.map((t) => {
                return (
                    <Container>
                        <table>
                            <thead>
                                <Head>{t.tense}</Head>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <Item>{t.first}</Item>
                                </tr>
                                <tr>
                                    <Item>{t.second}</Item>
                                </tr>
                                <tr>
                                    <Item>{t.third}</Item>
                                </tr>
                                <tr>
                                    <Item>{t.fourth}</Item>
                                </tr>
                                <tr>
                                    <Item>{t.fifth}</Item>
                                </tr>
                                <tr>
                                    <Item>{t.sixth}</Item>
                                </tr>
                            </tbody>
                        </table>
                    </Container>                    
                )
            })}
            
        </>
    )
}

export default ConjugationThirdPart;