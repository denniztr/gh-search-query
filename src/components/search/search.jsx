import {useState} from "react";
import * as Styled from './search.styles.js';

export const SearchQuery = props => {
    const {handleSearch} = props
    const [search, setSearch] = useState('Ania')
    const [filter, setFilter] = useState('desc')
    const [isSearchDisabled, setIsSearchDisabled] = useState(false)

    const handleKey = (event) => {
        if (event.key === 'Enter' && !isSearchDisabled) {
            handleSearch(search, filter)
        }
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
        handleSearch(search, event.target.value)
    }

    const handleSearchInputChange = (event) => {
        setSearch(event.target.value);
        setIsSearchDisabled(event.target.value.trim() === "");
    };

    return (
        <Styled.SearchContainer>
            <Styled.InputField>
                <Styled.Input
                    defaultValue="ania"
                    onChange={handleSearchInputChange}
                    onKeyDown={handleKey}
                />
                <Styled.Button
                    onClick={() => handleSearch(search)}
                    disabled={isSearchDisabled}
                >
                    Поиск
                </Styled.Button>
            </Styled.InputField>
            <Styled.RadioContainer>
                <p style={{fontWeight: '400'}}>Количество репозиториев:</p>
                <Styled.Select
                    onChange={(event) => handleFilter(event)}
                >
                    <option value="desc">по убыванию</option>
                    <option value="asc">по возрастанию</option>
                </Styled.Select>
            </Styled.RadioContainer>
        </Styled.SearchContainer>
    )
}