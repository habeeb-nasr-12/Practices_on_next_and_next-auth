import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'
const Dashboard = () => {
  const {data:session}= useSession()
 const [loading,setloadimg] =useState(true)
    
  useEffect(  function (){
    async function securePage () {
        const session =await getSession()
        if (!session){
            signIn ()
        }else{
            setloadimg(false)
        }
    }

    securePage()
  },[])
  if (loading){
    return <h2>loading</h2>
  }
  return (
    <div>
    <h2>dashboard</h2>
      
    </div>
  )
}

export default Dashboard 