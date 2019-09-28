import styled from "styled-components";


export const Container =styled.div`
    height:550px;
    width:70%;
    border:1px solid grey;
    margin: 30px 15%;
    box-sizing: border-box;
    display:flex;
    border-radius:5px;
    
`;

export const SignInput =styled.div`
    // border:1px solid gray;
    // margin-left:20px;
    margin:4% 10%;
    // padding-top:50px;
    height:400px;   
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-sizing: border-box;
`;

export const Button=styled.button`
    background-color:#9cdcff;
    width:170px;
    height:22px;
    border: none;
    font-weight:bold;
    font-size: 15px;
    color:#3f4142;
    margin-top:10px;
    margin-bottom:10px;
`;


export const Image = styled.img`
    height:100%;
    width:40%;

`;

export const P =styled.p`
    font-size:10px;
    color:red;
    padding-top:0px;
`;

export const Div =styled.div`
    height:60px;
    // border:1px solid black;
    align-items:flex-end;
    
`;

export const Input = styled.input`
    width:200px;    
    height:15px;
`