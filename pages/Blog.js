import { getSession } from 'next-auth/react'
import React from 'react'

const Blog = ({data}) => {
  return (
    <div>
      <h2>Blog {data}</h2>
    </div>
  )
}

export default Blog
export async function getServerSideProps(context){
  const session =await getSession(context)
  return{
    redirect:{
      destination:`/api/auth/signin?callbackUrl=${process.env.BLOG_ID}`,
      permanent:false
    }
  }
  return{
    props:{
      session,
      data: session ? 'list of 100 personlized blogs' : 'list of free blogs'
    }
  }
}
