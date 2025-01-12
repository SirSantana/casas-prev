'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 items-center flex-col sm:flex-row">
      <Link href={'/'} className={pathname === '/' ? 'font-bold text-white-100' : 'text-gray-500 hover:text-gray-700 hover:underline'}>
        Inicio
      </Link>
      <Link href={'/modelos'} className={pathname === '/modelos'? 'font-bold text-white-100' : 'text-gray-500 hover:text-gray-700 hover:underline'}>
        Modelos
      </Link>
      <Link href={'/tipos'} className={pathname === '/tipos' ?'font-bold text-white-100' : 'text-gray-500 hover:text-gray-700 hover:underline'}>
        Tipos 
      </Link>
    </nav>
  )
}