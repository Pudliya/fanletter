import styled from 'styled-components';
import uuid from 'react-uuid';
import { useState } from 'react';

function Form() {

  const [nickName, setNickName] = useState("");
  const [contents, setContents] = useState("");
  const [member, setMember] = useState("김종민");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickName || !contents) {
      return alert("닉네임과 내용은 필수 입력값입니다.");
    }
  };

  const selectMember = (e) => {
    setMember(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit} >
      <InputEvent>
        <Label>닉네임 :</Label>
        <NicknameInput value={nickName} placeholder="최대 20자까지 작성 가능합니다." maxLength={20} onChange={(e) => {setNickName(e.target.value);}}/> <br/>
      </InputEvent>
      <InputEvent>
        <Label>내용 :</Label>
        <Textarea value={contents} placeholder="최대 100자까지 작성 가능합니다." maxLength={100} onChange={(e) => {setContents(e.target.value);}}/><br/>
      </InputEvent>
      <InputEvent>
        <Label>보낼 사람 :</Label>
        <select onChange={selectMember}>
          <option value="김종민">김종민</option>
          <option value="신지">신지</option>
          <option value="빽가">빽가</option>
        </select>
      </InputEvent>
      <Button type="submit">팬레터 등록</Button>
    </FormContainer>
  );
}
export default Form;

const FormContainer = styled.form`
  width: 450px;
  background-color: #8fff8d;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;

const InputEvent = styled.section`
  margin-bottom: 5px;
  display: flex;
`;

const Label = styled.label`
  width: 100px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

const NicknameInput = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px 10px;
  resize: none;
`;
