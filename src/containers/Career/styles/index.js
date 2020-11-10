import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  padding: 30px 15px;
`;

const Logo = styled.div`
  width: calc((100% - 100px) / 2);
  height: 200px;
  margin: auto;
  margin-top: 20px;
  background: url(${props => props.img.dino}) no-repeat center /contain;
 `;

const Title = styled.p`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding: 30px 0;
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

const Input = styled.input`
    border-style: solid;
    border-color : #e6e6e6;
    width: 350px;
    height: 35px;
    display: block;
    margin: auto;
    padding-left: 10px;
    font-size: 1.2rem;
    color: #7d7d7d;
`;

const Form = styled.div`
    margin: 5px auto 50px auto;
    width: 50%;
    padding: 5px 5px;
    outline: 2px solid #adadad;
    line-height: 1.5;
`;

export {
    Container,
    Logo,
    Title,
    SmallTitle,
    Button,
    Input,
    Form
};
