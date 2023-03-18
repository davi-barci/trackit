import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ContainerPrincipal, CalendarStyle} from "./styles";
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
    const [diasHabitosIncompletos, setDiasHabitosIncompletos] = useState([])

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
            historicoUsuario.forEach((dias) => {
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


    function onChange(nextValue) {
        setData(nextValue);
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
                <CalendarStyle
                    data-test="calendar"   
                    onChange={onChange} 
                    showFixedNumberOfWeeks={true}
                    value={data} 
                    locale="pt-BR"
                    tileClassName={backgroundColor}
                    formatDay={(locale, date) => dayjs(date).format("DD")}
                />
            </ContainerPrincipal>
            <Footer/>     
        </>
    );
}

