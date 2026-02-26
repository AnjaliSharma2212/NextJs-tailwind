'use client'
import clsx from "clsx";
import { useState } from "react";

export default function Header(){
    const [isOpen, setIsOpen]= useState(false)
    return (
       <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-8 flex justify-between items-center">
            {/* logo */}
              <h1 className="text-2xl bg-blue-300 font-bold py-2 px-2 rounded-lg">My App</h1>
              
              {/* desktop Menu */}
            <nav className="hidden md:flex gap-6 text-grey-700">
                <a href="#" className="hover:text-blue-400 ">Home</a>
                <a href="#" className="hover:text-blue-400">Features</a>
                <a href="#" className="hover:text-blue-400">Pricing</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
            </nav>

            {/* mobile */}
            <button className="md:hidden" onClick={()=> setIsOpen(!open)}>☰</button>
     </div>
            {/* mobile view */}

            <div className={clsx(
                "md:hidden px-6 pb-5 space-y-2", isOpen? "block" :"hidden"
            )}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">Features</a>
                <a href="#" className="block">Pricing</a>
                <a href="#" className="block">Contact</a>
            </div>
           {/* FEATURES SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Fast Development</h4>
              <p className="text-gray-600">
                Build UI quickly using utility classes.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Responsive Design</h4>
              <p className="text-gray-600">
                Mobile-first responsive utilities.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Reusable Components</h4>
              <p className="text-gray-600">
                Clean and scalable component structure.
              </p>
            </div>

          </div>
        </div>
      </section>
            {/* CTA SECTION */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-white">
            Ready to build something amazing?
          </h3>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
            Join Now
          </button>
        </div>
      </section>
       </header>
       
    )
}