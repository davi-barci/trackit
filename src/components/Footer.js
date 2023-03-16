import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <ContainerFooter>
            <Link to={"/habitos"}>Hábitos</Link>
            <Link to={"/hoje"}>Hoje</Link>
            <Link to={"/historico"}>Histórico</Link>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    a{
        width: calc(50% - 50px);;
        height: 100%;
        text-align: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #52B6FF;
        text-decoration-line: none;
    }

    a:nth-of-type(2){
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        position: absolute;
        left: calc(50% - 45.5px);
        bottom: 10px;
        color: #FFFFFF;
        border-radius: 50px;
    }

`;

