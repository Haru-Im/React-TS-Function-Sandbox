import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled(FaSearch)`
  display: flex;
  position: absolute;
  padding-left: 15px;
  color: gray;
  font-size: 17px;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  padding: 30px 25px 30px 40px;
  font-size: 18px;

  box-sizing: border-box;
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }
`;
