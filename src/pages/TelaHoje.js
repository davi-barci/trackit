import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function TelaHoje(){
    return(
        <>
            <NavBar/>
            <ContainerPrincipal>
                <p>Segunda, 17/05</p>
                <p>Nenhum hábito concluído ainda</p>
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
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-top: 1px;
    }

`;