'use client';

import React from 'react';

export default function MesaPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Mesa Website Assistant</h1>
      
      <p className="mb-6">
        Our intelligent Mesa assistant is here to help answer your questions and provide support.
        Feel free to interact with the assistant below.
      </p>
      
      <div className="w-full mb-8">
        <iframe
          src="https://app.toughtongueai.com/embed/minimal/6800a377c5a6da0f7f6c3453?pulse=true&bg=black"
          width="100%"
          height="300px"
          frameBorder="0"
          allow="microphone"
        ></iframe>
      </div>
    </div>
  );
} 