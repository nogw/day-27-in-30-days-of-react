import styled from 'styled-components';
import { FaGrinStars } from 'react-icons/fa'

export const Icon = styled(FaGrinStars)`
  color: #fdbb03;
  margin-right: 5px;
`;

export const Container = styled.div`

`;

export const Header = styled.div`
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  display: flex;
  align-items: center;
  padding: 30px;

  h1 {
    color: #000;
    font-weight: bold;
  }
`;

export const MoviesContainer = styled.div`
  margin-top: 95px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  margin-left: auto;

  input {
    margin-top: 2px;
    outline: none;
    border: 2px solid #000;
    padding: 6px;
    border-radius: 5px;
    font-weight: bold;
    width: 160px;

    &::placeholder {
      color: #000;
      opacity: 1;
      font-weight: bold;
    }
  }
`;

export const Image = styled.div`
  img {
    height: 120px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    margin-right: auto;
    font-size: 15px;
  }
`;

export const Note = styled.div`
  display: flex;
  padding-left: 10px;

  h1 {  
    font-weight: bold;
    color: #fdbb03;
  }
`;

export const Texts = styled.div`
  width: 200px;
`;

export const Description = styled.div`
  p {
    font-size: 11px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const Item = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  height: 160px;
  margin: 20px;
  padding: 20px;
  overflow: hidden;

  &:hover {
    height: 100%;
  }

  &:hover ${Description} p {
    -webkit-line-clamp: 10;
  }
`;