'use client'
import { useState, useRef, useEffect } from "react";
import MenuButtons from "./lib/MenuButtons";


export default function Home() {

  const [bgOpacity, setBgOpacity] = useState('bg-opacity-40');
  const scrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollDivRef.current) {
        const scrollTop = scrollDivRef.current.scrollTop;
        console.log(scrollTop)
        setBgOpacity(scrollTop > 400 ? 'bg-opacity-100' : 'bg-opacity-40');
      }
    };

    const scrollDiv = scrollDivRef.current;
    if (scrollDiv) {
      scrollDiv.addEventListener('scroll', handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scrollDiv) {
        scrollDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <div className="text-white min-h-screen w-full flex flex-row justify-start items-start relative">
        
        <div className="w-full h-screen absolute top-0">
          <video muted autoPlay loop className="w-full h-full object-cover">
            <source src="/video.webm" type="video/webm" />
          </video>
        </div>

        <div className={`z-10 bg-gray-500 ${bgOpacity} duration-300 w-40 min-h-screen flex flex-col justify-start items-center`}>

          <div className="m-4 flex flex-col justify-center items-center">
            <div className="bg-gray-400 bg-opacity-50 h-20 w-20 rounded-lg text-center content-center group">
              <span className="text-6xl font-bold text-center duration-300 font-poet">L</span>
              <span className="text-5xl font-bold text-center duration-300 font-poet">S</span>
            </div>
          </div>

          <div className="m-4 my-12 flex flex-col justify-center items-center flex-1 ">

            <div className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group hover:mb-4 duration-300">
              <i className="bi bi-chat text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Chat</span>
            </div>
            
            <div className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group hover:mb-8 my-4 duration-300">
              <i className="bi bi-book text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Blog</span>
            </div>
            
            <div className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group duration-300">
              <i className="bi bi-envelope text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Contact</span>
            </div>


          </div>

          <div className="m-4 flex flex-col justify-center items-center space-y-4">
            <div className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-full text-center content-center duration-300 ease-in-out hover:mb-4 group relative">
              <i className="bi bi-person-circle text-3xl group-hover:text-5xl duration-300"/> 
              <span className="group-hover:text-white absolute text-xl top-5 left-0 right-0 bottom-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Log-In</span>
            </div>
            <div className="bg-red-700 bg-opacity-30 h-20 w-20 text-center content-center rounded-full transition-all duration-300 ease-in-out group">
              <i className="bi bi-power text-4xl text-black group-hover:text-white duration-300"/>
            </div>
          </div>

        </div>
        
        <div className=" flex-row h-screen overflow-y-scroll z-10 " ref={scrollDivRef}>

          <div className="space-x-4 m-8 text-white hover:text-gray-400 hidden">
            <i className="bi bi-arrow-left text-2xl" />
            <span className="align-text-bottom">Page précédente</span>
          </div>

          <div className="space-y-8 h-screen p-8 content-center relative">
            <h1 className="text-7xl font-bold top-0 font-poet text-slate-100">Welcome on my page</h1>
            <p className="text-3xl font-poet text-slate-100">Welcome on my portfolio page where I show off my skills, apps and games..</p>
            <div className="flex flex-col justify-end items-center">
              <span className="p-4 bg-gray-800 bg-opacity-50 text-gray-200 text-xl">Click to see more about myself</span>
            </div>
            <a href="https://www.youtube.com/watch?v=VAwPiYX6FJs" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 p-4 text-white opacity-50 hover:opacity-100">Video made by Flurdeh</a>
          </div>

          <div className="space-y-8 h-screen p-8 bg-gray-600 z-20 w-full">
            <h1 className="text-4xl font-bold text-center my-14">About me</h1>
            <p className="pt-8 pb-12">Tombé dans la marmite des jeux vidéos depuis mon plus jeune âge, je me suis naturellement dirigé dans le développement informatique. Ayant pour ambition de développer des applications pour aider la vie des utilisateurs, j'ai aussi l'envie de développer mes propres jeux vidéos, comme les studios indépendants. </p>
            <div className="flex flex-col items-center justify-start">
                <h3 className="text-4xl font-bold border-b-2 pb-3 w-full">Mes skills</h3>
              <div className="bg-gray-700 p-8 flex flex-row justify-around items-center flex-wrap my-12 w-full">
                <img src="/icons8-html-144.png" className="w-24"/>
                <img src="/icons8-css-144.png" className="w-24"/>
                <img src="/icons8-js-144.png" className="w-24"/>
                <img src="/icons8-php-128.png" className="w-24"/>
                <img src="/icons8-mysql-144.png" className="w-24"/>
                <img src="/icons8-mongodb-144.png" className="w-24"/>
                <img src="/icons8-nextjs-144.png" className="w-24"/>
                <img src="/icons8-react-200.png" className="w-24"/>
                <img src="/icons8-symfony-144.png" className="w-24"/>
              </div>
            </div>
          </div>

          <div className="z-10 flex flex-col justify-start items-center bg-gray-600"> 
            <h4 className="text-4xl text-center my-14 font-bold">Mes articles de blog</h4>
            <span className="text-center">N'hésitez pas à lire ce que je met en ligne de temps en temps. <br/> Voici mes derniers articles</span>
            <div className="w-full grid lg:grid-rows-2 lg:grid-cols-3 grid-rows gap-4 place-items-center p-8">

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div class="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 class="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div class="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" class="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div class="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 class="font-medium">Article Blog #35</h3>
                    <div class="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div class="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div class="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 class="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div class="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" class="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div class="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 class="font-medium">Article Blog #35</h3>
                    <div class="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div class="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div class="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 class="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div class="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" class="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div class="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 class="font-medium">Article Blog #35</h3>
                    <div class="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div class="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div class="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 class="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div class="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" class="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div class="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 class="font-medium">Article Blog #35</h3>
                    <div class="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div class="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div class="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 class="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div class="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" class="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div class="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 class="font-medium">Article Blog #35</h3>
                    <div class="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div class="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>
                
            </div>

            <span className="bg-gray-700 px-4 py-2">Voir plus</span>
          </div>

          <div className="z-10 h-max flex flex-col justify-start items-center bg-gray-600 pt-16">
            <h5 className="text-4xl font-bold">Mes coordonnées</h5>
            
            <div className="flex flex-row items-center justify-evenly bg-gray-700 rounded-xl m-8 p-8 space-x-8">
              <img src="/pic_final.jpg" className="w-fit h-64 rounded-xl"/>
              <div className="bg-gray-600 flex flex-col justify-start items-start p-4 rounded-xl space-y-2">
                <div className="space-x-2">
                  <i className="bi bi-github text-3xl"/>
                  <span className="text-2xl">Github</span>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-linkedin text-3xl"/>
                  <span className="text-2xl">LinkedIn</span>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-discord text-3xl"/>
                  <span className="text-2xl">lashoune</span>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-envelope text-3xl"/>
                  <span className="text-2xl">lassal.shun@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          
        </div>

      </div>
    </main>
  );
}
