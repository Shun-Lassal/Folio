import SideBar from "@/ui/SideBar";


export default function Chat() {
  

  return (

    <main className="min-h-screen flex flex-col justify-start items-center relative">

      <div className="absolute inset-0 w-full h-full">
        <img className="w-full h-full object-cover" src="/chat.png" alt="" srcSet="" />
      </div>

      <div className="text-white h-screen h-[calc(100dvh)] w-full flex flex-row justify-start items-start relative">

        <SideBar/>
        <div className="w-full h-full flex flex-col justify-start items-start pr-24 p-8">

          <div className="flex-grow space-y-4 flex flex-col justify-start items-start h-full overflow-y-scroll">

            <div className="p-4 bg-gray-400 bg-opacity-60 rounded-2xl w-fit flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-lg font-bold">Jimmy:</span>
                <span className="font-light">31 mai 2024 - 17:53</span>
              </div>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur dignissimos similique ducimus officia possimus deserunt sed error sint repellat nemo qui, laborum distinctio vel ratione, vitae, molestias dolorem rerum?</span>
            </div>

            <div className="p-4 bg-blue-400 bg-opacity-60 rounded-2xl w-fit flex flex-col items-start justify-start space-y-2 self-end">
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-lg font-bold">Moi:</span>
                <span className="font-light">31 mai 2024 - 17:53</span>
              </div>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>

            <div className="p-4 bg-blue-400 bg-opacity-60 rounded-2xl w-fit flex flex-col items-start justify-start space-y-2 self-end">
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-lg font-bold">Moi:</span>
                <span className="font-light">31 mai 2024 - 17:53</span>
              </div>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem qui, similique molestias quasi consequatur sequi natus nostrum aut ipsam nulla corrupti quidem commodi modi. Eos est sunt asperiores eligendi?</span>
            </div>

            <div className="p-4 bg-gray-400 bg-opacity-60 rounded-2xl w-fit flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row justify-between items-center w-full">
                <span className="text-lg font-bold">Jimmy:</span>
                <span className="font-light">31 mai 2024 - 17:53</span>
              </div>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            
            <div className="p-4 bg-gray-400 bg-opacity-60 rounded-2xl w-fit flex flex-col items-start justify-start space-y-2">
              <div className="flex flex-row justify-between items-center w-full space-x-4">
                <span className="text-lg font-bold">Jimmy:</span>
                <span className="font-light">31 mai 2024 - 17:53</span>
              </div>
              <span>Ok</span>
            </div>
            
          </div>

          <div className="snap-end p-2 bg-gray-400 rounded-full border border-gray-500 w-full bg-opacity-60 flex flex-row items-start justify-center space-x-2">
            <input type="text" className=" w-full h-full bg-gray-400 bg-opacity-0 rounded-full px-2 outline-none" name="msg_input" id="msg_input" />
            <button className="p-2 rounded-full bg-blue-400 w-12 h-12 flex-row items-start justify-center"><i className="text-3xl bi bi-send"/></button>
          </div>

        </div> 

      </div>
    </main>
  )
}