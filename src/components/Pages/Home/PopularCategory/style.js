import styled from 'styled-components'

export const PopularCategoryContainer = styled.div `
ul{
    display: grid;
        grid-template-columns: repeat(4, 25%);
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
                transition:.5s ease;
                    &:hover{
                        background-color:#344259;
                        text-decoration:none;
                        color:#fff;

                    }
                    i{
                        margin-right:15px;
                        font-size:15px;
                    }
                    span{

                    }
            }
    }
}


`;