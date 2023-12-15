import { useRouter } from 'next/router'
import React from 'react'
import { FaFeather } from 'react-icons/fa'

const SidebarTweetButton = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')}>
            <div className='mt-6 rounded-full h-14 w-14 flex items-center bg-sky-300 hover:bg-opacity-80 transition cursor-pointer lg:hidden'>
                <FaFeather size={24} color="white" className='mx-4'/>
            </div>
            <div className='mt-6 hidden lg:block px-4 py-3 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition'>
                <p className='hidden lg:block text-center font-semibold text-[20px] text-white'>Post</p>
            </div>
        </div>
    )
}

export default SidebarTweetButton