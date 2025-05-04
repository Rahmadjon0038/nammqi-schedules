import styled from "styled-components"

export const Wrapper = styled.div`
background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`


export const Container = styled.div`
  width: 50%;
  background-color:white;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  .loginImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  box-shadow: 0 0 10px silver;
  border-radius: 5px;
`
export const Form = styled.form`
  background-color: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  h1{
    font-size: 36px;
  }

  label input{
    font-size: 16px;
    width: 100%;
    padding: 15px 20px;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--borderColor);
  }
  label input:focus{
    border: 2px solid blue;
  }
  button{
    border-radius: 5px;
    width: 100%;
    padding: 15px 20px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: blue;
    color: white;
    
  }
`
