import React, {Component} from 'react'
import {SearchContainer, SearchInput, SearchText, SearchWrapper} from './style'
import {Search} from 'semantic-ui-react'

export default class Index extends Component {
    render() {
        return (
            <SearchWrapper className="container">
                <SearchContainer className="row w-50">
                    <SearchText className="col">
                        <span>EĞİTİM VERİN, EĞİTİM BULUN!</span>
                        <p className="mt-2 mb-3">
                            Duis id cillum duis sint do proident nostrud pariatur ex. Duis id cillum duis
                            sint do proident nostrud pariatur ex.
                        </p>
                    </SearchText>
                    <SearchInput className="col">
                        <Search/>
                    </SearchInput>
                </SearchContainer>
            </SearchWrapper>
        )
    }
}
