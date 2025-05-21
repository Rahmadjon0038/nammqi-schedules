'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import profilimg from '../../assets/profile.png'
import { useAuth } from '@/context/authContext'
import { SaveBtn, UserBox, Wrapper, CustomInput, CustomButton, Confarimpass, DeleteAccount, Msg } from './style'
import { useComparePass, usePasswordchange, useUpdateUser } from '@/hooks/users/useUpdateProfile'
import getNotify from '@/hooks/notify'
import { CustomModal, ModalContent } from '@/components/login/style'
import { FaRegCheckCircle } from "react-icons/fa";
function Proflie() {

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

    const { role, userMeData, refetch } = useAuth()
    const [renamefirst, setRenameFirst] = useState(false)
    const [renameLast, setRenameLast] = useState(false)

    const { notify } = getNotify()
    const updateMutation = useUpdateUser()

    const [userData, setUserdata] = useState({
        firstname: "" || undefined,
        lastname: "" || undefined,
    })

    const onchange = (e) => {
        setUserdata({ ...userData, [e.target.name]: e.target.value })
    }

    const [saved, setSaved] = useState(false)
    function saveFunction() {
        const updatedFields = {};
        if (userData.firstname && userData.firstname.trim() !== "") {
            updatedFields.firstname = userData.firstname;
        }
        if (userData.lastname && userData.lastname.trim() !== "") {
            updatedFields.lastname = userData.lastname;
        }



        updateMutation.mutate(updatedFields, {
            onSuccess: () => {
                setRenameLast(false);
                setRenameFirst(false);
                setSaved(true)
                setUserdata({ firstname: "", lastname: "" });
                refetch();
            },
            onError: () => {
                notify("Yangilashda xatolik yuz berdi", "error");
            }
        });

        setTimeout(() => {
            setSaved(false)
        }, 5000)
    }


    // ------------------------------------ CONFARIM PASSWORD ---------------------------
    const comparemutation = useComparePass();
    const [confarimpass, setConfarimPass] = useState('')
    function passFunk() {
        let respass = confarimpass.trim()
        if (respass.length == 0) {
        }
        else {
            comparemutation.mutate(respass)
        }
    }


    // --------------------------------- PASSWORD CHANGE -------------------------------
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

        // changePassdata.oldPassword = ''
        // changePassdata.newPassword = ''
    }


    // ---------------------------------- DELETEACCIUNT -------------------------------
    const deleteAccount = () => {
        notify('ok', 'delete account')
    }

    return (
        < Wrapper >
            <div className='imagebox'>
                <Image className='image' src={profilimg} alt='logo' width={100} />
                <h1>Mening profilim</h1>  {saved && <Msg><FaRegCheckCircle />Saqlandi</Msg>}
            </div>
            <UserBox>
                <h3>Ism</h3>
                <div className='changeBox'>
                    <div>
                        <div className='change'>
                            {renameLast ? <CustomInput onChange={onchange} name='lastname' type="text" defaultValue={userMeData?.lastname} /> : <p>{userMeData?.lastname}</p>}
                        </div>
                    </div>
                    <div className='rename'>
                        {renameLast && <CustomButton onClick={() => setRenameLast(false)}>Bekor qilish</CustomButton>}
                        {renameLast ? <CustomButton onClick={saveFunction} $renameLast={renameLast}>Saqlash</CustomButton> : <CustomButton onClick={() => setRenameLast(!renameLast)}>Taxrirlash</CustomButton>}
                    </div>
                </div>
            </UserBox>
            <UserBox>
                <h3>Familiya</h3>
                <div className='changeBox'>
                    <div>
                        <div className='change'>
                            {renamefirst ? <CustomInput onChange={onchange} name='firstname' type="text" defaultValue={userMeData?.firstname} /> : <p>{userMeData?.firstname}</p>}
                        </div>
                    </div>
                    <div className='rename'>
                        {renamefirst && <CustomButton onClick={() => setRenameFirst(false)}>Bekor qilish</CustomButton>}
                        {renamefirst ? <CustomButton onClick={saveFunction}>Saqlash</CustomButton> : <CustomButton onClick={() => setRenameFirst(!renamefirst)}>Taxrirlash</CustomButton>}
                    </div>
                </div>
            </UserBox>
            <UserBox>
                <div>
                    <h3>Foydalanuvchi nomi</h3>
                    <p>{userMeData?.username}</p></div>
            </UserBox>
            <UserBox>
                <div>
                    <h3>Role</h3>
                    <p>{userMeData?.role}</p></div>
            </UserBox>
            <UserBox>
                <h2>Prolni tekshirish</h2>
                <Confarimpass>
                    <CustomInput onChange={(e) => setConfarimPass(e.target.value)} className='confirpasword' type="text" placeholder="Parolingizni kiriting" />
                    <CustomButton onClick={passFunk}>Tekshirish</CustomButton>
                </Confarimpass>
            </UserBox>

            <UserBox>
                <h2>Prolni Almashtirish</h2>
                <Confarimpass>
                    <CustomInput onChange={onchagePass} name='oldPassword' value={changePassdata?.oldPassword} className='confirpasword' type="text" placeholder="Eski parol" />
                    <CustomInput onChange={onchagePass} name='newPassword' value={changePassdata?.newPassword} className='confirpasword' type="text" placeholder="Yangi parol" />
                    <CustomButton onClick={changePassoword}>Yuborish</CustomButton>
                </Confarimpass>
            </UserBox>
            <UserBox>
                <DeleteAccount onClick={showModal}>Akauntini butunlay o'chirib tashlash</DeleteAccount>
            </UserBox>


            <CustomModal
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                className="my-custom-modal">
                <ModalContent>
                    <p style={{ color: "red" }}>Eslatma</p>
                    <p>Agar accounti o'chirsangiz siz qo'shgan barcha malumotlar o'chib ketadi keyin uni qayta tiklash imkoni bo'lmasligi mumkin</p>
                    <CustomButton onClick={deleteAccount}>Tasdiqlash</CustomButton>
                </ModalContent>
            </CustomModal>
        </Wrapper >
    )
}

export default Proflie