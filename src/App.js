import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import TelaHabitos from "./pages/TelaHabitos";
import TelaHoje from "./pages/TelaHoje";
import TelaHistorico from "./pages/TelaHistorico";

export default function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/habitos" element={<TelaHabitos />} />
        <Route path="/hoje" element={<TelaHoje />} />
        <Route path="/historico" element={<TelaHistorico />} />
			</Routes>
		</BrowserRouter>
  );
}


