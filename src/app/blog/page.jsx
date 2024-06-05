import SideBar from "@/ui/SideBar";

export default function Blog() {

  return (
    <main className="min-h-screen flex flex-col justify-start items-center relative">

      <div className="absolute inset-0 w-full h-full">
        <img className="w-full h-full object-cover" src="/blog.png" alt="" srcSet="" />
      </div>

      <div className="text-white h-screen h-[calc(100dvh)] w-full flex flex-row justify-start items-start relative">

        <SideBar/>
        <div className="w-full h-full flex flex-col justify-start items-start lg:pr-24 p-8 overflow-y-scroll">

          <div className="bg-gray-500 bg-opacity-40 p-8 w-full space-y-8 rounded-md">
            <h1 className="text-5xl">Blog</h1>

            <hr className="w-full border-b"/>

            <div className="flex flex-col sm:flex-row justify-between items-center w-full flex-wrap space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row md:justify-start items-center w-fit space-x-2 flex-wrap justify-center space-y-2 sm:space-y-0">
                <span className="p-2 rounded-full border hover:bg-gray-300 hover:bg-opacity-40 whitespace-nowrap">🕹 Game Dev</span>
                <span className="p-2 rounded-full border hover:bg-gray-300 hover:bg-opacity-40 whitespace-nowrap">💻 Web Dev</span>
                <span className="p-2 rounded-full border hover:bg-gray-300 hover:bg-opacity-40 whitespace-nowrap">😪 Life</span>
                <span className="p-2 rounded-full border hover:bg-gray-300 hover:bg-opacity-40 whitespace-nowrap">🥔 Other</span>
              </div>
              <div className="flex flex-row w-full sm:w-fit sm:justify-start items-center bg-gray-300 bg-opacity-60 p-2 space-x-2 justify-self-end self-end place-self-end">
                <i className="bi bi-pen border-r-2 pr-2"/>
                <span className="">Write new article</span>
              </div>
            </div>

            <hr className="w-full border-b"/>

            <div className="grid grid-cols-4 gap-4">

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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
                
                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

                <div className=" group relative h-52 bg-gray-700 flex flex-col justify-center items-start shadow-sm rounded-md border border-slate-600">
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

          </div>

        </div>

      </div>
    </main>
  )
}