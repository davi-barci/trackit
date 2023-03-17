import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import { useState, useContext, useEffect  } from "react";
import UsuarioLogadoContext from "../contexts/UsuarioLogado";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";


export default function TelaHoje(){
    const {usuario, setHabitosCompletados} = useContext(UsuarioLogadoContext);
    const diaAtual = dayjs().locale('pt-br').format('dddd, DD/MM').replace("-feira", "");
    const [listaHabitosHoje, setListaHabitosHoje] = useState([]);
    const [qtdHabitosFeitos, setQtdHabitosFeitos] = useState(0);
    

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then(res => {setListaHabitosHoje(res.data); setQtdHabitosFeitos(res.data.filter(elem => elem.done === true).length); setHabitosCompletados(Math.round((qtdHabitosFeitos/listaHabitosHoje.length)*100))})
        .catch(err => alert("Ocorreu um erro durante o carregamento dos hábitos de hoje. Por favor, tente novamente..."));
    }, [listaHabitosHoje]);

    function toggleCheck(id, done){
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        if (done){
            axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,"",config)
            .then(res => console.log("habito desmarcado"))
            .catch(err => alert("Ocorreu um erro durante a operação de desmarcar o hábito. Por favor, tente novamente..."));
        }else{
            axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,"",config)
            .then(res => console.log("habito marcado"))
            .catch(err => alert("Ocorreu um erro durante a operação de marcar o hábito. Por favor, tente novamente..."));
        }
    }

    return(
        <>
            <NavBar/>
            <ContainerPrincipal>
                <p>{diaAtual[0].toUpperCase() + diaAtual.slice(1)}</p>
                {
                    (qtdHabitosFeitos === 0) ? <p>Nenhum hábito concluído ainda</p> : <p style={{color: '#8FC549'}}>{Math.round((qtdHabitosFeitos/listaHabitosHoje.length)*100)}% dos hábitos concluídos</p>
                }
                
                <ContainerHabitosHoje>
                    {listaHabitosHoje.map(elem =>
                        <div key={elem.id}>
                            <div>
                                <p>{elem.name}</p>
                                <CurrentSequenceText cor={(elem.done) ? "#8FC549" : "#666666"}><span style={{color: '#666666'}}>Sequência atual:</span> {elem.currentSequence} {(elem.currentSequence === 1) ? "dia" : "dias"} </CurrentSequenceText>
                                <HighestSequenceText cor={(elem.currentSequence === elem.highestSequence && elem.done) ? "#8FC549" : "#666666"}><span style={{color: '#666666'}}>Seu recorde:</span> {elem.highestSequence} {(elem.highestSequence === 1) ? "dia" : "dias"}</HighestSequenceText>
                            </div>
                            <CheckButton bg={(elem.done) ? "#8FC549" : "#EBEBEB"}>
                                <BsCheckLg onClick={() => toggleCheck(elem.id, elem.done)}/>
                            </CheckButton>
                        </div>
                    )}
                </ContainerHabitosHoje>
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
    margin: 70px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    >p:nth-of-type(1){
        width: calc(100% - 35px);
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    }

    >p:nth-of-type(2){
        width: calc(100% - 35px);
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-top: 1px;
    }

`;

const ContainerHabitosHoje = styled.div`
    width: calc(100% - 35px);
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    margin-bottom: 40px;

    >div{
        width: 100%;
        display: flex;
        background-color: #FFFFFF;
        margin-bottom: 10px;

        >div:nth-of-type(1){
            width: calc(100% - 95px);

            >p:nth-of-type(1){
                width: 94%;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #666666;
                margin-left: 15px;
                margin-bottom: 7px;
                margin-top: 13px;
                overflow-wrap: break-word;
            }
        }
    }
`;

const CurrentSequenceText = styled.p`
        width: 150px;
        height: 13px;
        left: 33px;
        top: 222px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.cor};
        margin-left: 15px;
        margin-bottom: 3px;
`;

const HighestSequenceText = styled.p`
        width: 150px;
        height: 13px;
        left: 33px;
        top: 222px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.cor};
        margin-left: 15px;
        margin-bottom: 17px;
`;

const CheckButton = styled.div`
        width: 95px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        >svg{
            font-size: 70px;
            background: ${props => props.bg};
            color: #FFFFFF;
            cursor: pointer;
        }
`;