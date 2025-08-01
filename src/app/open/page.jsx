"use client"
import Image from "next/image";
import { useState } from "react";

// The style tag now includes a keyframe animation for the popup effect.
const FontAndPrintStyles = () => (
  <style jsx global>{`
    body {
      overflow-x: hidden;
    }

    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
    .font-caveat {
      font-family: 'Caveat', cursive;
    }

    @page {
      margin: 0;
    }

    @media print {
      body {
        margin: 0 !important;
      }
    }

    /* Keyframe animation for the scale-up effect */
    @keyframes scale-in-center {
      0% {
        transform: scale(0.9);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .animate-scale-in {
      animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  `}</style>
);

// New Modal Component with disorganized, absolutely positioned images
const NuhUhPopup = ({ onClose }) => (
  <div className="fixed inset-0 bg-[#a899ff] bg-opacity-90 flex items-center justify-center z-50 p-4 print:hidden">
    <div className="relative w-full max-w-xs sm:max-w-sm">
      {/* Disorganized images positioned around the central card */}
      <div className="absolute -top-10 -left-4 sm:-left-10 transform -rotate-12">
        <Image width={80} height={80} src="/images/hello_kitty_crying.png" alt="Crying Hello Kitty" className="rounded-lg" />
      </div>
      <div className="absolute -top-12 right-0 sm:-right-8 transform rotate-15">
        <Image width={80} height={80} src="/images/superman_crying.png" alt="Crying Superman" className="rounded-lg" />
      </div>
      <div className="absolute -bottom-12 -left-2 sm:-left-8 transform rotate-6">
        <Image width={80} height={80} src="/images/apple_jack_crying.png" alt="Crying Apple Jack" className="rounded-lg" />
      </div>
      <div className="absolute -bottom-10 -right-4 sm:-right-10 transform -rotate-12">
        <Image width={80} height={80} src="/images/spiderman_crying.png" alt="Crying Spiderman" className="rounded-lg" />
      </div>

      {/* The original centered content card */}
      <div className="bg-[#f6e4ff] rounded-3xl p-6 sm:p-8 text-center border-5 border-pink-400 outline-black outline-2 outline-dashed">
        <p className="font-caveat text-4xl text-zinc-800 mb-6">Aw... Please try again...</p>
        <button 
          onClick={onClose}
          className="rounded-full px-8 py-2 bg-[#ff3aa6] text-white font-bold transition-transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
);


