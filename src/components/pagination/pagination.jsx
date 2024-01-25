import * as Styled from './pagination.styles.js'

export const Pagination = props => {
    const {
        currentPage: currentPage,
        totalPages: totalPages,
        onPageChange: onPageChange,
    } = props

    const visiblePageQuantity = 10

    const getPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= visiblePageQuantity) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= visiblePageQuantity - 2) {
                for (let i = 1; i <= visiblePageQuantity; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - visiblePageQuantity + 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - visiblePageQuantity + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 7; i <= currentPage + 2; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers
    }

    return (
        <Styled.PaginationContainer>
            {getPageNumbers().map((number, index) => (
                <Styled.PageNumber
                    key={index}
                    onClick={() => onPageChange(number)}
                    $active={number === currentPage}
                >
                    {number}
                </Styled.PageNumber>
            ))}
        </Styled.PaginationContainer>
    )
}