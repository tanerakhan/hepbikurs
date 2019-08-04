import styled from 'styled-components'

export const NavInfo = styled.div `
ul{
width: 100%;
display: flex;
justify-content:center;
margin:0;
padding:0;
height:100%;
align-items:center;
    li{
        list-style-type:none;
        text-align:center;
            a{
                padding:20px;
                color:#484848;
                text-transform:capitalize;
            }
    }
}

`;