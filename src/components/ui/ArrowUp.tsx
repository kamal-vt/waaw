"use client"

import { ArrowUp } from 'lucide-react'

const ArrowUpButton = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='fixed bottom-8 right-5 md:bottom-10 md:right-10 z-50'>
            <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#2b4261] rounded-full flex items-center justify-center text-white hover:bg-[#31527d] transition-colors shadow-lg"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </div>
    )
}

export default ArrowUpButton