"use client";
import Link from "next/link";
import {LinkNavigation} from "@/components/LinkNavigation";
import {useEffect, useState} from "react";
import Image from "next/image";
import {IoMenu} from "react-icons/io5";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);
  
  useEffect(() => {
    setIsScrolled(window.scrollY > 100);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      style={{zIndex: 10}}
      className={`fixed inset-x-0 flex justify-center h-24 bg-yellow-200`}
    >
      <nav className="w-full md:container">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-full">
          <div className="flex h-full px-10 md:px-20 md:px-0 items-center justify-between">
            <Link className='h-full flex items-center' title="Link para pagína de início" href="/">
              <Image
                width={100}
                height={100}
                src={"/icon_dengue.png"}
                alt={"Logo Sants Dev"}
              />
            </Link>
            <div className="md:hidden">
              <button
                type='button'
                title='Clique para abrir o menu'
                className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                
                <IoMenu size={30}/>
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pt-0 pb-3 md:block md:pb-0 md:mt-0 bg-yellow-100 md:bg-yellow-200 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-end justify-end md:items-center md:flex ">
              <LinkNavigation
                href="/"
                title="Link para o a pagína de Início"
              >
                INÍCIO
              </LinkNavigation>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
