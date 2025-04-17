'use client';

import React from 'react';
import Image from 'next/image';

export default function MesaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-6 bg-black p-5 rounded-full shadow-md">
            <Image 
              src="/image.png" 
              alt="Mesa Logo" 
              width={80} 
              height={80}
              className="mb-0"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-800 text-center">Mesa Website Assistant</h1>
          
          <div className="w-24 h-1 bg-teal-500 mb-8 rounded-full"></div>
          
          <p className="mb-10 text-lg text-slate-600 max-w-2xl text-center">
            Our intelligent Mesa assistant is here to help answer your questions and provide support.
            Feel free to interact with the assistant below.
          </p>
        </div>
        
        <div className="w-full mb-12 rounded-xl shadow-lg overflow-hidden border border-slate-200 bg-white">
          <div className="bg-teal-500 h-2 w-full"></div>
          <iframe
            src="https://app.toughtongueai.com/embed/minimal/6800a377c5a6da0f7f6c3453?pulse=true&bg=black"
            width="100%"
            height="400px"
            frameBorder="0"
            allow="microphone"
            className="w-full"
          ></iframe>
        </div>
        
        <div className="text-center text-slate-500 text-sm mt-10">
          Powered by Mesa © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
} 