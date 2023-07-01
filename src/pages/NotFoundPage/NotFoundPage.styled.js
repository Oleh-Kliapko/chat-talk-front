import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  height: 100vh;
  max-width: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 50%;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding: 0 20px;

  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
`;

export const Btn = styled(Link)`
  padding: 16px 23px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: white;
  text-decoration: none;

  background-color: greenyellow;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  &:hover {
    background-color: green;
  }
`;
