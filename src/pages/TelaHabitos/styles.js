import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    overflow-y: scroll;
    background-color: #E5E5E5;
    margin-top: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    >p{
        display: ${props => props.display};
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

export const ContainerNovoHabito = styled.div`
    width: calc(100% - 35px);
    margin-top: 22px;

    >div:nth-of-type(1){
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

    >div:nth-of-type(2){
        width: 100%;
        height: 180px;
        display: ${props => props.exibirFormulario};
        align-items: center;
        flex-direction: column;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin-top: 20px;

        input{
            width: calc(100% - 36px);
            height: 45px;
            margin-top: 18px;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding-left: 11px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            outline-color: #52B6FF;

            &::placeholder{
                width: 153px;
                height: 25px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }

        >div:nth-of-type(1){
            width: calc(100% - 36px);
            height: 30px;
            display: flex;
            justify-content: flex-start;
            margin-top: 8px;
        }

        >div:nth-of-type(2){
            width: calc(100% - 36px);
            height: 35px;
            margin-top: 29px;
            display: flex;
            justify-content: flex-end;

            >button:nth-of-type(1){
                width: 84px;
                height: 35px;
                border-style: none;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                border-radius: 4.63636px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                color: #52B6FF;
                margin-right: 10px;
                cursor: pointer;
            }
        
            >button:nth-of-type(2){
                width: 84px;
                height: 35px;
                border-style: none;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #52B6FF;
                border-radius: 4.63636px;
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                color: #FFFFFF;
                cursor: pointer;
            }
        }
    }
`;

export const DiasButton = styled.button`
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    background-color: ${props => props.cor.bg};
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.cor.cor};
    cursor: pointer;        
`;

export const ContainerHabitos = styled.div`
    width: calc(100% - 35px);
    display: ${props => props.display};
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 100px;

    >div{
        width: 100%;
        margin-bottom: 10px;
        position: relative;
        background: #FFFFFF;
        border-radius: 5px;

        >p{
            width: calc(100% - 50px);
            padding-top: 13px;
            margin-left: 15px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            overflow-wrap: break-word;
        }

        >div{
            width: calc(100% - 36px);
            display: flex;
            justify-content: flex-start;
            margin-top: 8px;
            padding-bottom: 15px;
            margin-left: 15px;
        }

        svg{
            font-size: 20px;
            cursor: pointer;
            position: absolute;
            top: 11px;
            right: 10px;
            display: block;
            color: #666666;
        }
    }

`;