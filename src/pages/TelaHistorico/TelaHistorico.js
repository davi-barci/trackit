import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ContainerPrincipal } from "./styles";

export default function TelaHistorico(){
    return(
        <>
            <NavBar/>
            <ContainerPrincipal>
                <p>Histórico</p>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerPrincipal>
            <Footer/>     
        </>
    );
}

