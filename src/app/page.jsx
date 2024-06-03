'use client'
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const { pathname } = router;

  // CODE HOVER SIDEBAR ICONS
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getTranslateClass = (index) => {
    if (hoveredIndex === null) return '';
    return hoveredIndex <= index - 1 ? 'translate-y-4' : '';
  };
  // ENDCODE HOVER SIDEBAR ICONS

  // CODE SIDEBAR OPACITY
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
  // ENDCODE SIDEBAR OPACITY


  return (
    <main className="min-h-screen flex flex-col justify-start items-center">

      <div className="w-full h-screen absolute hidden md:block">
        <video muted autoPlay loop className="w-full h-full object-cover">
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="text-white min-h-screen w-full flex flex-row justify-start items-start relative">
        
        <div className={`z-10 bg-gray-500 ${bgOpacity} duration-500 w-24 min-h-screen md:flex hidden flex-1 flex-col justify-start items-center relative`}>

          <div className="m-4 flex flex-col justify-center items-center">
            <div className="bg-gray-400 bg-opacity-50 h-20 w-20 rounded-lg text-center content-center group">
              <span className="text-6xl font-bold text-center duration-300 font-poet">L</span>
              <span className="text-5xl font-bold text-center duration-300 font-poet">S</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center flex-1 ">

            <div
              className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group duration-300"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-chat text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Chat</span>
            </div>
            
            <div
              className={`bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group my-4 duration-300 ${getTranslateClass(1)}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-book text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Blog</span>
            </div>
            
            <div
              className={`bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group duration-300 ${getTranslateClass(2)}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-rocket text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Games</span>
            </div>

            <div
              className={`bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group mt-4 duration-300 ${getTranslateClass(3)}`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-envelope text-3xl group-hover:text-5xl duration-300" />
              <span className="absolute text-xl top-5 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Contact</span>
            </div>

          </div>

          <div className="m-4 flex flex-col justify-center items-center space-y-4">
            <div className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-full text-center content-center duration-300 ease-in-out hover:-translate-y-4 group relative" onClick={() => router.push("/login")}>
              <i className="bi bi-person-circle text-3xl group-hover:text-5xl duration-300"/> 
              <span className="group-hover:text-white absolute text-xl top-5 left-0 right-0 bottom-0 translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Log-In</span>
            </div>
            <div className="bg-red-700 bg-opacity-30 h-20 w-20 text-center content-center rounded-full transition-all duration-300 ease-in-out group">
              <i className="bi bi-power text-4xl text-black group-hover:text-white duration-300"/>
            </div>
          </div>

        </div>
        
        <div className="h-screen h-[calc(100dvh)] w-full overflow-y-scroll z-10" ref={scrollDivRef} >

          <div className="space-x-4 m-8 text-white hover:text-gray-400 hidden">
            <i className="bi bi-arrow-left text-2xl" />
            <span className="align-text-bottom">Page précédente</span>
          </div>

          <div className="space-y-8 h-full p-8 relative flex flex-col justify-center items-start md:mr-24">

            <div className="flex flex-row justify-center items-center my-4 sm:hidden space-x-2">
              <i className="bi bi-exclamation-circle text-3xl"/>
              <span className="text-xl">On mobile, video may not load</span>
            </div>

            <h1 className="md:text-7xl text-5xl font-bold top-0 font-poet text-slate-100 opacity-80">Welcome on my page</h1>
            <p className="text-xl md:text-3xl font-poet text-slate-100 opacity-70">Traveling alone like Sam to make my stuff</p>
            <div className="flex flex-col items-center self-center w-full absolute bottom-0">
              <span className="opacity-50">SCROLL DOWN</span>
              <i className="bi bi-chevron-down text-5xl opacity-50" />
            </div>
            <a href="https://www.youtube.com/watch?v=VAwPiYX6FJs" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 text-white opacity-50 hover:opacity-100">Video made by Flurdeh</a>
          </div>

          <div className="space-y-8 p-8 bg-gray-600 z-20 w-full md:pr-24 py-12 lg:h-screen">
            <h1 className="text-4xl font-bold text-center border-b-2 pb-3 content-center w-fit mx-auto">About me</h1>
            <p className="py-8 text-center">Having been immersed in video games since a young age, I naturally gravitated towards software development. With the ambition of creating applications to improve users' lives, I also aspire to develop my own video games, like independent studios.</p>
            <div className="flex flex-col items-center justify-start">
              <h3 className="text-4xl font-bold border-b-2 pb-3 mb-8">My Skills</h3>
            
            <div className="grid grid-rows lg:grid-cols-3 gap-8">

              <div className="flex flex-col justify-start items-center p-4 bg-gray-700 rounded-xl space-y-4 px-8 hover:bg-gray-400 duration-150">
                <span className="text-2xl border-b w-full text-center pb-4">Front-End</span>
                <div className="grid grid-cols-3 gap-4 place-items-center"> 

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-html-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">HTML</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-css-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">CSS</span>
                  </div>
                  
                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-js-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Javascript</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-vue-js-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Vue.js</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                  <img src="/icons8-react-200.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">React</span>
                  </div>
                  
                </div>
              </div>

              <div className="flex flex-col justify-start items-center p-4 bg-gray-700 rounded-xl space-y-4 px-8 hover:bg-gray-400 duration-150">
                <span className="text-2xl border-b w-full text-center pb-4">Back-End</span>
                <div className="grid grid-cols-3 gap-4">

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-php-128.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Php 7</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-nodejs-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Node.js</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-symfony-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Symfony</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-nextjs-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Next.js</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-mysql-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">MySql</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-mongodb-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">MongoDB</span>
                  </div>
                  
                </div>
              </div>

              <div className="flex flex-col justify-start items-center p-4 bg-gray-700 rounded-xl space-y-4 px-8 hover:bg-gray-400 duration-150">
                <span className="text-2xl border-b w-full text-center pb-4">Game Dev</span>
                <div className="grid grid-cols-3 gap-4">

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/Godot_icon.svg" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Godot</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-python-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50 whitespace-nowrap">Python 3</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-blender-144.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Blender</span>
                  </div>

                  <div className="relative group flex flex-col justify-center items-center">
                    <img src="/icons8-aseprite-128.png" className="w-24"/>
                    <span className="absolute text-center self-center opacity-0 group-hover:opacity-100 mx-auto w-fit px-4 py-2 bg-gray-700 group-hover:translate-y-10 duration-200 rounded-xl bg-opacity-50">Aseprite</span>
                  </div>

                </div>
              </div>

            </div>

            </div>
          </div>

          <div className="z-10 flex flex-col lg:h-screen justify-start items-center bg-gray-700 md:pr-24 p-8"> 
            <h4 className="text-4xl text-center my-14 font-bold border-b-2 pb-3 content-center w-fit mx-auto">My Articles</h4>
            <span className="text-center">Take a look at what I write in my spare time<br/>Here are my last articles</span>
            <div className="w-full grid lg:grid-cols-3 gap-4 place-items-center mt-12">

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div className="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 className="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div className="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" className="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div className="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 className="font-medium">Article Blog #35</h3>
                    <div className="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div className="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div className="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 className="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div className="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" className="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div className="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 className="font-medium">Article Blog #35</h3>
                    <div className="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div className="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>

                <div className="w-80 group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
                  <div className="z-20 h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center opacity-100 duration-300 group-hover:opacity-0">
                    <h3 className="font-light text-4xl">Article Blog #35</h3>
                  </div>
                  <div className="z-10 bg-gray-700 absolute top-0 right-0 left-0 bottom-0 flex flex-row rounded-md">
                    <img src="https://picsum.photos/300/200" alt="" className="object-fill h-full w-full rounded-md"/>
                  </div>
                  <div className="pointer-events-none z-10 flex flex-col justify-around items-start rounded-md h-36 bg-gray-500 py-2 absolute bottom-0 left-0 right-0 px-2 space-y-1 transform-gpu translate-y-36 duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0">
                    <h3 className="font-medium">Article Blog #35</h3>
                    <div className="h-full border-b border-t border-b-slate-400 border-t-slate-400 border-opacity-30 overflow-y-auto">
                      <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid amet nulla neque reiciendis, repudiandae, nisi eveniet officia minima suscipit impedit aspernatur.</p>
                    </div>
                    <div className="flex flex-row justify-end items-center space-x-2 font-thin">
                      <span>Brua</span>
                      <span>-</span>
                      <span>22/01/2023</span>
                    </div>
                  </div>
                </div>
                
            </div>

            <span className="bg-gray-700 px-4 py-2 my-auto">Voir plus</span>
          </div>

          <div className="z-10 flex flex-col justify-start items-center bg-gray-600 pt-16 md:pr-24">
            <h5 className="text-4xl font-bold border-b-2 pb-3 content-center w-fit mx-auto">Contact</h5>
            <div className="space-x-2 mt-14 border-b">
              <i className="bi bi-download text-3xl align-bottom"/>
              <a className="text-2xl" href="/Shun-Lassal-CV-Iscod-Final_compressed.pdf">Download my resume</a>

            </div>
            <div className="flex flex-col lg:flex-row items-center justify-evenly bg-gray-700 rounded-xl m-8 p-8 my-16 lg:space-x-8 space-y-4 lg:space-y-0 duration-500">
              <img src="/pic_final.jpg" className="w-80 h-auto lg:w-fit lg:h-64 rounded-xl"/>
              <div className="bg-gray-600 flex flex-col justify-start items-start p-4 rounded-xl space-y-2">
                <div className="space-x-2">
                  <i className="bi bi-person-arms-up text-3xl"/>
                  <span className="text-2xl">Shun LASSAL</span>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-github text-3xl"/>
                  <a href="https://github.com/Shun-Lassal" target="_blank" rel="noopener noreferrer" className="text-2xl">Github</a>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-linkedin text-3xl"/>
                  <a href="https://www.linkedin.com/in/shun-lassal-56a402217/" target="_blank" rel="noopener noreferrer" className="text-2xl">LinkedIn</a>
                </div>
                <div className="space-x-2">
                  <i className="bi bi-envelope text-3xl"/>
                  <span className="text-2xl">lassal.shun@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="bg-gray-700 py-8 flex flex-row justify-evenly items-center md:pr-24">
            
            <div className="flex flex-col justify-around items-start space-y-8">
              <span className="text-4xl font-bold">Ls Portfolio</span>
              <span className="text-3xl font-light">@2024 till beyond</span>
            </div>

            <div className="flex flex-col justify-around items-start space-y-2">
              <span className="text-gray-200">Homepage</span>
              <span className="text-gray-200">Chat</span>
              <span className="text-gray-200">Blog</span>
              <span className="text-gray-200">Log-In</span>
              <span className="text-gray-200">Contact</span>
            </div>

          </div>
        
        </div>


      </div>
    </main>
  );
}
