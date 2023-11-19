import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import myImage from './20110817000887_0.jpg';

function Header() {
  const [activeTab, setActiveTab] = useState('김종민'); // 초기 상태는 첫 번째 탭

  // 아티스트 탭 클릭 시 활성화된 아티스트 변경하는 함수
  const handleTabClick = (artistName) => {
    setActiveTab(artistName);
  };

  return (
    <Container $image={myImage}>
      <Title>코요테 그룹 펜 레터</Title>
      <TabWrapper>
        <Tab active={activeTab === '김종민'} onClick={() => handleTabClick('김종민')}>
          김종민
        </Tab>
        <Tab active={activeTab === '신 지'} onClick={() => handleTabClick('신 지')}>
          신 지
        </Tab>
        <Tab active={activeTab === '빽 가'} onClick={() => handleTabClick('빽 가')}>
          빽 가
        </Tab>
      </TabWrapper>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: relative;
  background-image: url(${({ $image }) => $image});
  background-size: 500px;
  background-position: center;
  width: 100%;
  height: 320px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  position: absolute;
  top: 170px;
  left: 50%;
  font-size: 50px;
  font-weight: 700;
  transform: translate(-50%, -50%);
  color: rgb(52, 231, 228);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

const TabWrapper = styled.ul`
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  border: 0.11rem solid black;
  border-radius: 10px;
  list-style: none;
  padding: 10px;
  width: 450px;
  background-color: rgba(255, 255, 255, 0);
`;

const Tab = styled.li`
  font-size: 20px;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color: #ff8d8d;
  color: white;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #ff8d8d;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: white;
      color: #ff8d8d;
    `}
`;
