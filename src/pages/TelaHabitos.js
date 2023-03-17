import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { diasSemana } from "../constants/dias";
import { BsTrash } from "react-icons/bs";
import { useState, useContext, useEffect  } from "react";
import UsuarioLogadoContext from "../contexts/UsuarioLogado";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function TelaHabitos(){
    const {usuario} = useContext(UsuarioLogadoContext);
    const [exibirFormulario, setExibirFormulario] = useState("none");
    const [disabledSaveForm, setDisabledSaveForm] = useState(false);
    const [nomeNovoHabito, setNomeNovoHabito] = useState("");
    const [diasNovoHabito, setDiasNovoHabito] = useState([]);
    const [listaHabitos, setListaHabitos] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then(res => setListaHabitos(res.data))
        .catch(err => alert("Ocorreu um erro durante o carregamento dos hábitos. Por favor, tente novamente..."));
    }, [listaHabitos]);

    function selecionarDia(dia){
        if (diasNovoHabito.includes(dia)){
            setDiasNovoHabito(diasNovoHabito.filter(elem => elem != dia));
        }else{
            setDiasNovoHabito([...diasNovoHabito, dia]);
        }
    }

    function salvarNovoHabito(e){
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        const body = {
            name: nomeNovoHabito,
            days: diasNovoHabito 
        }

        axios
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        .then(res => {
            setExibirFormulario("none");
            setNomeNovoHabito("");
            setDiasNovoHabito([]);
            setDisabledSaveForm(false);
        })
        .catch(err => {
            alert("Ocorreu um erro durante a criação do hábito, tente novamente...");
            setDisabledSaveForm(false);
        });

        setDisabledSaveForm(true);
    }

    function excluirHabito(idHabito){
        if (window.confirm("Você tem certeza que deseja excluir esse hábito?")){
            const config = {
                headers: {
                    Authorization: `Bearer ${usuario.token}`
                }
            }
    
            axios
            .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`, config)
            .catch(err => alert("Ocorreu um erro durante a exclusão do hábito. Por favor, tente novamente..."));
        }
    }

    return (
        <>
            <NavBar/>
            <ContainerPrincipal display={(listaHabitos.length === 0) ? "block" : "none"}>

                <ContainerNovoHabito exibirFormulario={exibirFormulario}>
                    <div>
                        <p>Meus hábitos</p>
                        <button data-test="habit-create-btn" onClick={() => setExibirFormulario("flex")}>+</button>
                    </div>

                    <div data-test="habit-create-container">
                        <input 
                            placeholder="nome do hábito"
                            type="text"
                            value={nomeNovoHabito}
                            onChange={e => setNomeNovoHabito(e.target.value)}
                            data-test="habit-name-input" 
                            disabled={disabledSaveForm}
                        />
                        <div>
                            {diasSemana.map((elem, index) => 
                            <DiasButton 
                                key={index} 
                                cor={(diasNovoHabito.includes(index) ? {bg: "#CFCFCF", cor: "#FFFFFF"} : {bg: "#FFFFFF", cor: "#DBDBDB"})} 
                                onClick={() => selecionarDia(index)}
                                data-test="habit-day" 
                                disabled={disabledSaveForm}
                            >
                                {elem}
                            </DiasButton>)}
                        </div>
                        <div>
                            <button data-test="habit-create-cancel-btn" disabled={disabledSaveForm} onClick={() => setExibirFormulario("none")}>Cancelar</button>
                            <button data-test="habit-create-save-btn" disabled={disabledSaveForm} onClick={salvarNovoHabito}>{(!disabledSaveForm) ? "Salvar" : <ThreeDots color="#FFFFFF" width="43px" height="11px"/>}</button>
                        </div>
                    </div>
                </ContainerNovoHabito>

                <ContainerHabitos display={(listaHabitos.length === 0) ? "none" : "flex"}>
                    {listaHabitos.map(habito =>
                        <div key={habito.id} data-test="habit-container">
                            <p  data-test="habit-name">{habito.name}</p>
                            <div>
                                {diasSemana.map((elem, index) => 
                                <DiasButton 
                                    disabled 
                                    key={index}
                                    data-test="habit-day" 
                                    cor = {(habito.days.includes(index)) ? {bg: "#CFCFCF", cor: "#FFFFFF"} : {bg: "#FFFFFF", cor: "#DBDBDB"}} 
                                >
                                    {elem}
                                </DiasButton>)}
                            </div>
                            <BsTrash  data-test="habit-delete-btn" onClick={() => excluirHabito(habito.id)}/>
                        </div>
                    )}
                </ContainerHabitos>
                
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerPrincipal>
            <Footer/>
        </>
    );
}

const ContainerPrincipal = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow-y: scroll;
    background-color: #E5E5E5;
    margin-top: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    >p{
        display: ${props => props.display};
        width: calc(100% - 35px);
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
    }
`;

const ContainerNovoHabito = styled.div`
    width: calc(100% - 35px);
    margin-top: 22px;

    >div:nth-of-type(1){
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        >p{
            width: 148px;
            height: 29px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;

        }

        button{
            width: 40px;
            height: 35px;
            border-style: none;
            background: #52B6FF;
            border-radius: 5px;
            text-align: center;
            vertical-align: middle;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 27px;
            line-height: 27px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    >div:nth-of-type(2){
        width: 100%;
        height: 180px;
        display: ${props => props.exibirFormulario};
        align-items: center;
        flex-direction: column;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin-top: 20px;

        input{
            width: calc(100% - 36px);
            height: 45px;
            margin-top: 18px;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding-left: 11px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            outline-color: #52B6FF;

            &::placeholder{
                width: 153px;
                height: 25px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }

        >div:nth-of-type(1){
            width: calc(100% - 36px);
            height: 30px;
            display: flex;
            justify-content: flex-start;
            margin-top: 8px;
        }

        >div:nth-of-type(2){
            width: calc(100% - 36px);
            height: 35px;
            margin-top: 29px;
            display: flex;
            justify-content: flex-end;

            >button:nth-of-type(1){
                width: 84px;
                height: 35px;
                border-style: none;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                border-radius: 4.63636px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                color: #52B6FF;
                margin-right: 10px;
                cursor: pointer;
            }
        
            >button:nth-of-type(2){
                width: 84px;
                height: 35px;
                border-style: none;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #52B6FF;
                border-radius: 4.63636px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                color: #FFFFFF;
                cursor: pointer;
            }
        }
    }
`;

const DiasButton = styled.button`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    background-color: ${props => props.cor.bg};
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.cor.cor};
    cursor: pointer;        
`;

const ContainerHabitos = styled.div`
    width: calc(100% - 35px);
    display: ${props => props.display};
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 100px;

    >div{
        width: 100%;
        margin-bottom: 10px;
        position: relative;
        background: #FFFFFF;
        border-radius: 5px;

        >p{
            width: calc(100% - 50px);
            padding-top: 13px;
            margin-left: 15px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            overflow-wrap: break-word;
        }

        >div{
            width: calc(100% - 36px);
            display: flex;
            justify-content: flex-start;
            margin-top: 8px;
            padding-bottom: 15px;
            margin-left: 15px;
        }

        svg{
            font-size: 20px;
            cursor: pointer;
            position: absolute;
            top: 11px;
            right: 10px;
            display: block;
            color: #666666;
        }
    }

`;