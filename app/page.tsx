"use client"

import Image from "next/image";
import { Button } from "./component/Button";
import { redirect } from "next/navigation";
import Head from "next/head";

//const redirectUrl: "https://www.axisbank.com/"

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images.jpeg')" }}>
      {/* <Head>
        <title>Next.js Landing Page</title>
        <meta name="description" content="Simple landing page built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* bg-gray-100 h-screen */}

      <main className=" flex items-center justify-center">
        <div className="max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl text-black font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600 mb-4">
            We're excited to have you here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="https://huggingface.co/spaces/Rohan246/Gemini-Chat-Bot" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
            Get Started
          </a><span>   </span>
          <a href="/pages/doctor" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
            Book a session
          </a>
        </div>
      </main>

    {/* <div className="h-screen flex items-center justify-center">
      <Button onClick={async () => {
      window.location.href ="https://chatgpt.com/?oai-dm=1" || "";
      }}>Start Chat</Button>
      <Button onClick={async () => {
      window.location.href ="https://www.apollohospitals.com/" || "";
      }}>Satrt Session</Button>

    </div> */}
    
    </div>

  );
}
