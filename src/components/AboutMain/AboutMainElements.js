import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const TextContaner = styled.div`
  display: flex;
  padding: 150px 0px 20px 0px;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 10px 0px 10px 0px;
    width: 90%;
  }
`;
export const TextContanerS = styled.div`
  display: flex;
  padding: 90px 0px 20px 0px;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: auto;
  min-height: 100vh;
  height: auto;
`;
