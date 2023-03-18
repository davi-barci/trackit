import { BrowserRouter, Routes, Route} from "react-router-dom";
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import TelaHabitos from "./pages/TelaHabitos/TelaHabitos";
import TelaHoje from "./pages/TelaHoje/TelaHoje";
import TelaHistorico from "./pages/TelaHistorico/TelaHistorico";
import UsuarioLogadoContext from "./contexts/UsuarioLogado";
import { useState } from "react";


export default function App() {
  const [usuario, setUsuario] = useState((localStorage.getItem("usuario")) ? (JSON.parse(localStorage.getItem("usuario"))) : null);
  const [habitosCompletados, setHabitosCompletados] = useState(0);

  return (
    <BrowserRouter>
      <UsuarioLogadoContext.Provider value={{usuario, setUsuario, habitosCompletados, setHabitosCompletados}}>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/habitos" element={<TelaHabitos />} />
          <Route path="/hoje" element={<TelaHoje />} />
          <Route path="/historico" element={<TelaHistorico />} />
        </Routes>
      </UsuarioLogadoContext.Provider>
		</BrowserRouter>
  );
}




