import React from 'react'
// import { FaCheckSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


const Skills = () => {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            {/* <FaCheckSquare /> */}
            <FaHtml5 />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className= "relative h-1 bg-blue-500 rounded-xl w-[90%]">
            <div className= "absolute bg-blue-500 h-1 rounded-xl"></div>
<p className="font-bold text-blue-500 text-right">90%</p>
           </div>
            
          </div>
        </div>
      </div>
     {/* SKills */}
     <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoLogoCss3 />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Css
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1  bg-blue-500 rounded-xl  w-[80%]'>
            <div className='absolute bg-blue-500 h-1 rounded-xl'></div>
<p className='font-bold text-blue-500 text-right'>80%</p>
           </div>
            
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoLogoJavascript />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 bg-blue-500 rounded-xl  w-[70%]'>
            <div className='absolute bg-blue-500 h-1 rounded-xl'></div>
<p className='font-bold text-blue-500 text-right'>70%</p>
           </div>
            
          </div>
        </div>
      </div>
       {/* SKILLS */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaReact />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              React
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 bg-blue-500 rounded-xl w-[60%]'>
            <div className='absolute bg-blue-500 h-1 rounded-xl'></div>
<p className='font-bold text-blue-500 text-right'>60%</p>
           </div>
            
          </div>
        </div>
      </div>
   {/* SKILLS */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiTypescript />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 bg-blue-500 rounded-xl w-[50%]'>
            <div className='absolute bg-blue-500 h-1 rounded-xl'></div>
<p className='font-bold text-blue-500 text-right'>50%</p>
           </div>
            
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <RiNextjsFill />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Nextjs
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 bg-blue-500 rounded-xl w-[40%]'>
            <div className='absolute bg-blue-500 h-1 rounded-xl'></div>
<p className='font-bold text-blue-500 text-right'>40%</p>
           </div>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>

</section>

    </div>
  )
}

export default Skills