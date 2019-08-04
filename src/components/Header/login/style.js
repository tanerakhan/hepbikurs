import styled from 'styled-components'

export const LoginContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-end;
    ul{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin:0;
    padding:0;
            li{
                list-style-type:none;
                text-align:center;
                    a{
                        padding:10px;
                        color:#484848;
                        text-transform:capitalize;
                        border-radius:3px;
                        background-color:transparent;
                        margin: 0 5px;
                        text-decoration:none;
                        transition:.5s ease;
                    }
                    &:first-child{
                        a{
                            border:1px #b4d6ae solid;
                            &:hover{
                                        background-color:#b4d6ae;
                                        color:#fff;
                            }
                        }   
                    }
                    &:last-child{
                        a{
                            border:1px #344359 solid;
                                &:hover{
                                        background-color:#344359;
                                        color:#fff;
                                    }
                        } 
                    }
            }
    }
`;