import {SearchQuery} from './components/search/search.jsx'
import {Main} from './layout/main/main.jsx'
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
    const [users, setUsers] = useState([])
    const [totalPages, setTotalPages] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('Ania')
    const [order, setOrder] = useState('desc')
    const itemsPerPage = 10

    useEffect(() => {
        const fetchData = () => {
            setLoading(true)
            axios.get(`https://api.github.com/search/users?q=${searchQuery}&per_page=${itemsPerPage}&page=${currentPage}&sort=repositories&order=${order}`)
                .then((res) => {
                    if (res.status === 200) {
                        if (res.data.total_count === 0) {
                            throw new Error('no user')
                        }
                        setTotalPages(Math.ceil(res.data.total_count / itemsPerPage));
                        setUsers(res.data.items)
                        setLoading(false)
                        setError(null)
                    }
                })
                .catch((error) => {
                    if (error.message === 'no user') {
                        setError('Пользователи не найдены')
                    } else {
                        setError('Произошла ошибка при запросе к серверу, повторите попытку позже')
                    }
                })
        }

        fetchData()
    }, [searchQuery, currentPage, order])

    const handleSearch = (str, filter) => {
            setCurrentPage(1)
            setSearchQuery(str)
            setOrder(filter)
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <>
            <SearchQuery handleSearch={handleSearch} />
            <Main
                users={users}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                error={error}
            />
        </>
    );
}

export default App;