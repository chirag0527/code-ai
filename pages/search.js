import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Search(){

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
    <div className="search-container container">
        <h1 className="title">Search The Error</h1>
        <textarea class="search-textarea"placeholder="Type in the error"></textarea>

        <button className="search-btn btn">Search</button>

        <h3 className="output-title">The Error</h3>

        <div className="output"></div>
    </div>
    )
}
