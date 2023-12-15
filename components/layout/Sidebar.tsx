import React from 'react'
import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import Sidebarlogo from './Sidebarlogo'
import SidebarItems from './SidebarItems'

const Sidebar = () => {
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: "Notifications",
      href: '/notifications',
      icon: BsBellFill
    }, {
      label: 'Profile',
      href: '/user/123',
      icon: FaUser
    }
  ]

  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <Sidebarlogo />
          {items.map((item) => (
            <SidebarItems
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar