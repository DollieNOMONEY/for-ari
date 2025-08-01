"use client"
import Image from "next/image";
import Link from "next/link";

// Component to load the handwritten font
const FontStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
    .font-caveat {
      font-family: 'Caveat', cursive;
    }
  `}</style>
);


export default function Home() {
  return (
    <>
      <FontStyles />
      <main className='min-h-dvh w-full bg-[#a899ff] p-8 flex items-center justify-center'>
        <div className="bg-[#f6e4ff] w-full max-w-md rounded-3xl border-5 border-pink-400 outline-black outline-2 outline-dashed mx-auto">
          <div className="text-center relative p-6">
            <Image 
              width={150} 
              height={150} 
              src="/images/cat.jpg" 
              alt="Cat Image" 
              className="mx-auto mt-6 mb-5 rounded-3xl"
            />
            {/* Applied handwritten font and increased size for impact */}
            <h1 className="text-[#ff3aa6] mb-4 font-bold text-3xl sm:text-5xl md:text-6xl">HAPPY NATIONAL GIRLFRIEND DAY!</h1>
            <p className="font-caveat text-black mb-4 text-lg">(1st of August, 2025!)</p>
            {/* Applied handwritten font and increased size for readability */}
            <p className="font-caveat text-black mb-8 text-3xl">Click the next button girl frienddd!</p>
            <Link 
              href="/open" 
              className="inline-block rounded-full px-12 py-4 bg-[#ff3aa6] text-white font-bold mb-12 transition-transform hover:scale-105"
            >
              Next!
            </Link>
            {/* Applied handwritten font */}
            <p className="font-caveat absolute right-4 bottom-4 italic text-lg">To Arianna</p>
          </div>
        </div>
      </main>
    </>
  );
}
