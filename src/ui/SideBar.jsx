'use client'
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const SideBar = () => {

  const router = useRouter();

  console.log("TEST")
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
    <div className={`z-10 bg-gray-500 ${bgOpacity} duration-500 w-24 h-full md:flex hidden flex-1 flex-col justify-start items-center relative text-white`}>

      <div className="m-4 flex flex-col justify-center items-center">
        <div className="bg-gray-400 bg-opacity-50 h-20 w-20 rounded-lg text-center content-center group">
          <span className="text-6xl font-bold text-center duration-300 font-poet">L</span>
          <span className="text-5xl font-bold text-center duration-300 font-poet">S</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-1">

        <div
          className="bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group duration-300"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("/chat")}
        >
          <i className="bi bi-chat text-3xl group-hover:text-5xl duration-300" />
          <span className="absolute text-xl top-5 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-12">Chat</span>
        </div>

        <div
          className={`bg-gray-400 bg-opacity-30 h-20 w-20 rounded-lg content-center text-center relative group my-4 duration-300 ${getTranslateClass(1)}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("/blog")}
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
  );
}

export default SideBar;
