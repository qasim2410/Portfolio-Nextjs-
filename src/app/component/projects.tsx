import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p> */}
    </div>
    <div className="flex flex-wrap -m-8 ">
      {/* My Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src='/assets/project/project-01.png'
            layout="fill"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
            {/* line-clamp-2 */}
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
        
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full  object-center"

            src='/assets/project/project-02.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Portfolio Custom
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Portfolio 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
       
              <Link href="https://portfolio-gamma-ashen-20.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
        
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
         
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
     
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
         
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
        
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
       
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
       
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
          
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
          
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
        
            src='/assets/project/project-01.png'
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Travelling Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Travel 
            </h1>
            <p className="leading-relaxed">
         This is the project for those who owns their own businees and they need good website to engage their customers
            </p>
              <Link href="https://travel-website-qasim-hussain.vercel.app/">
            <p className="leading-relaxed text-blue-500">
      View my Projects
            </p>
           </Link>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects;