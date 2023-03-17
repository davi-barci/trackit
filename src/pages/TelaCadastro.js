import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ImagemLogo, ContainerInput, LinkCadastro } from "./TelaLogin";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function TelaCadastro(){
    const [formCadastro, setFormCadastro] = useState({email:"", password:"", name:"", image:""});
    const [disabledFormCadastro, setDisabledFormCadastro] = useState(false);
    const navigate = useNavigate();

    function handleForm(e){
        setFormCadastro({...formCadastro, [e.target.name]: e.target.value});
    }

    function finalizarCadastro(e){
        e.preventDefault();
        
        axios
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", formCadastro)
        .then(res => navigate("/"))
        .catch(err => {alert("Ocorreu um erro durante o seu cadastro, tente novamente..."); setDisabledFormCadastro(false)});

        setDisabledFormCadastro(true);
    }

    return (
        <>
            <ImagemLogo>
                <img src={logo}/>
            </ImagemLogo>

            <ContainerInput onSubmit={finalizarCadastro}>
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={formCadastro.email}
                    onChange={handleForm}
                    disabled={disabledFormCadastro}
                    data-test="email-input" 
                    required
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    name="password"
                    value={formCadastro.password}
                    onChange={handleForm}
                    disabled={disabledFormCadastro}
                    data-test="password-input"
                    required
                />
                <input 
                    type="text" 
                    placeholder="nome" 
                    name="name"
                    value={formCadastro.name}
                    onChange={handleForm}
                    disabled={disabledFormCadastro}
                    data-test="user-name-input"
                    required
                />
                <input 
                    type="url" 
                    placeholder="foto" 
                    name="image"
                    value={formCadastro.image}
                    onChange={handleForm}
                    disabled={disabledFormCadastro}
                    data-test="user-image-input"
                    required
                />
                <button type="submit" data-test="signup-btn" disabled={disabledFormCadastro}>
                    {(!disabledFormCadastro) ? "Cadastrar" : <ThreeDots color="#FFFFFF" width="51px" height="13px"/>}
                </button>
            </ContainerInput>

            <LinkCadastro>
                <Link to={"/"} data-test="login-link" >
                    Já tem uma conta? Faça login!
                </Link>
            </LinkCadastro>
        </>
    );
}