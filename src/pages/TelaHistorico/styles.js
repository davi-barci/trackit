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

        >p:nth-of-type(2){
            width: calc(100% - 35px);
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #666666;
            margin-top: 18px;
        }
`;

