import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { diasSemana } from "../../constants/dias";
import { BsTrash } from "react-icons/bs";
import { useState, useContext, useEffect  } from "react";
import UsuarioLogadoContext from "../../contexts/UsuarioLogado";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "../../constants/urls";
import { ContainerPrincipal, ContainerNovoHabito, DiasButton, ContainerHabitos } from "./styles";

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
        .get(`${BASE_URL}/habits`, config)
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

        if (nomeNovoHabito.trim() === ""){
            alert("É obrigatório que o seu hábito tenha um nome...");
            return;
        }else if (diasNovoHabito.length === 0){
            alert("Você precisa escolher pelo menos um dia para praticar o seu novo hábito...");
            return;
        }

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
        .post(`${BASE_URL}/habits`, body, config)
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
            .delete(`${BASE_URL}/habits/${idHabito}`, config)
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

