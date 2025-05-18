'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import profilimg from '../../assets/profile.png'
import { useAuth } from '@/context/authContext'
import { SaveBtn, UserBox, Wrapper } from './style'
import { useUpdateUser } from '@/hooks/users/useUpdateProfile'
import getNotify from '@/hooks/notify'

function Proflie() {
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
                setRenameLast(false);
                setUserdata({ firstname: "", lastname: "" }); 
                refetch(); 
            },
            onError: () => {
                notify("Yangilashda xatolik yuz berdi", "error");
            }
        });
    }

    return (
        < Wrapper >
            <div className='imagebox'>
                <Image className='image' src={profilimg} alt='logo' width={100} />
                <h1>Mening profilim</h1>
            </div>
            <UserBox>
                {/* <FaPen onClick={() => setRename(!rename)} className='renameIcon' /> : <LuSave onClick={saveFunction} className='renameIcon' />}</h2>
                     <input name='lastname' onChange={onchange} type='text' placeholder='yangi ism' />} </p> */}
                <h3>Ism</h3>
                <div className='changeBox'>
                    <div>
                        <div className='change'>
                            {renameLast ? <input onChange={onchange} name='lastname' type="text" defaultValue={userMeData?.lastname} /> : <p>{userMeData?.lastname}</p>}
                        </div>
                    </div>
                    <div className='rename'>
                        {renameLast && <button onClick={() => setRenameLast(false)}>Bekor qilish</button>}
                        {renameLast ? <SaveBtn onClick={saveFunction} $renameLast={renameLast}>Saqlash</SaveBtn> : <button  onClick={() => setRenameLast(!renameLast)}>Taxrirlash</button>}
                    </div>
                </div>
            </UserBox>

            <UserBox>
                <h3>Familiya</h3>
                <div className='changeBox'>
                    <div>
                        <div className='change'>
                            {renamefirst ? <input onChange={onchange} name='firstname' type="text" defaultValue={userMeData?.firstname} /> : <p>{userMeData?.firstname}</p>}
                        </div>
                    </div>
                    <div className='rename'>
                        {renamefirst && <button onClick={() => setRenameFirst(false)}>Close</button>}
                        {renamefirst ? <button  onClick={saveFunction}>Saqlash</button> : <button onClick={() => setRenameFirst(!renamefirst)}>Taxrirlash</button>}
                    </div>
                </div>
            </UserBox>
            <UserBox>
                <div>
                    <h3>Foydalanuvchi nomi</h3>
                    <p>{userMeData?.username}</p></div>
            </UserBox>
            <UserBox>
                <div> <h3>Role</h3>
                    <p>{userMeData?.role}</p></div>
            </UserBox>
        </Wrapper >
    )
}

export default Proflie