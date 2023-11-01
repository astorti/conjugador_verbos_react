import Conjugation from "../../components/Conjugation";
import ConjugationSecondPart from "../../components/ConjugationSecondPart";
import ConjugationThirdPart from "../../components/ConjugationThirdPart";
import Search from "../../components/Search";
import { Container, Mode } from './styled'
import { useAuth } from '../../hooks/useAuth';

const Home = () => {

    const { firstMode, secondMode } = useAuth()

    return (
        <div>
            <Search />
            <Mode>{firstMode}</Mode>
            <Container>
                <Conjugation />
            </Container>
            <Mode>{firstMode}</Mode>
            <Container>
                <ConjugationSecondPart />
            </Container>
            <Mode>{secondMode}</Mode>
            <Container>
                <ConjugationThirdPart />
            </Container>
        </div>
    )
}

export { Home };
