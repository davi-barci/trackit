import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UsuarioLogadoContext from "../contexts/UsuarioLogado";
import { useContext } from "react";

export default function Footer(){
    const { habitosCompletados } = useContext(UsuarioLogadoContext);

    return(
        <ContainerFooter data-test="menu">
            <Link to={"/habitos"}  data-test="habit-link">Hábitos</Link>
            <Link to={"/hoje"} data-test="today-link">
                <CircularProgressbar
                        value={habitosCompletados}
                        text={'Hoje'}
                        background={true}
                        backgroundPadding={6}
                        styles={{
                            path: {
                                stroke: `#fff`,
                                strokeLinecap: 'round',
                            },
                            trail: {
                                stroke: '#52b6ff',
                                strokeLinecap: 'round',
                            },
                            text: {
                                fill: '#fff',
                                fontSize: '18px',
                                fontFamily: 'Lexend Deca',
                            },
                            background: {
                                fill: '#52b6ff',
                            },
                        }}
                    />
                </Link>
            <Link to={"/historico"} data-test="history-link">Histórico</Link>
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
        position: absolute;
        left: calc(50% - 45.5px);
        bottom: 10px;
        color: #FFFFFF;
        border-radius: 50px;
    }

`;

