'use client'
import ReturnPageButton from "@/ui/ReturnPageButton";
import SideBar from "@/ui/SideBar.jsx";

export default function Login() {

  return (
    <main className="min-h-screen flex flex-col justify-start items-center relative">

      <div className="absolute inset-0 w-full h-full">
        <img className="w-full h-full object-cover" src="/Login.png" alt="" srcSet="" />
      </div>

      <div className="text-white h-screen h-[calc(100dvh)] w-full flex flex-row justify-start items-start relative">
        <SideBar />

        <div className="w-full overflow-y-scroll">

          <ReturnPageButton />

          <div className="h-full flex flex-col justify-center items-center md:pr-24">

            <div className="mt-36 bg-gray-500 bg-opacity-40 py-8 px-16 rounded-lg space-y-4 w-fit md:w-96">

              <h1 className="text-center text-3xl font-bold">Login</h1>

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="font-medium">Email:</label>
                <input className="h-8 bg-white bg-opacity-40 p-1 rounded" type="email" name="email" id="email" />
              </div>
              
              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="font-medium">Password:</label>
                <input className="h-8 bg-white bg-opacity-40 p-1 rounded" type="password" name="password" id="password" />
              </div>

              <div>
                <span className="hover:border-b">No account? Register.</span>
              </div>

              <div className="p-2 bg-green-500 bg-opacity-40 text-center font-medium rounded">
                <span>Log-In</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}