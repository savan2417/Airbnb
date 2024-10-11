'use client'

import { SafeUser } from '@/app/types'

import Container from '../Container'

import UserMenu from './UserMenu'
import Categories from './Categories'
import { Logo } from './Logo'
import Search from './Search'


interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log(currentUser)

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-wor items-center justify-between gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar