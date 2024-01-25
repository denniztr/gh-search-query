import styled from "styled-components";


export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const InputField = styled.div`
    position: relative;
`;

export const Input = styled.input`
    border: 2px solid transparent;
    width: 17rem;
    height: 2.5rem;
    padding-left: 0.8rem;
    outline: none;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;

    &:hover:focus {
        border: 2px solid #4A9DEC;
        box-shadow: 0 0 0 7px rgb(74, 157, 236, 20%);
        background-color: white;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
`;


export const Select = styled.select`
  border: 2px solid transparent;
  width: 18rem;
  height: 2.5rem;
  padding-left: 0.8rem;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
`;

export const Button = styled.button`
    position: absolute;
    right: 0.5rem;
    top: 0.8rem;
    border: none;
    background-color: transparent;
    color: dimgray;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`;

