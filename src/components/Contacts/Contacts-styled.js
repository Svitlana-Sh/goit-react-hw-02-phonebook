import styled from 'styled-components';

export const SectionStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SectionBook = styled.div`
width: content;
  border: 1px solid #f7e929;
  box-shadow: 3px 3px #f7b659, -7px 0 0.9em #f7e999;
  padding: 25px;
`;

export const BookTitle = styled.h1`
  font-family: Georgia, serif;
  font-size: 35px;
  margin: 0 0 20px 0;
  color: #6d4204;
`;

export const ContactInputForm = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 5px 25px;
  font-size: 18px;
  margin-left: auto;
  border: 1px solid black;
  border-radius: 5px;
`;

export const ErrorMessageStyled = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 300px;
  font-size: 14px;
  color: red;
`;

export const FormBtn = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px 25px;
  border: 1px #6d4204 solid;
  border-radius: 10px;
  background-color: #6d4204;
  color: #efd4b1;
  cursor: pointer;
  font-family: Georgia, serif;
  font-size: 17px;
  margin-left: auto;

  &:focus,
  &:hover {
    background-color: #a56d26;
  }

  &:active {
    box-shadow: 7px 5px 5px #7e7a7a;
    transform: translateY(3px);
  }
`;

export const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 25px;
  min-height: 280px;
  min-width: 300px;
  justify-content: flex-start;
  align-items: flex-start;
  border: 3px solid #f7e999;
  background-color: #f7b659;
`;

export const ContactsTitle = styled.h1`
  font-family: Georgia, serif;
  font-size: 22px;
  margin: 15px 0 10px 0;
  color: #f7b659;
  border: 1px solid #6d4204;
  border-radius: 8px; 
  background-color: #6d4204;
  padding: 7px;
`;

export const LabelFilter = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LabelName = styled.p`
  margin: 0;
  font-family: Georgia, serif;
  font-size: 15px;
  color: #f7e999;
`;

export const InputFilter = styled.input`
  padding: 5px 25px;
  font-size: 18px;
  margin-left: auto;
  border: 2px solid #f7e999;
  border-radius: 5px;

  &:focus,
  &:hover {
    border-color: #f2aa43;
  }
`;

export const FilterList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
