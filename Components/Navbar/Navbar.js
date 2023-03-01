import Link from 'next/link'

import { useSession, signIn, signOut } from "next-auth/react"


function Navbar() {
  const { data: session } = useSession()
   
   
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
     <ul className={`main-nav `}>
        <li>
          <Link  legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
       {session?  <li>
          <Link legacyBehavior href='/Dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>: ""}
        <li>
          <Link legacyBehavior href='/Blog'>
            <a>Blog</a>
          </Link>
        </li>

      {!session?  <li>
            <Link legacyBehavior href='/api/auth/signin'>
              <a onClick={e=>{
                e.preventDefault()
                signIn()
              }}>
         
                Sign In
              </a>
            
            </Link>

          </li>:<> 
         
          
          
          <li>
            <Link legacyBehavior href='/api/auth/signout'>
               <a onClick={e=>{
                e.preventDefault()
                signOut()
              }}>
              
                Sign Out
              </a>
            </Link>
          </li></> }
         

      
          
        
      </ul>
    </nav>
  )
}

export default Navbar