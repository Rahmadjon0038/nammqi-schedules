'use client'
import React from 'react'
import { HoverMenuBox } from './style'
import Image from 'next/image'
import profilimg from '../../assets/profile.png'
import { useAuth } from '@/context/authContext'
import { useLogoutUser2 } from '@/hooks/users/useUpdateProfile'
import Link from 'next/link'
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation'

function Hovermenu() {
    const router = useRouter()
    const { role, userMeData, refetch } = useAuth()
    const mutaionLogout2 = useLogoutUser2()
    const logOut = () => {
        mutaionLogout2.mutate({
            onSuccess: () => {
                refetch()
                router.push('/')
            }
        })
    }
    return (
        <HoverMenuBox>
            <div className='imagebox'>
                <Image className='image' src={profilimg} alt='logo' />
                <div className='username'>
                    <h4>{userMeData?.lastname.toLowerCase()}</h4>
                    <h4>{userMeData?.firstname}</h4>
                </div>
            </div>
            <Link className='link' href={'/profile'}><button><CiSettings size={22}/> Sozlamalar</button></Link>
            <button onClick={logOut}><IoIosLogOut size={22}/> Chiqish</button>
        </HoverMenuBox>
    )
}

export default Hovermenu