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
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin-top: 1px;
    }

`;

export const ContainerHabitosHoje = styled.div`
    width: calc(100% - 35px);
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    margin-bottom: 40px;

    >div{
        width: 100%;
        display: flex;
        background-color: #FFFFFF;
        margin-bottom: 10px;

        >div:nth-of-type(1){
            width: calc(100% - 95px);

            >p:nth-of-type(1){
                width: 94%;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #666666;
                margin-left: 15px;
                margin-bottom: 7px;
                margin-top: 13px;
                overflow-wrap: break-word;
            }
        }
    }
`;

export const CurrentSequenceText = styled.p`
        width: 150px;
        height: 13px;
        left: 33px;
        top: 222px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.cor};
        margin-left: 15px;
        margin-bottom: 3px;
`;

export const HighestSequenceText = styled.p`
        width: 150px;
        height: 13px;
        left: 33px;
        top: 222px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.cor};
        margin-left: 15px;
        margin-bottom: 17px;
`;

export const CheckButton = styled.div`
        width: 95px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        >svg{
            font-size: 70px;
            background: ${props => props.bg};
            color: #FFFFFF;
            cursor: pointer;
        }
`;