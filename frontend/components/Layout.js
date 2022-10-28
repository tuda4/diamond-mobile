import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import {BsArrowBarUp} from 'react-icons/bs'
import {ToastContainer} from 'react-toastify'


export default function Layout({title, children }) {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const handleToTop = () => {
      setTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleToTop)
  })
  return (
    <div>
      <Head>
        <title>{title ? title + '- Diamond MB' : 'Diamond mobile'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/diamond-logo.svg" />
      </Head>

      <ToastContainer position='bottom-center' limit={1}/>

      <Header />
      <main id='home' className={`2xl:container py-16`}>
        {children}
        <a href={'#home'}><h3 className={`fixed bottom-24 font-medium text-xl flex justify-center items-center flex-col bg-gray-300 right-8 p-3 text-red-500 cursor-pointer rounded-full shadow-sm transition ${top ? '': 'hidden'}`}><BsArrowBarUp/></h3></a>
      </main>
      <Footer />
    </div>
  );
}
