import React,{useEffect} from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    
    // const[data,setData]= useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/gouriTD')
    //     .then((res)=>res.json())
    //     .then((resdata)=>{
    //         console.log(resdata)
    //         setData(resdata)
    //     })
    //     .catch((err)=>console.log(err))
    // }   
    // ,[])

  return (
    <>
    <div className='bg-slate-500 inline-flex flex-col justify-around item-center gap-5 w-full py-4 text-white'>
      <h1 className='text-center '>{data.name}</h1>
      <img src={data.avatar_url} alt="avtar_image" width={200} height={200} className=' rounded-full self-center'/>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic.</p>
      <small className='text-center'>Public repos: {data.public_repos}</small>
    </div>
    </>
  )
}

export default Github

export async function githubLoader(){
    const res = await fetch('https://api.github.com/users/gouriTD');
    const resData = await res.json();
    return resData;
}
