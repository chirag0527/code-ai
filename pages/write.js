import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Write(){

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

    return(
    <div className="write-container container">
        <h1 className="title">Write The Code</h1>
        <textarea class="write-textarea"placeholder="Explain the code"></textarea>

        <button className="write-btn btn">Write</button>

        <h3 className="output-title">Code</h3>

        <div className="output"></div>
    </div>
    )
}