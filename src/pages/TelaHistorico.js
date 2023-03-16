import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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

const ContainerPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    margin: 70px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    >p:nth-of-type(1){
        width: calc(100% - 35px);
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    }

    >p:nth-of-type(2){
        width: calc(100% - 35px);
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-top: 18px;
    }
`;

