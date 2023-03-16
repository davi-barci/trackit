import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ImagemLogo, ContainerInput, LinkCadastro } from "./TelaLogin";

export default function TelaCadastro(){
    return (
        <>
            <ImagemLogo>
                <img src={logo}/>
            </ImagemLogo>

            <ContainerInput>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <input placeholder="nome"/>
                <input placeholder="foto"/>
                <button>Cadastrar</button>
            </ContainerInput>

            <LinkCadastro>
                <Link to={"/"}>
                    Já tem uma conta? Faça login!
                </Link>
            </LinkCadastro>
        </>
    );
}