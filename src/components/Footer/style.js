import styled from 'styled-components'

export const FooterContainer = styled.div `
background-color:#ededed;
/* height:50px; */
    footer{
        width:100%;
        max-width:1200px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:auto;
        height:100%;
    }
`;

export const FooterCol = styled.div `
    span{
        font-weight:700;
        text-transform:uppercase;
    }
    p, ul{
        min-height: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    }
    p{color:#484848;font-size:13px;}
    ul{
        flex-direction:column;
            li{
                a{
                    color:#484848;
                    font-size:13px;
                }
            }
    }
`;