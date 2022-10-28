import Link from 'next/link';
import {signOut, useSession } from 'next-auth/react';
import React from 'react';
import { useEffect, useState } from 'react';
import Button from './Button';
import { FiSearch, FiUser } from 'react-icons/fi';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
function Header() {
  const itemsNavBar = [
    { name: 'IPHONE', link: '/' },
    { name: 'PHỤ KIỆN', link: '/' },
    { name: 'TRẢ GÓP', link: '/' },
  ];
  const advisePhone = '0123456789';
  const CSKH = '0123456789';
  const [blurNavbar, setBlurNavbar] = useState(false);

  useEffect(() => {
    const handleScrollWindow = () => {
      setBlurNavbar(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScrollWindow);
  });

  const { status, data: session } = useSession();
  const handleLogOut = () => {
    signOut({callbackUrl: '/login'})
  }

  return (
    <header className="2xl:container sticky top-0 left-0 sm:w-full w-full z-30">
      <section
        className={`2xl:container w-full bg-gray-800 text-gray-50 h-6 flex sm:justify-center relative`}
      >
        <div className="lg:container flex justify-end items-center gap-6 xl:text-lg lg:text-base md:text-base sm:text-sm lg:mx-10 md:mx-8">
          <h3>
            Tư vấn mua hàng:{' '}
            <a className={`underline`} href={`tel: +${advisePhone}`}>
              {advisePhone}
            </a>
          </h3>
          <h3>
            CSKH:{' '}
            <a className={`underline`} href={`tel: +${CSKH}`}>
              {CSKH}
            </a>
          </h3>
        </div>
      </section>
      <section
        className={`2xl:container bg-white text-gray-900 w-full h-14 flex justify-center ${
          blurNavbar ? 'shadow-md bg-gray-50' : ''
        }`}
      >
        <nav className="xl:container flex items-center relative md:static xl:justify-between lg:justify-between md:justify-between lg:mx-10 md:mx-8 flex-1 w-full sm:justify-center">
          <Link href={'/'}>
            <h1 className={`text-3xl font-semibold cursor-pointer`}>
              DIAMOND<span className={`text-xl font-normal`}>.mobile</span>
            </h1>
          </Link>
          <div
            className={`xl:flex lg:flex md:flex md:justify-end  sm:absolute sm:top-14 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 sm:flex sm:justify-center md:top-0 lg:top-0 xl:top-0 xl:relative xl:shadow-none lg:shadow-none md:shadow-none  sm:w-full sm:h-full z-10 lg:relative md:relative items-center ${
              blurNavbar ? 'shadow-md bg-gray-50' : 'bg-white'
            } `}
          >
            {itemsNavBar.map((item) => (
              <Link key={item.name} href={item.link}>
                <button
                  className={`xl:py-3 xl:px-6 hover:bg-slate-200  active:bg-gray-500 active:text-white font-medium rounded-sm transition sm:text-sm sm:px-3 sm:py-2 md:text-md lg:text-lg xl:text-lg`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <Button children={<FiSearch />} link=""></Button>
            {status === 'loading' ? (
              'Loading...'
            ) : session?.user ? (
              <Menu as="div" className={`relative inline-block`}>
                <Menu.Button className={`text-red-500`}>
                  {session.user.name}
                </Menu.Button>
                < Menu.Items className={`absolute -right-4 top-9 w-44 origin-top-right shadow border border-gray-500`}>
                  <Menu.Item>
                    <DropdownLink href={`/profile`} className={`flex p-2 border-b-gray-300 border bg-gray-200 hover:text-red-400`}>
                      Tài khoản
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink href={`/manage`} className={`flex p-2 border-b-gray-300 border bg-gray-200 hover:text-red-400`}>
                      Quản lý
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <a href='#' className='flex p-2 border-b-gray-300 bg-gray-200 hover:text-red-400' onClick={handleLogOut}>
                      Đăng xuất
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Button children={<FiUser />} link="login"></Button>
            )}
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
