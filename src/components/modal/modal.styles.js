import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 30%;  
    z-index: 5;
`;

export const Container = styled.div`
    width: 380px;
    height: auto;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);
    border-radius: 16px;
`;

export const Heading = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 60%;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.1);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 60%;
    }
`;

export const userInfoHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;

    & h3 {
        color: dimgray;
        font-weight: 600;
        letter-spacing: 1px;
    }

    & span {
        font-weight: 400;
        font-size: 12px;
        color: #595959;
        letter-spacing: 1px;
        align-self: center;
    }
`;

export const UserName = styled.div`
    
`;

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;