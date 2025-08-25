'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import meaCulpa from './fontcomponentMenu';

const MenuNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);           // menú mobile
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [walletOpen, setWalletOpen] = useState<boolean>(false);   // modal wallet

  return (
    <div>
      <nav className="bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] neon-glow w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/BankFi.png" className="h-44 w-auto rounded-lg" alt="BankFi logo" />
          </div>

          {/* Título */}
          <Link href="/" className={`text-7xl font-bold text-yellow-400 ${meaCulpa.className}`}>
            BankFi
          </Link>

          {/* Hamburguesa móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link href="/testimonios">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            <li className="relative group">
              <button className="px-2 py-1">Loans</button>
              <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rounded z-10">
                <li className="block px-4 py-2 hover:bg-gray-100"><Link href="/reporteUsuarios">Lending</Link></li>
                <li className="block px-4 py-2 hover:bg-gray-100"><Link href="/reporteComentarios">Borrowing</Link></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="px-2 py-1">Stake</button>
              <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rounded z-10">
                <li className="block px-4 py-2 hover:bg-gray-100"><Link href="/atraccionesCaribe">Ethereum</Link></li>
                <li className="block px-4 py-2 hover:bg-gray-100"><Link href="/atraccionesPacifico">Solana</Link></li>
              </ul>
            </li>
          </ul>

          {/* Botón Connect Wallet */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse p-4">
            <button
              onClick={() => setWalletOpen(true)}
              className="bg-[#FFC107] text-blue-900 font-medium rounded-lg text-sm px-4 py-2 text-center shadow-[0_0_15px_#00FFFF] hover:shadow-[0_0_25px_#00FFFF] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF00FF] neon-pink"
            >
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <button
                className="w-full text-left"
                onClick={() => setIsReportOpen(!isReportOpen)}
              >
                 {isReportOpen ? '▲' : '▼'}
              </button>

              {isReportOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  <li><Link href="/stake">Stake</Link></li>
                  <li><Link href="/loans">Loans</Link></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>

      {/* Modal Wallet */}
      {walletOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setWalletOpen(false)} // cerrar al hacer click fuera
          aria-modal="true"
          role="dialog"
        >
          <div
            className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()} // evitar cerrar al click dentro
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Connect Wallet
              </h5>
              <button
                onClick={() => setWalletOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connect with one of our available wallet providers or create a new one.
            </p>

            {/* Opciones */}
            <ul className="my-4 space-y-3">
              {[
                { name: 'MetaMask', badge: 'Popular' },
                { name: 'Coinbase Wallet' },
                { name: 'Opera Wallet' },
                { name: 'WalletConnect' },
                { name: 'Fortmatic' },
              ].map((w) => (
                <li key={w.name}>
                  <button
                    className="w-full text-left flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    onClick={() => {
                      // aquí iría la lógica de conexión
                      setWalletOpen(false);
                    }}
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">{w.name}</span>
                    {w.badge && (
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">
                        {w.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="#"
                className="inline-flex items-center text-xs text-gray-500 hover:underline dark:text-gray-400"
              >
                Why do I need to connect with my wallet?
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuNav;

