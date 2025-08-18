'use client'
import React from "react";
import meaCulpa from "./fontcomponentMenu";

const FooterComponent = () => {
    return (
<footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] neon-glow border-t border-gray-200 md:flex md:items-center md:justify-between md:p-4 dark:border-gray-600">

            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/BankFi.png" className="h-14 w-auto rounded-lg" alt="##" />
                    </a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline mr-4 md:mr-6">Loans</a>
                </li>
                <li>
                    <a href="#" className="hover:underline mr-4 md:mr-6">Stake</a>
                </li>
                                <li>
                    <a href="#" className="hover:underline mr-4 md:mr-6">Contacto</a>
                </li>
            </ul>
            <div className="flex mt-3 md:mt-0 space-x-4 rtl:space-x-reverse">

                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.319.975.975 1.257 2.243 1.319 3.608.058 1.265.07 1.645.07 4.84s-.012 3.575-.07 4.84c-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.243 1.257-3.608 1.319-1.265.058-1.645.07-4.84.07s-3.575-.012-4.84-.07c-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.257-2.243-1.319-3.608C2.175 15.578 2.163 15.198 2.163 12s.012-3.575.07-4.84c.062-1.366.343-2.633 1.319-3.608C4.527 2.576 5.795 2.294 7.16 2.232 8.425 2.175 8.805 2.163 12 2.163zm0 1.838c-3.17 0-3.554.012-4.808.07-1.07.051-1.65.235-2.03.393a3.802 3.802 0 0 0-1.385.902 3.802 3.802 0 0 0-.902 1.385c-.158.38-.342.96-.393 2.03-.058 1.254-.07 1.638-.07 4.808s.012 3.554.07 4.808c.051 1.07.235 1.65.393 2.03.208.502.525.954.902 1.385a3.802 3.802 0 0 0 1.385.902c.38.158.96.342 2.03.393 1.254.058 1.638.07 4.808.07s3.554-.012 4.808-.07c1.07-.051 1.65-.235 2.03-.393a3.802 3.802 0 0 0 1.385-.902 3.802 3.802 0 0 0 .902-1.385c.158-.38.342-.96.393-2.03.058-1.254.07-1.638.07-4.808s-.012-3.554-.07-4.808c-.051-1.07-.235-1.65-.393-2.03a3.802 3.802 0 0 0-.902-1.385 3.802 3.802 0 0 0-1.385-.902c-.38-.158-.96-.342-2.03-.393-1.254-.058-1.638-.07-4.808-.07zm0 4.838a5.163 5.163 0 1 0 0 10.326 5.163 5.163 0 0 0 0-10.326zm0 8.526a3.363 3.363 0 1 1 0-6.726 3.363 3.363 0 0 1 0 6.726zm6.406-9.594a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0z" />
                    </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                </a>


                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.661 3H17.8l-4.02 4.816L9.058 3H3.933l5.64 8.153L3 21h3.001l4.595-5.51L14.942 21h5.125l-6.06-8.764L20.661 3Zm-2.936 16h-1.43l-6.777-9.89h1.535l6.672 9.89ZM7.703 5.212h1.429l9.048 13.148h-1.534L7.703 5.212Z" />
                    </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                    </svg>
                </a>
<span className="text-white text-sm sm:text-center">
    © 2025 BankFi. All Rights Reserved.
  </span>
            </div>
        </footer>
    );
};

export default FooterComponent;