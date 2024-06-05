import Link from "next/link";
import React from "react";

interface LinkNavigantionProps {
  href: string;
  children: React.ReactNode;
  title: string;
  
}

export function LinkNavigation({children, title, href}: LinkNavigantionProps) {
  return (
    <li title={title} className='p-3'>
      <Link title={title}
            className={'p-5 font-semibold text-sm text-gray-900 hover:text-gray-600'}
            href={href}>{children}</Link>
    </li>
  )
}