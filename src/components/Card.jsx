import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  return (
    <>
        <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}}className='relative bg-zinc-900 w-60 h-72 rounded-[50px] text-white py-10 px-5 overflow-hidden'>
            <LuFileSpreadsheet/>
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className="footer absolute bottom-0 w-full   left-0 ">
                <div className='flex items-center justify-between  px-8 mb-3 py-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                        {data.close ?<IoMdClose/>:<FaCloudDownloadAlt size='1em' color='#000'/>}
         
                    </span>
                    

                </div>
                {
                    data.tag.isOpen&&
                    (
                        <div className={`tag w-full bg-${data.tag.tagcolor}-200 py-4 bg-green-600 flex items-center justify-center`}>
                        <h3 className='text-md'>{data.tag.tagTitle}</h3>
                    </div>
                    )
                }
              
            </div>
        </motion.div>

    </>
  )
}

export default Card