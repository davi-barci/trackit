import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export const ContainerPrincipal = styled.div`
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
`;

export const CalendarContainer = styled.div`
    width: 100%;
    height: 402px;
    margin-top: 11px;
    display: flex;
    justify-content: center;
`;

export const CalendarStyle = styled(Calendar)`
    width: calc(100% - 40px);
    height: 402px;
    border: none;
    border-radius: 10px;

    .react-calendar__month-view__days{
      button{
        margin-top: 12px;
        padding-bottom: 12px;
        clip-path: circle();
      }
    }

    .completo{
        background-color: #8cc654;
    }
    .incompleto{
        background-color: #ea5766;
    }

    .ativo{
        background-color: #1087ff;
    }
`;

export const ContainerHabitos = styled.div`
    width: 100%;
    display: ${props => props.display};
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 30px;

    >p:nth-of-type(1){
            width: calc(100% - 35px);
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
    }

`;

export const ListaHabitos = styled.div`
    width: calc(100% - 40px);
    border: none;
    border-radius: 10px;
    margin-top: 20px;

    >div{
        width: 100%;
        height: 40px;
        display: flex;
        margin-bottom: 15px;
        background-color: #FFFFFF;

        >p{
            width: calc(100% - 25px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 29px;
            color: #000000;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }
`;

export const StatusHabito = styled.div`
    width: 15px;
    height: 100%;
    background-color: ${props => props.cor};
    margin-right: 10px;
`;
