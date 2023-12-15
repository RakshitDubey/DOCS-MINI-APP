import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref=useRef(null)
    const data=[
        {
            desc:"This is the practise",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagcolor:"green",
            },
        },
        {
            desc:"This is the practise",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagcolor:"green",
            },
        },
        {
            desc:"This is the practise",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now",
                tagcolor:"blue",
            },
        },
    ]
  return (
    <>
  <div  ref={ref} className='w-full h-full z-[3] fixed top-0 left-0 flex gap-5 flex-wrap p-5' >
   {
    data.map((item,index)=>(
        <Card data={item} refrence={ref}/>
    ))
   }
  </div>

    </>
  )
}

export default Foreground