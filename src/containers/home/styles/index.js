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

const Button = styled.div`
    margin: auto;
    width: 150px;
    padding : 10px 25px;
    background-color: #f3b8b8;
    text-align: center;
    border-radius : 6px;
    cursor : pointer
`;

const Form = styled.div`
    width : 500px;
    height : 300px;  
    outline: 2px solid #858585;
    padding : 15px;
    line-height : 1.5
`;

export {
    Container,
    Title,
    Button,
    Form
};
