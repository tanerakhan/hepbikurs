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
width:50%;
@media (min-width: 576px) and (max-width: 767.98px) { 
    width:100%;
 }
 @media (max-width: 575.98px) { 
    width:100%;
  }

`;

export const SearchText = styled.div `
span{
font-size: 40px;
font-weight: 700;
color:#fff;
text-shadow:0px 0px 3px rgba(0,0,0,.4);
text-transform: uppercase;
}
p{
    font-size:20px;
    border-radius: 3px;
    color: #fff;
    font-weight: 500;
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