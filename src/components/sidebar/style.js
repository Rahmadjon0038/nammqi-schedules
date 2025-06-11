import styled from 'styled-components'
const Container = styled.div`
  background-color: var(--navColor);
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-shadow: 0 0 4px var(--shadow);
  h1 {
    text-shadow: 0 0 2px white;
  }

  h1 span {
    color: blue;
    text-shadow: 0 0 2px blue;
  }
  transition: 0.1s;
`;


const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
    .link {
        color: var(--color);
        text-decoration: none;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
`;

const Settings = styled.div`    
      cursor: pointer;
     .info{
       display: flex;
      align-items: center;
      gap: 10px;

      .name{
      display: flex;
      align-items: center;
      gap:3px;
      }
     }
   .dark_icon {
      border: 1px solid white;
      background-color: red;

    }
    .login {
        padding: 0 20px;
        background-color: var(--navColor);
        border-radius: 5px;
        border: none;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        color: var(--color);
        transition: background-color 0.3s ease, color 0.3s ease;
        border: 1px solid var(--borderColor);
    }
    .link {
        text-decoration: none;
    }

    #image{
      width: 44px;
      height: 44px;
    }
`;



export {
  Container, Nav, Settings
};
