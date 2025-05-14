import React, { useState } from 'react'
import { IoMdLogIn } from "react-icons/io";
import { CustomModal, ModalContent } from './style';
import { useLogin } from '@/hooks/useLogin';

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // -------------------------- lOGIN -----------------------
  const loginMutation = useLogin()
  const [loginData, setLogindata] = useState({
    username: "",
    password: ""
  })
  const onchange = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value })
  }
  function handleSumbit(e) {
    e.preventDefault()
    loginMutation.mutate({ loginData })
    console.log(loginData)

  }

  return (
    <div>
      <button onClick={showModal} className='login'>
        Tizimga kirish <span><IoMdLogIn fontSize={30} color='green' /></span>
      </button>
      <CustomModal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="my-custom-modal">
        <ModalContent>
          <form onSubmit={handleSumbit}>
            <h2>Tizimga kirish</h2>
            <input required onChange={onchange} name='username' type="text" placeholder='Foydalanuvchi nomi' />
            <input required onChange={onchange} name='password' type="password" placeholder='parol' />
            <button>Kirish</button>
          </form>
        </ModalContent>
      </CustomModal>
    </div>
  )
}

export default Login
