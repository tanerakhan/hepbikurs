import React, {Component} from 'react'
import {SearchContainer, SearchInput, SearchText, SearchWrapper} from './style'
import {Search} from 'semantic-ui-react'

export default class Index extends Component {
    render() {
        return (
            <SearchWrapper className="container">
                <SearchContainer className="row">
                    <SearchText className="col">
                        <span>GELECEK İÇİN DERS AL!</span>
                        <p className="mt-2 mb-3 p-0">
                        Hedeflerinize ulaşmanızı sağlayacak kurslara kaydolun. Kurslar şimdi yalnızca ₺27,49! İndirim, 8 Ağustos saat 23:59'da (PDT) sona erecek.
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
