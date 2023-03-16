import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function TelaLogin(){
    return (
        <>
            <ImagemLogo>
                <img src={logo}/>
            </ImagemLogo>

            <ContainerInput>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <button>Entrar</button>
            </ContainerInput>

            <LinkCadastro>
                <Link to={"/cadastro"}>
                    Não tem uma conta? Cadastre-se!
                </Link>
            </LinkCadastro>
        </>
    );
}

export const ImagemLogo = styled.div`
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;

    img{
        width: 180px;
        height: 180px;
    }

`;

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
    background-color: #FFFFFF;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        line-height: 25px;
        padding-left: 11px;
        outline-color: #52B6FF;

        &::placeholder{
            width: 60px;
            height: 25px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }

    button{
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        border-style: none;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
`;

export const LinkCadastro = styled.div`
    width: 100%;
    height: 17px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }

`;