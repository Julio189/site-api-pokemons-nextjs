import Image from "next/image"
import Link from "next/link"


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black h-16 p-5 mb-5">
        <div className="flex items-center justify-center">
            <Image 
              src={'/../public/images/pokeball.png'}
              width={30}
              height={30}
              alt="logo"
            />
            <Link href="/"className="text-white ml-5 text-xl ">
              PokeNext
            </Link>
        </div>
        <ul className="flex">
          <li className="mx-7">
            <Link className='text-white text-lg p-1 border-b-2 border-b-transparent hover:border-b-slate-50 ease-in-out duration-300' 
            href='/'>Home</Link>
          </li>
          <li className="mx-7">
            <Link className='text-white text-lg p-1 border-b-2 border-b-transparent hover:border-b-slate-50 ease-in-out duration-300' 
            href='/about'>About</Link>
          </li>
        </ul>
    </nav>
  )
}
