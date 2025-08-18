
'use client'
import Link from "next/link";
import React, { useState } from "react";
import meaCulpa from "./fontcomponentMenu";


const MenuNav: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReportOpen, setIsReportOpen] = useState<boolean>(false);


    return (
        <div>
            <nav className="bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] neon-glow w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/BankFi.png" className="h-44 w-auto rounded-lg" alt="##" />
                    </a>
                    <Link href="#" className={`text-7xl font-bold text-yellow-400 ${meaCulpa.className}`}>
                        BankFi
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                {
                                    isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16">

                                        </path>
                                    )
                                }

                            </svg>
                        </button>
                    </div>
                    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <li><Link href="/testimonios">About Us</Link></li>
                        <li><Link href="/ContactPage">Contact</Link></li>
                        <li className="relative group">
                            <button>Loans</button>
                            <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rounded z-10">
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteUsuarios'>Lending</Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteComentarios'>Borrowing</Link></li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button>Stake</button>
                            <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rounded z-10">
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/atraccionesCaribe'>Ethereum</Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/atraccionesPacifico'>Solana</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <Link href={"/login"}>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button className="bg-[#FFC107] text-blue-900 font-medium rounded-lg text-sm px-4 py-2 text-center shadow-[0_0_15px_#00FFFF] hover:shadow-[0_0_25px_#00FFFF] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF00FF] neon-pink">
                                Connect Wallet
                            </button>



                            <button data-collapse-toggle="navbar-sticky" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            </button>
                        </div>
                    </Link>
                </div>
                {
                    isOpen && (
                        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-mediom">
                            <li><Link href="/testimonios">Testimonios</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li>
                                <button className="w-full text-left"
                                    onClick={() => setIsReportOpen(!isReportOpen)}>
                                    Reportes{
                                        isReportOpen ? '▲' : '▼'
                                    }
                                </button>
                                {
                                    isReportOpen && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                            <li><Link href='/reporteUsuarios'>Usuarios</Link></li>
                                            <li><Link href='/reporteComentarios'>Comentarios</Link></li>
                                        </ul>
                                    )
                                }
                            </li>
                        </ul>
                    )
                }
            </nav>

        </div>
    )
}

export default MenuNav;