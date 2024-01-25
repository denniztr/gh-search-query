import {UserList} from '../../components/user-list/user-list.jsx'
import {Pagination} from '../../components/pagination/pagination.jsx'
import {Loader} from '../../components/loader/loader.jsx'
import * as Styled from './main.styles.jsx'

export const Main = ({ users, loading, currentPage, totalPages, onPageChange, error }) => {
    return (
        <Styled.Content>
            {error ? (
                <p style={{textAlign: 'center', paddingTop: '2rem', color: 'gray'}}>{error}</p>
            ) : (
                <>
                    {loading ? <Loader /> : <UserList users={users} />}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </>
            )}
        </Styled.Content>
    )
}
