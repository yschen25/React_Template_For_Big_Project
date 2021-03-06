import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    padding: 0px 15px 40px 15px;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 40px;
  text-align: center;
  padding: 30px 0;
`;

const Form = styled.div`
    width : 500px;
    height : 300px;  
    outline: 2px solid #858585;
    padding : 15px;
    line-height : 2
`;

export {
    Container,
    Title,
    Form
};
