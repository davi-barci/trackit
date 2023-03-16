import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function TelaHabitos(){
    return (
        <>
            <NavBar/>
            <ContainerPrincipal>
                <ContainerNovoHabito>
                    <div>
                        <p>Meus hábitos</p>
                        <button>+</button>
                    </div>
                </ContainerNovoHabito>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerPrincipal>
            <Footer/>
        </>
    );
}

const ContainerPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    margin: 70px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    >p{
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

    div:nth-of-type(1){
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
`;
