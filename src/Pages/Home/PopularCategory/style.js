import styled from 'styled-components'

export const PopularCategoryContainer = styled.div `
ul{
    display: grid;
        grid-template-columns: repeat(4, 24.6%);
        grid-column-gap: .500rem;
    li{
        border: 1px #28359333 solid;
        border-radius: 3px;
            a{
                color:#484848;
                text-transform:capitalize;
                font-size:13px;
                padding: 10px;
                display:block;
                transition:.3s ease-in-out;
                position: relative;
                    &:hover{
                        background-color:#344259;
                        text-decoration:none;
                        color:#fff;
                    }
                    i{
                        font-size:15px;
                        position: absolute;
                        left: 80px;
                        top: 12px;
                    }
                    span{
                        margin-left:15px;
                    }
            }
    }
}


`;

export const CatLabel = styled.div `
margin:auto;
    span{
        text-transform: uppercase;
        font-size: 17px;
        font-weight: 700;
        color: #484848;
    }
`;