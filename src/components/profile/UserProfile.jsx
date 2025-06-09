import { useState } from 'react';
import { Confarimpass, ConfarimpassTitle, Container, CreateAt, CustomButton, CustomInput, File, Glass, ImgContainer, Logoutbtn, ModalContent, ReplacePass, UserInfo, UserInfoContainer } from './style'
import { FaAngleDown } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import Cookies from 'js-cookie'
import { MdDriveFileRenameOutline } from "react-icons/md";
import avatar from '../../assets/user.png'
import Image from 'next/image';
import { useAuth } from '@/context/authContext';
import { useComparePass, usePasswordchange, useUpdateUser } from '@/hooks/users/useUpdateProfile';
function UserProfile() {
    const updateMuattion = useUpdateUser();
    const [edit, setEdit] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setEdit(true)
    };
    const handleClose = () => setOpen(false);

    const { role, userMeData, refetch } = useAuth()


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'transparent',
        boxShadow: 24,
        borderRadius: '10px',
        // p: 2,
        minHeight: '400px',
        overflow: "hidden"
    };


    const [userUpdate, setUserUpdate] = useState({
        firstname: "",
        lastname: "",
        username: "",
    });
    const onchange = (e) => {
        let { name, value } = e.target;
        setUserUpdate({ ...userUpdate, [name]: value })
    }

    const saveUpdate = () => {
        setEdit(!edit)
        console.log(userUpdate)
        updateMuattion.mutate(userUpdate)
    }

    const comparemutation = useComparePass();
    const [confarimpass, setConfarimPass] = useState('')
    function passFunk() {
        let respass = confarimpass.trim()
        if (respass.length == 0) {
        }
        else {
            comparemutation.mutate(respass)
            setConfarimPass('')
        }
    }

      const passowordChangeMutation = usePasswordchange()
        const [changePassdata, setChangePassdata] = useState({
            oldPassword: "",
            newPassword: ""
        })
        const onchagePass = (e) => {
            let { name, value } = e.target
            setChangePassdata({ ...changePassdata, [name]: value })
        }
        const changePassoword = () => {
            passowordChangeMutation.mutate(changePassdata)
    
            setChangePassdata({ oldPassword: "", newPassword: "" })
        }
    

    const logout = () => {
        Cookies.remove('role')
        Cookies.remove('token');
        Cookies.remove('userid')
        setRole('guest')
    }

    console.log(userMeData)
    return (
        <Container>
            <ImgContainer onClick={handleOpen}>
                <Image src={avatar} alt="avatar" />
                <p>{userMeData?.username}</p>
                <FaAngleDown />
            </ImgContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>

                    <Glass></Glass>
                    <ModalContent>
                        <div className='profileimg'>
                            <div className='info'>
                                <Image className='img' src={avatar} alt="avatar" />
                                <div className="infotext">
                                    <h2>{userMeData?.firstname} {userMeData?.lastname}</h2>
                                </div>
                            </div>
                            {edit ? < button onClick={() => setEdit(!edit)}>Yangilash</button> : <button onClick={saveUpdate}>Saqlash</button>}
                        </div>

                        <UserInfoContainer>
                            <UserInfo>
                                <div className='userInfo'>
                                    <p className='title'>Ismi</p>
                                    <div className='userInput'>
                                        {edit ? <p>{userMeData?.firstname}</p> : <CustomInput onChange={onchange} name="firstname" type="text" defaultValue={userMeData?.firstname} />}
                                    </div>
                                </div>
                                <div className='userInfo'>
                                    <p className='title'>Familiya</p>
                                    <div className='userInput'>
                                        {edit ? <p>{userMeData?.lastname}</p> : <CustomInput name='lastname' onChange={onchange} type="text" defaultValue={userMeData?.lastname} />}
                                    </div>
                                </div>
                                <div>
                                    <ConfarimpassTitle>Parolni Almashtirish</ConfarimpassTitle>
                                    <ReplacePass>
                                        <CustomInput onChange={onchagePass} name='oldPassword' value={changePassdata?.oldPassword} className='confirpasword' type="text" placeholder="Eski parol" />
                                        <CustomInput onChange={onchagePass} name='newPassword' value={changePassdata?.newPassword} className='confirpasword' type="text" placeholder="Yangi parol" />
                                        <CustomButton onClick={changePassoword}>Yuborish</CustomButton>
                                    </ReplacePass>
                                </div>
                            </UserInfo>
                            <UserInfo>
                                <div className='userInfo'>
                                    <p className='title'>Foydalanuvchi nomi</p>
                                    <div className='userInput'>
                                        <p>{userMeData?.username}</p>
                                        {/* {edit ?  : <CustomInput name='username' onChange={onchange} type="text" defaultValue={userMeData?.username} />} */}
                                    </div>
                                </div>
                                <div className='userInfo'>
                                    <p className='title'>Email</p>
                                    <div className='userInput'>
                                        <p>{userMeData?.role}</p>
                                    </div>
                                </div>

                                <div>
                                    <ConfarimpassTitle>Parolni tekshirish</ConfarimpassTitle>
                                    <ReplacePass>
                                        <CustomInput onChange={(e) => setConfarimPass(e.target.value)} value={confarimpass} className='confirpasword' type="text" placeholder="Parolingizni kiriting" />
                                        <CustomButton onClick={passFunk}>Tekshirish</CustomButton>
                                    </ReplacePass>
                                </div>
                            </UserInfo>


                        </UserInfoContainer>




                        <Logoutbtn onClick={logout}>Accountdan Chiqish</Logoutbtn>
                    </ModalContent>
                </Box>
            </Modal>
        </Container >
    )
}

export default UserProfile