import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UsuarioLogadoContext from "../contexts/UsuarioLogado";

export default function TelaLogin(){
    const [formLogin, setFormLogin] = useState({email:"", password:""});
    const [disabledFormLogin, setDisabledFormLogin] = useState(false);
    const {usuario, setUsuario} = useContext(UsuarioLogadoContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(usuario !== null){
            navigate("/hoje");
        }

    }, []);

    function handleForm(e){
        setFormLogin({...formLogin, [e.target.name]: e.target.value});
    }

    function realizarLogin(e){
        e.preventDefault();

        axios
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", formLogin)
        .then(res => {
            localStorage.setItem("usuario", JSON.stringify({
                name: res.data.name, 
                email: res.data.email,
                image: res.data.image, 
                token: res.data.token 
            })); 
            setUsuario(res.data);
            navigate("/hoje");
        })
        .catch(err => {alert("Ocorreu um erro durante o seu login, tente novamente..."); setDisabledFormLogin(false)});

        setDisabledFormLogin(true);
    }

    return (
        <>
            <ImagemLogo>
                <img src={logo}/>
            </ImagemLogo>

            <ContainerInput onSubmit={realizarLogin}>
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={formLogin.email}
                    onChange={handleForm}
                    disabled={disabledFormLogin}
                    data-test="email-input"
                    required
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    name="password"
                    value={formLogin.password}
                    onChange={handleForm}
                    disabled={disabledFormLogin}
                    data-test="password-input"
                    required
                />
                <button type="submit"  data-test="login-btn" disabled={disabledFormLogin}>
                    {(!disabledFormLogin) ? "Entrar" : <ThreeDots color="#FFFFFF" width="51px" height="13px"/>}
                </button>
            </ContainerInput>

            <LinkCadastro>
                <Link to={"/cadastro"} data-test="signup-link">
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

export const ContainerInput = styled.form`
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