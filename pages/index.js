import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Option from './options-card'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/search') {
      document.body.style.background = 'linear-gradient(227.59deg, #141414 5.41%, #081A08 110.8%)'
    } else if(router.pathname === '/convert'){
      document.body.style.background = 'linear-gradient(227.59deg, #141414 5.41%, #24200B 110.8%)'
    } else if(router.pathname === '/write'){
        document.body.style.background = 'linear-gradient(227.59deg, #090808 5.41%, #1B0505 110.8%)'
      }
    else(
        document.body.style.background = '#000000'
    )
  }, [router.pathname])
  const [scroll, setScroll] = useState(0);
useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='landing-page'>
        <div className='navbar'>
          <h2>CodeAI</h2>
          <div className='navbar-line'></div>
        </div>
        <div className='main'>
          <h1>CodeAI</h1>
          <p>Get Help Get Code</p>
          <button className='main-btn'>Scroll Down</button>
          <img src='/down-arrow.svg'></img>
          <div className='gradient'></div>
        </div>
      </div>
      <div className='selection-page'
      >
        <h1>Choose Your Path</h1>
        <div className='options-container'>
        <Option 
        image = './option1.png'
        title = 'Write Code'
        description= "Need to write a program but don't know the code"
        link = './write' 
        />

        <Option 
        image = './option4.png'
        title = 'Code Convert'
        description= "Want to convert a code to a different language"
        link = './convert' 
        />

        <Option 
        image = './option5.png'
        title = 'Error Detection'
        description= "Stuck with a error and do know what it means?"
        link = './search' 
        />
      </div>
      </div>
    </>
  )
}
