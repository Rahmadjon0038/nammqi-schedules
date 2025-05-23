import styled from 'styled-components'
const Container = styled.div`
  border-right: 2px solid var(--borderColor);
  height: 100vh;
  padding: 20px;
  width: 300px;
  background-color: var(--bg);
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;

  h1 {
    text-shadow: 0 0 2px white;
  }

  h1 span {
    color: blue;
    text-shadow: 0 0 2px blue;
  }

  .meniIcon {
    font-size: 30px;
    display: block;
    margin-left: 2px;
    display: none;
  }

  transition: 0.1s;
  @media (max-width: 768px) {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    width: ${({ $hiddenNav }) => ($hiddenNav ? '80px' : '300px')};

    .title {
      display: none;
    }

    .meniIcon {
      display: block;
      margin-top: 3px;
    }
  }
`;

const MenuContainer = styled.div`
    display: flex;
    gap: 20px;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    row-gap: 15px;

    .link {
        display: flex;
        align-items: center;
        gap: 18px;
        background-color: var(--navColor);
        color: var(--color);
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--borderColor);
        text-decoration: none;
        padding-left: 20px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: var(--hoverColor);
        }

        @media(max-width: 768px) {
            padding-left: 10px;
            .name {
                display: none;
            }
        }
    }
`;

const Settings = styled.div`
    position: absolute;
    bottom: 20px;
    width: 84%;
    
    .darkmode {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        position: fixed;
        right: 30px;
        bottom: 10px;
        background-color: var(--navColor);
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--borderColor);
    }

    .darkmode .dark_icon {
        border-radius: 5px;
    }

    .login {
        width: 100%;
        padding: 0 20px;
        margin-top: 20px;
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
      width: 70px;
      height: 70px;
    }
     @media(max-width:768px){
      #image{
        width: 44px;
        height: 44px;
      }
    }
`;



export {
  Container, Nav, Settings, MenuContainer
};
