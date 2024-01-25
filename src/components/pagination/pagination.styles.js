import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 45px;
`;

export const PageNumber = styled.span`
    cursor: pointer;
    margin: 0 5px;
    color: ${(props) => (props.$active ? 'white' : 'black')};
    background-color: ${(props) => (props.$active ? 'blue' : 'transparent')};
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${(props) => (!props.$active ? '#e0e0e0' : 'blue')};
        color: ${(props) => (!props.$active ? 'black' : 'white')};
    }

    &:last-child {
        margin-right: 0;
    }
`;