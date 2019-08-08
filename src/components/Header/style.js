import styled from 'styled-components'

export const HeaderContainer = styled.div `
background-color:#fff;
@media (min-width: 576px) and (max-width: 767.98px) { 
    padding:0!important;
 }
 @media (max-width: 575.98px) { 
    padding:!important;
  }
  header{
    @media (min-width: 576px) and (max-width: 767.98px) { 
    padding:!important;
 }
 @media (max-width: 575.98px) { 
    padding:!important;
  }  
  }
`;

export const Nav = styled.div `

`;


export const Login = styled.div `

`;

export const Logo = styled.div `
    img{
        max-width: 130px;
    }
`;


export const NavInfo = styled.div `

`;
export const DropDownContainer = styled.div `
i{
    margin-left:10px!important;
    color: #484848;
}
`;