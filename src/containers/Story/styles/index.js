import styled from 'styled-components';
import capoo from '../../../assets/imgs/capoo.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  padding: 30px 15px;
`;

const SmallTitle = styled.p`
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  padding: 30px 0;
`;

const Button = styled.div`
    margin: 10px;
    width: 200px;
    padding : 10px 25px;
    background-color: #34D9C3;
    text-align: center;
    border-radius : 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #83f7e8;
        transition : 0.5s;
    }
`;

const Form = styled.div`
    margin: 50px auto 50px auto;
    width: 50%;
    height: 100px;
    padding: 10px;
    outline : 2px solid #adadad;
`;

export {
    Container,
    SmallTitle,
    Button,
    Form
};
