'use client'

import FooterComponent from "@/components/footerComponent"
import MenuNav from "@/components/menuNav"
import React from "react"

const loansPage: React.FC = () => {

    return (
        <div>
            <MenuNav />
            <br />

 <div className="flex items-center justify-center min-h-[50vh] bg-gray-50 dark:bg-gray-900 px-4">
      <form className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-0 
              border-b-2 border-gray-300 dark:border-gray-600 
              appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 
              dark:peer-focus:text-blue-500"
          >
            Email address
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-0 
                border-b-2 border-gray-300 dark:border-gray-600 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 
                dark:peer-focus:text-blue-500"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-0 
                border-b-2 border-gray-300 dark:border-gray-600 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 
                dark:peer-focus:text-blue-500"
            >
              Last name
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-0 
                border-b-2 border-gray-300 dark:border-gray-600 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute text-sm text-gray-500 dark:text-gray-400 
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 
                dark:peer-focus:text-blue-500"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-0 
                border-b-2 border-gray-300 dark:border-gray-600 
                appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute text-sm text-gray-500 dark:text-gray-400 
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 
                dark:peer-focus:text-blue-500"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Comments
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-700 dark:text-gray-200 bg-gray-50 rounded-lg border 
              border-gray-300 focus:ring-blue-500 focus:border-blue-500 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 
                dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
            </div>
            <FooterComponent />
        </div>

    )
}

export default loansPage;