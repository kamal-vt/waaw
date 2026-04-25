"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/lib/content-data/blogs.json";
import DecorativeLines from "../common/DecorativeLines";

export const BlogFullList = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-32 min-h-screen text-white font-sans flex flex-col items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#82b7dc]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-[#3466aa]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto px-4 md:px-8 lg:px-12 z-10 w-full flex flex-col items-center">
        <header className="flex flex-col items-center mb-20 text-center max-w-4xl">
          <DecorativeLines className="text-[#82B7DC] text-[34px] font-bold mb-6">BLOGS & INSIGHTS</DecorativeLines>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Knowledge for the <br /> Digital Age
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends in technology, design, and business automation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
          {blogsData.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col bg-[#111] rounded-[30px] overflow-hidden border border-white/5 hover:border-[#82b7dc]/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#82b7dc] rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-widest">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span>{blog.author}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#82b7dc] transition-colors leading-tight">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed">{blog.description}</p>
                <div className="mt-auto flex items-center text-[#82b7dc] font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 gap-2 transition-all">
                  Read More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
