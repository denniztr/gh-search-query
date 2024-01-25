import { IoInformationCircleOutline } from "react-icons/io5";
import styled from "styled-components";

export const User = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-self: start;
    align-items: center;
`;

export const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 60%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 60%;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    p {
        color: dimgray;
        font-weight: 600;
        letter-spacing: 1px;
    }

    a {
        text-decoration: none;
        color: #50341d;
    }
`;

export const Icon = styled(IoInformationCircleOutline)`
    transition: transform 0.3s;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-5px);
    }
`;


