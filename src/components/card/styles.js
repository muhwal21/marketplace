import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 46%;
  margin: 0 2%;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 136px;
  background-color: grey;
  object-fit: cover;
`;

export const WrapDesc = styled.div`
  padding: 8px;
`;

export const Label = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  margin: 0;
`;

export const Desc = styled.p`
  font-size: 10px;
  color: #000000;
  margin: 0;
  margin-bottom: 4px;
`;

export const Price = styled.p`
  font-size: 12px;
  color: #000000;
  margin: 0;
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonAdd = styled.button`
  background-color: green;
  margin-bottom: 8px;
  margin-right: 8px;
`;