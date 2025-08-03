import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--navColor);
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-shadow: 0 0 4px var(--shadow);
  z-index: 1000;
  h1 {
    text-shadow: 0 0 2px white;
  }

  h1 span {
    color: blue;
    text-shadow: 0 0 2px blue;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    h1 {
      font-size: 18px;
    }
  }
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

  @media (max-width: 768px) {
    gap: 15px;
    .link {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
    width: 100%;
    .link {
      font-size: 12px;
    }
  }


  @media (max-width: 600px) {
    display: none;
  }
`;

export const CustomMenu = styled.div`
.menu{
  font-size: 24px;
}

@media (min-width: 600px) {
    display: none;
  }

`
export const BurgerMenu = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background: var(--bg);
  color:var(--color);
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  padding: 20px;
  border: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slideDown 0.3s ease;
  
  .menu {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 28px;
    cursor: pointer;
      color:var(--color);

    transition: transform 0.2s ease;
  }
  
  .menu:hover {
    transform: rotate(90deg);
  }

  .link {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  color:var(--color);

    transition: color 0.2s ease;
  }
  
  .link:hover {
    color: orange;
  }

  .dark_icon {
    align-self: flex-end;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .dark_icon:hover {
    transform: scale(1.2);
  }

  .info {
    padding-top: 15px;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  /* 📱 Mobil responsive */
  @media (max-width: 576px) {
    top: 80px;
    width: 95%;
    padding: 15px;
    border-radius: 15px;
    .link {
      font-size: 16px;
    }
  }
`;


const Settings = styled.div`    
  cursor: pointer;
  .info {
    display: flex;
    align-items: center;
    gap: 10px;

    .name {
      display: flex;
      align-items: center;
      gap:3px;
    }
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

  #image {
    width: 44px;
    height: 44px;
  }

  @media (max-width: 768px) {
    .login {
      font-size: 14px;
      padding: 0 15px;
    }
    #image {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 480px) {
    .info {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
    .login {
      width: 100%;
      justify-content: center;
    }
  }
`;

export { Container, Nav, Settings };
