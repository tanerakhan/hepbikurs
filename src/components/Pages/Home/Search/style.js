import styled from 'styled-components'

export const SearchWrapper = styled.div `
    position: absolute;
    top: 50%;
    z-index: 2;
    padding:15px;
    left: 50%;
    transform: translate(-50%,-50%);
    flex-direction:column;
`;


export const SearchContainer = styled.div `
flex-direction:column;
padding:10px;
`;

export const SearchText = styled.div `
span{
font-size:30px;
color:#fff;
text-shadow:0px 0px 3px rgba(0,0,0,.4);
text-transform: uppercase;
}
p{
    background-color:#f5ffa5;
    padding:10px;
    border-radius:3px;
}


`;



export const SearchInput = styled.div `

.ui.input,input{
    width:100%;
}

.ui.search .prompt{
    border-radius:3px;
}

`;