'use client'
import React, { useState } from 'react';
import { ProfileBox, ModalContent, CustomModal, Logoutbtn, ComparePass, Input, ComparePasswrap } from './style';
import profilImg from '../../assets/profile.png'
import Image from 'next/image';
import { useAuth } from '@/context/authContext';
import { FaPen } from "react-icons/fa";
import { LuSave } from "react-icons/lu";
import { useComparePass, useLogoutUser2, useUpdateUser } from '@/hooks/users/useUpdateProfile';
import getNotify from '@/hooks/notify';

const Profile = () => {
    const [rename, setRename] = useState(true) // RENAME ICON TOGGLE
    const { notify } = getNotify() //NOTIFICATION
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [compare, setCompare] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
        setRename(true)
        setCompare(false)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const updateMutation = useUpdateUser()
    // const mutaionLogout = useLogoutUser()

    const { role, userMeData, refetch } = useAuth()

    const [userData, setUserdata] = useState({
        firstname: "" || undefined,
        lastname: "" || undefined,
    })

    const onchange = (e) => {
        setUserdata({ ...userData, [e.target.name]: e.target.value })
    }

    function saveFunction() {
        const updatedFields = {};
        if (userData.firstname && userData.firstname.trim() !== "") {
            updatedFields.firstname = userData.firstname;
        }
        if (userData.lastname && userData.lastname.trim() !== "") {
            updatedFields.lastname = userData.lastname;
        }

        if (Object.keys(updatedFields).length === 0) {
            notify('err', "Hech qanday o'zgarish kiritilmadi!", "warning");
            return;
        }

        updateMutation.mutate(updatedFields, {
            onSuccess: () => {
                notify("Profil muvaffaqiyatli yangilandi!", "success");
                setRename(true); // Yana faqat o'qish rejimiga qaytish
                setUserdata({ firstname: "", lastname: "" }); // formani tozalash
                refetch(); // yangi malumotlarni olish
            },
            onError: () => {
                notify("Yangilashda xatolik yuz berdi", "error");
            }
        });
    }

    // ---------------- LOGOUT ------------------

    const mutaionLogout2 = useLogoutUser2()
    const logOut = () => {
        mutaionLogout2.mutate({
            onSuccess: () => {
                refetch()
            }
        })
    }

    // ---------------------compare password ------------------------------
    const comparemutation = useComparePass();
    const [mypass, setPassword] = useState('');

    function passFunk() {
        let respass = mypass.trim()
        if (respass.length == 0) {
            console.log('bosh bolmasligi kerak')
        }
        else {
            comparemutation.mutate(respass)
        }
    }



    return (
        <ProfileBox>
            <Image onClick={showModal}
                src={profilImg}
                width={70}
                height={70}
                style={{ objectFit: 'cover', borderRadius: '100%' }}
                alt='rasm bor'
            />
            <div>
                <p>{userMeData?.lastname.toLowerCase()}</p>
                <p>{userMeData?.firstname}</p>
            </div>

            <CustomModal
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                className="my-custom-modal">
                <ModalContent>
                    {/* <img src="/avatar.png" alt="Profil rasmi" /> */}
                    <h2>Mening Profilim {rename ? <FaPen onClick={() => setRename(!rename)} className='renameIcon' /> : <LuSave onClick={saveFunction} className='renameIcon' />}</h2>
                    <p>Ism: {rename ? userMeData?.lastname.toLowerCase() : <input name='lastname' onChange={onchange} type='text' placeholder='yangi ism' />} </p>
                    <p>Familiya: {rename ? userMeData?.firstname : <input name='firstname' onChange={onchange} type='text' placeholder='Yangi familiya' />}</p>
                    <p>Role: {userMeData?.role}</p>
                    <ComparePasswrap>
                        {compare ? <ComparePass onClick={passFunk} >Yuborish</ComparePass> : <ComparePass onClick={() => setCompare(!compare)}>Parolni tekshirish</ComparePass>}
                        {compare && <Input type="text" value={mypass} required onChange={(e) => setPassword(e.target.value)} placeholder='parolingizni kiritng' />}
                    </ComparePasswrap>
                    <div>
                        <Logoutbtn onClick={logOut}>Accountdan chiqish</Logoutbtn>
                    </div>

                    

                </ModalContent>
            </CustomModal>
        </ProfileBox>
    );
};
export default Profile;
