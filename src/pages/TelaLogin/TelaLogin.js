import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UsuarioLogadoContext from "../../contexts/UsuarioLogado";
import { BASE_URL } from "../../constants/urls";
import { ImagemLogo, ContainerInput, LinkCadastro } from "./styles";

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
        .post(`${BASE_URL}/auth/login`, formLogin)
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

