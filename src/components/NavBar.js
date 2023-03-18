import styled from "styled-components";
import { useContext } from "react";
import UsuarioLogadoContext from "../contexts/UsuarioLogado";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const {usuario, setUsuario} = useContext(UsuarioLogadoContext);
    const navigate = useNavigate();

    function logoutApp(){
        if (window.confirm("Você realmente deseja sair dessa conta?")){
            localStorage.removeItem("usuario");
            setUsuario(null);
            navigate("/");
        }
    }

    return(
        <ContainerNavBar data-test="header">
            <p>TrackIt</p>
            <img src={usuario.image} onClick={logoutApp}/>
        </ContainerNavBar>
    );
}

const ContainerNavBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    p{
        width: 97px;
        height: 49px;
        color: #FFFFFF;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        margin-left: 18px;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 18px;
        object-fit: cover;
    }
`;