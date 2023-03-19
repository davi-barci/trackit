import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import { useState, useContext, useEffect  } from "react";
import UsuarioLogadoContext from "../../contexts/UsuarioLogado";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { BASE_URL } from "../../constants/urls";
import { ContainerPrincipal, ContainerHabitosHoje, CurrentSequenceText, HighestSequenceText, CheckButton } from "./styles";

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
        .get(`${BASE_URL}/habits/today`, config)
        .then(res => {setListaHabitosHoje(res.data); setQtdHabitosFeitos(res.data.filter(elem => elem.done === true).length); setHabitosCompletados((res.data.length === 0 || qtdHabitosFeitos === 0) ? 0 : Math.round((qtdHabitosFeitos/listaHabitosHoje.length)*100))})
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
            .post(`${BASE_URL}/habits/${id}/uncheck`,"",config)
            .catch(err => alert("Ocorreu um erro durante a operação de desmarcar o hábito. Por favor, tente novamente..."));
        }else{
            axios
            .post(`${BASE_URL}/habits/${id}/check`,"",config)
            .catch(err => alert("Ocorreu um erro durante a operação de marcar o hábito. Por favor, tente novamente..."));
        }
    }

    return(
        <>
            <NavBar/>
            <ContainerPrincipal>
                <p  data-test="today">{diaAtual[0].toUpperCase() + diaAtual.slice(1)}</p>
                {
                    (qtdHabitosFeitos === 0) ? <p data-test="today-counter">Nenhum hábito concluído ainda</p> : <p data-test="today-counter" style={{color: '#8FC549'}}>{Math.round((qtdHabitosFeitos/listaHabitosHoje.length)*100)}% dos hábitos concluídos</p>
                }
                
                <ContainerHabitosHoje>
                    {listaHabitosHoje.map(elem =>
                        <div data-test="today-habit-container" key={elem.id}>
                            <div>
                                <p data-test="today-habit-name">{elem.name}</p>
                                <CurrentSequenceText data-test="today-habit-sequence" cor={(elem.done) ? "#8FC549" : "#666666"}><span style={{color: '#666666'}}>Sequência atual:</span> {elem.currentSequence} {(elem.currentSequence === 1) ? "dia" : "dias"} </CurrentSequenceText>
                                <HighestSequenceText data-test="today-habit-record" cor={(elem.currentSequence === elem.highestSequence && elem.done) ? "#8FC549" : "#666666"}><span style={{color: '#666666'}}>Seu recorde:</span> {elem.highestSequence} {(elem.highestSequence === 1) ? "dia" : "dias"}</HighestSequenceText>
                            </div>
                            <CheckButton bg={(elem.done) ? "#8FC549" : "#EBEBEB"}>
                                <BsCheckLg data-test="today-habit-check-btn" onClick={() => toggleCheck(elem.id, elem.done)}/>
                            </CheckButton>
                        </div>
                    )}
                </ContainerHabitosHoje>
            </ContainerPrincipal>
            <Footer/>     
        </>

    );
}

