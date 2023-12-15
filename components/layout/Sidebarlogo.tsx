import { useRouter } from 'next/router';
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

const Sidebarlogo = () => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push('/')}
            className='
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
        text-white
        text-3xl
        '>
            <FaXTwitter />
        </div>
    )
}

export default Sidebarlogo
