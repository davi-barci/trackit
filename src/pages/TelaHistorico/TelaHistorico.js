import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ContainerPrincipal, CalendarContainer, CalendarStyle, ContainerHabitos, ListaHabitos, StatusHabito} from "./styles";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'; 
import { BASE_URL } from "../../constants/urls";
import UsuarioLogadoContext from "../../contexts/UsuarioLogado";
import axios from "axios";

export default function TelaHistorico(){
    const [data, setData] = useState(new Date());
    const [historicoUsuario, setHistoricoUsuario] = useState([]);
    const {usuario} = useContext(UsuarioLogadoContext);
    const [diasHabitosCompletos, setDiasHabitosCompletos] = useState([]);
    const [diasHabitosIncompletos, setDiasHabitosIncompletos] = useState([]);
    const [listaHabitos, setListaHabitos] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        axios
        .get(`${BASE_URL}/habits/history/daily`, config)
        .then(res => {
            const hoje = dayjs().format("DD/MM/YYYY");
            const diasCompletos = [];
            const diasIncompletos = [];
            res.data.forEach((dias) => {
                dias.habits.map((habitos) => {
                    if (dayjs(habitos.date).format("DD/MM/YYYY") !== hoje){
                        if (habitos.done){
                            diasCompletos.push(dayjs(habitos.date).format("DD/MM/YYYY"));
                        }else{
                            diasIncompletos.push(dayjs(habitos.date).format("DD/MM/YYYY"));
                        }
                    }
                });
            });
            setDiasHabitosCompletos(diasCompletos);
            setDiasHabitosIncompletos(diasIncompletos);
            setHistoricoUsuario(res.data);
        })
        .catch(err => alert("Ocorreu um erro durante a exibição do histórico. Por favor, tente novamente..."));
      }, [historicoUsuario]);


    function onChange(nextDate) {
        const habitos = historicoUsuario.find(e => e.day === dayjs(nextDate).format("DD/MM/YYYY"));
        if(habitos != undefined && dayjs(nextDate).format("DD/MM/YYYY") != dayjs().format("DD/MM/YYYY")){
            setListaHabitos(habitos.habits);
        }else{
            setListaHabitos([]);
        }
        setData(nextDate);
    }

    function backgroundColor({ date, view }) {
        if (dayjs(date).format("DD/MM/YYYY") === dayjs(data).format("DD/MM/YYYY")){
            return "ativo";
        }

        if (view === "month"){
            if(diasHabitosCompletos.includes(dayjs(date).format("DD/MM/YYYY"))){
                return "completo";
            }else if (diasHabitosIncompletos.includes(dayjs(date).format("DD/MM/YYYY"))){
                return "incompleto";
            }else{
                return null;
            }
        }
    }

    return(
        <>
            <NavBar/>
            <ContainerPrincipal>
                <p>Histórico</p>
                <CalendarContainer data-test="calendar">
                    <CalendarStyle
                        onChange={onChange} 
                        showFixedNumberOfWeeks={true}
                        value={data} 
                        locale="pt-BR"
                        tileClassName={backgroundColor}
                        formatDay={(locale, date) => dayjs(date).format("DD")}
                    />
                </CalendarContainer>
                <ContainerHabitos display={(listaHabitos.length === 0) ? "none" : "flex"}>
                    <p>Lista de Hábitos</p>
                    <ListaHabitos>
                        {listaHabitos.map(elem => 
                            <div>
                                <StatusHabito cor={(elem.done) ? "#8cc654" : "#ea5766"}/>
                                <p>{elem.name}</p>
                            </div>
                        )}
                    </ListaHabitos>
                </ContainerHabitos>
            </ContainerPrincipal>
            <Footer/>     
        </>
    );
}

