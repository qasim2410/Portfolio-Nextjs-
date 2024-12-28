import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            <a>qasim.hussain2410@gmail.com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_"
              href={"https://www.facebook.com/QasimHussain2004"}
              className="text-gray-500"
            >
              <FaFacebookSquare className="text-3xl hover:text-[#3b5998]" />
            </Link>
            <Link
              target="_"
              href={"https://www.instagram.com/qasimhussain__/"}
              className="ml-3 text-gray-500"
            >
              <FaInstagramSquare className="text-3xl hover:text-[#ec0075]" />
            </Link>
            <Link
              target="_"
              href={"https://www.linkedin.com/in/qasim-hussain-1047292b7/"}
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-[#0a66c2]" />
            </Link>
            <Link
              target="_"
              href={"https://github.com/qasim2410"}
              className="ml-3 text-gray-500"
            >
              <FaGithubSquare className="text-3xl hover:text-[#24292e]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
