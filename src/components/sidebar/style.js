const { default: styled } = require("styled-components");

const Container = styled.div`
    border: 2px solid black;
    height: 100vh;
    padding: 20px;
    width: 22%;
    background-color: var(--bg);
    position: relative;
`
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    row-gap: 15px;
     
    .link{
        background-color: var(--navColor);
        color: var(--color);
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--borderColor);
        text-decoration:none;
        padding-left: 20px;
        &:hover{
            background-color: var(--hoverColor);
            transform: translateX(4px);
        }
    }
    
`

const Settings = styled.div`
    position: absolute;
    bottom: 20px;
    width: 84%;
    

    span{
        padding:6px;
        background-color: var(--navColor);
        border-radius: 5px;
        cursor: pointer;
    }
    .darkmode{
        display: flex;
        gap: 10px;
    }
    .login{
        width: 100%;
        padding: 0 20px;
        margin-top: 20px;
        background-color: var(--navColor);
        border-radius:5px;
        border: none;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        
    }
    .setttingIcon{
        display: flex;
        align-items: center;
        font-size: 16px;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        width: 100%;
        background-color: var(--navColor);
        border: none;
        text-decoration: none;
    }

    .link{
        text-decoration: none;
    }
`




export {
    Container, Nav, Settings
};