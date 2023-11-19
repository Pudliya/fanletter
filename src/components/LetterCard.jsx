import React from 'react';
import styled from 'styled-components';

function LetterCard() {
  return (
    <Card>
      <WriteTo></WriteTo>
      <Nickname>닉네임 :</Nickname>
      <Content>내용<br/></Content>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 460px;
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WriteTo = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

const Nickname = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`;

const Content = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

export default LetterCard;