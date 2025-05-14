'use client'
import React, { useState } from 'react';
import { ProfileBox, ModalContent, CustomModal } from './style';
import profilImg from '../../assets/profile.png'
import Image from 'next/image';
import { useAuth } from '@/context/authContext';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useLogoutUser2, useUpdateUser } from '@/hooks/users/useUpdateProfile';
const Profile = () => {
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

    const updateMutation = useUpdateUser()
    // const mutaionLogout = useLogoutUser()
    const mutaionLogout2 = useLogoutUser2()


    const { role, userMeData, refetch } = useAuth()
    

    // console.log(userMeData)

    const [rename, setRename] = useState(true)
    const [userData, setUserdata] = useState({
        firstname: "" || undefined,
        lastname: "" || undefined,
    })

    const onchange = (e) => {
        setUserdata({ ...userData, [e.target.name]: e.target.value })
    }

    function saveFunction() {
        updateMutation.mutate(userData)
    }

    // // console.log(mutaionLogout.mutate)

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
                <p>{userMeData?.data?.lastname.toLowerCase()}</p>
                <p>{userMeData?.data?.firstname}</p>
            </div>
            <CustomModal
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                className="my-custom-modal"
            >
                <ModalContent>
                    {/* <img src="/avatar.png" alt="Profil rasmi" /> */}
                    <h2>Mening Profilim</h2>
                    <p>Ism: {rename ? userMeData?.data?.lastname.toLowerCase() : <input name='firstname' onChange={onchange} type='text' placeholder='yangi ism' />} {rename ? <MdDriveFileRenameOutline onClick={() => setRename(!rename)} className='renameIcon' /> : <button onClick={saveFunction}>saqlash</button>} <button onClick={() => setRename(true)}>x</button> </p>
                    <p>Familiya: {userMeData?.data?.firstname}</p>
                    <p>Role: {userMeData?.data?.firstname}</p>
                    <div>
                        <button onClick={() => mutaionLogout2.mutate({
                            onSuccess: (data) => {
                                console.log('logout data',data)
                                refetch()
                            },
                          
                        })}>Accountdan chiqish</button>
                    </div>
                </ModalContent>

            </CustomModal>
        </ProfileBox>
    );
};
export default Profile;
