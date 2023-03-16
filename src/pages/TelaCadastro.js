import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ImagemLogo, ContainerInput, LinkCadastro } from "./TelaLogin";
import { useState } from "react";
import axios from "axios";

export default function TelaCadastro(){
    const [form, setForm] = useState({email:"", password:"", name:"", image:""});
    const [disabledForm, setDisabledForm] = useState(false);
    const navigate = useNavigate();

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function finalizarCadastro(e){
        e.preventDefault();
        
        axios
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", form)
        .then(res => navigate("/"))
        .catch(err => {alert("Ocorreu um erro durante o seu cadastro, tente novamente..."); setDisabledForm(false)});

        setDisabledForm(true);
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
                    value={form.email}
                    onChange={handleForm}
                    disabled={disabledForm}
                    required
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    disabled={disabledForm}
                    required
                />
                <input 
                    type="text" 
                    placeholder="nome" 
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    disabled={disabledForm}
                    required
                />
                <input 
                    type="url" 
                    placeholder="foto" 
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                    disabled={disabledForm}
                    required
                />
                <button type="submit" disabled={disabledForm}>Cadastrar</button>
            </ContainerInput>

            <LinkCadastro>
                <Link to={"/"}>
                    Já tem uma conta? Faça login!
                </Link>
            </LinkCadastro>
        </>
    );
}