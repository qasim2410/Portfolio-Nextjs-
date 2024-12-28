import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaCloudDownloadAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
        <header className="text-gray-600 body-font fixed top-0 left-0 right-0 z-20 bg-white shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image
              // src={require("../../../public/assets/picture/logo.jpeg")}
              src= "/assets/picture/logo.jpeg"
              width={100}
              height={100}
              alt="Qasim hussain"
              className="w-[35px]"
            />
      <span className="ml-3 text-xl">Qasim Hussain</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#Skills"} className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    <a href="/assets/cv/cv_intro.docx">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Download Cv
    <FaCloudDownloadAlt className='text-xl ml-2'/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Nav;