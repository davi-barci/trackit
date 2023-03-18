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

export const CalendarStyle = styled(Calendar)`
    width: calc(100% - 40px);
    height: 402px;
    margin-top: 11px;
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
`