export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [showNuhUhPopup, setShowNuhUhPopup] = useState(false);

  const handleSaveAsPDF = () => {
    window.print();
  };

  return (
    <>
      <FontAndPrintStyles />
      {showNuhUhPopup && <NuhUhPopup onClose={() => setShowNuhUhPopup(false)} />}

      <main className="w-full bg-[#a899ff] min-h-dvh p-4 sm:p-8 flex items-center justify-center print:bg-white">
        
        <div className="bg-[#f6e4ff] w-full max-w-md rounded-3xl border-5 border-pink-400 outline-black outline-2 outline-dashed p-4 sm:p-6 relative print:shadow-none print:border-none print:outline-none">
          
          {!isOpened ? (
            <div className="print:hidden">
              <Image width={280} height={280} src="/images/mail_closed.png" alt="Closed Envelope" className="mx-auto mt-6 mb-5" />
              <p className="text-center text-[#ff3aa6] mb-6 font-bold text-4xl">Do you wanna open it?</p>
              <div className="flex gap-5 justify-center mb-10">
                <button onClick={() => setIsOpened(true)} className="rounded-full px-5 py-2 bg-[#ff3aa6] text-white font-bold transition-transform hover:scale-105">Open it!</button>
                <button onClick={() => setShowNuhUhPopup(true)} className="rounded-full px-8 py-2 bg-[#ff3aa6] text-white font-bold transition-transform hover:scale-105">Nuh uh</button>
              </div>
              <p className="absolute right-4 bottom-4 italic font-caveat text-lg">To Arianna</p>
            </div>
          ) : (
            // "Opened" letter state now has the animation class applied to its wrapper
            <div className="animate-scale-in">
              {/* New disorganized image collage */}
              <div className="absolute inset-0 print:hidden z-[-1]">
                  <Image width={60} height={60} src="/images/eyebrow_piercing.png" alt="Eyebrow Piercing" className="absolute top-0 left-3 transform rotate-40" />
                  <Image width={70} height={70} src="/images/tyler.png" alt="Tyler the Creator" className="absolute top-10 -right-5 transform rotate-12" />
                  <Image width={80} height={50} src="/images/bts.jpg" alt="BTS" className="absolute top-[8%] -left-5 transform -rotate-12" />
                  <Image width={60} height={60} src="/images/TMITO_album_cover.png" alt="TMITO Album Cover" className="absolute bottom-44 -right-7 transform rotate-6" />
                  <Image width={50} height={50} src="/images/images.jpg" alt="Wallows Image" className="absolute bottom-0 left-10 transform rotate-12" />
                  <Image width={70} height={70} src="/images/wallow.jpg" alt="Wallows" className="absolute bottom-2 right-12 transform -rotate-6" />
                  <Image width={55} height={40} src="/images/kuromibake.png" alt="Kuromi Bake" className="absolute top-5 -left-0 transform -rotate-20" />
                  {/* <Image width={65} height={50} src="/images/bike.png" alt="Bike" className="absolute bottom-1/2 -left-12 transform -rotate-90" /> */}
                  {/* <Image width={75} height={60} src="/images/Gang_Beast.png" alt="Gang Beast" className="absolute top-1/3 -right-10 transform rotate-20" /> */}
                  <Image width={80} height={80} src="/images/hellokitty.png" alt="Hello Kitty" className="absolute -bottom-5 -right-5 transform " />
                  <Image width={60} height={60} src="/images/MinecraftIcon.png" alt="Minecraft Icon" className="absolute bottom-20 -left-10 transform rotate-15" />
                  <Image width={45} height={45} src="/images/moon.png" alt="Moon" className="absolute bottom-48 -left-6 transform -rotate-35" />
                  <Image width={30} height={30} src="/images/netflix.png" alt="Netflix" className="absolute top-35 right-5 transform rotate-8" />
                  <Image width={100} height={100} src="/images/avatarroblox.png" alt="Roblox Avatar" className="absolute top-5 -left-15 transform -rotate-5" />
                  <Image width={70} height={35} src="/images/roblox.png" alt="Roblox Logo" className="absolute top-2 right-1/4 transform rotate-30" />
              </div>


              <Image width={250} height={150} src="/images/girlfriend.jpg" alt="Cute Girlfriend" className="mx-auto mb-5 rounded-xl print:hidden" />
              
              <div className="italic z-10 font-caveat text-left mb-6 p-4 rounded-3xl border-5 border-pink-400 outline-black outline-2 outline-dashed print:border-none print:outline-none print:p-0 bg-[#f6e4ff] relative">
                <p className="text-[#ff3aa6] font-bold text-4xl mb-4">Dear Mi Amor,</p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">You are the best person I have ever met. You have brought so much joy into my life, and nothing can replace you in my heart. You are someone who I can talk to all the time and cherish every moment with. Life would have been so boring and lonely without you.</p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">My favorite thing is our own playful teasing and our love battles. Remember when you used to tell me your voice sounded weird? I am in LOVE with your voice, and I do not care how anybody thinks about you but it is so attractive as the sounds of the piano keys. </p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">I cannot forget the moment I could not sleep for the entire night, but I wouldd be able to text you for the entire night. I love that you are always available to me. Fast forward, it hits me hard when you told me you sacrificed your sleep schedule to talk to me.</p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">It feels like I am living in a utopia since we have started dating. I love you not only for who you are, but for who I am with you. You have made me a better person and have always believed in me and supporting me.</p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">There is going to be challenges in life, but that is okay. I wish the best for the both of us to support ourselves, achieve the goals we needed, and fulfill ourselves to grow together. I genuinely want us to improve ourselves, and support our hobbies and career. Remember, I want you to know that my love for you is completely unconditional. I love the person you are right now in this moment, and when I see you working hard towards a personal goal, it just makes me admire your strength even more. You are so powerful and self-sufficient, you inspire me and I will always be your BIGGEST FAN. Guess I am a cheerleader for you in your life👅👅</p>
                <p className="text-lg print:text-sm leading-relaxed mb-4">Also, I have made a Spotify Playlist, curated and hand-picked just for you.</p>
                <p className="text-xl print:text-md leading-relaxed font-bold">Always yours, Dollar</p>
              </div>

              <a 
                href="https://open.spotify.com/playlist/2l1dw9HJK0WuuHeGUcXZIh?si=76a6f68131d64e21"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center bg-zinc-100 p-3 rounded-2xl transition-transform hover:scale-105 border-2 border-dashed border-zinc-300 print:hidden"
              >
                <Image 
                  width={56} 
                  height={56} 
                  src="/images/cat.jpg"
                  alt="Spotify Playlist Cover" 
                  className="rounded-lg mr-4"
                />
                <div className="text-left">
                  <p className="font-bold text-zinc-800 text-lg">Press Play When You Miss Me</p>
                  <p className="text-sm text-[#ff3aa6] font-caveat">Click to listen on Spotify</p>
                </div>
              </a>

              <div className="text-center mt-6 print:hidden">
                <button onClick={handleSaveAsPDF} className="rounded-full px-6 py-2 bg-[#8c6df6] text-white font-bold transition-transform hover:scale-105">
                  Save as PDF
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
