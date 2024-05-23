'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const colorGradientArray = [
  'from-slate-700',
  'via-slate-500',
  'to-slate-400',
  'from-gray-700',
  'via-gray-500',
  'to-gray-400',
  'from-zinc-700',
  'via-zinc-500',
  'to-zinc-400',
  'from-neutral-700',
  'via-neutral-500',
  'to-neutral-400',
  'from-stone-700',
  'via-stone-500',
  'to-stone-400',
  'from-red-700',
  'via-red-500',
  'to-red-400',
  'from-orange-700',
  'via-orange-500',
  'to-orange-400',
  'from-amber-700',
  'via-amber-500',
  'to-amber-400',
  'from-yellow-700',
  'via-yellow-500',
  'to-yellow-400',
  'from-lime-700',
  'via-lime-500',
  'to-lime-400',
  'from-green-700',
  'via-green-500',
  'to-green-400',
  'from-emerald-700',
  'via-emerald-500',
  'to-emerald-400',
  'from-teal-700',
  'via-teal-500',
  'to-teal-400',
  'from-cyan-700',
  'via-cyan-500',
  'to-cyan-400',
  'from-sky-700',
  'via-sky-500',
  'to-sky-400',
  'from-blue-700',
  'via-blue-500',
  'to-blue-400',
  'from-indigo-700',
  'via-indigo-500',
  'to-indigo-400',
  'from-violet-700',
  'via-violet-500',
  'to-violet-400',
  'from-purple-700',
  'via-purple-500',
  'to-purple-400',
  'from-fuchsia-700',
  'via-fuchsia-500',
  'to-fuchsia-400',
  'from-pink-700',
  'via-pink-500',
  'to-pink-400',
  'from-rose-700',
  'via-rose-500',
  'to-rose-400'
  ]

const colorTextArray = [
  'text-slate-900',
  'text-gray-900',
  'text-zinc-900',
  'text-neutral-900',
  'text-stone-900',
  'text-red-900',
  'text-orange-900',
  'text-amber-900',
  'text-yellow-900',
  'text-lime-900',
  'text-green-900',
  'text-emerald-900',
  'text-teal-900',
  'text-cyan-900',
  'text-sky-900',
  'text-blue-900',
  'text-indigo-900',
  'text-purple-900',
  'text-fuchsia-900',
  'text-pink-900',
  'text-rose-900'
  ]
  
  
  export default function MenuButtons({title, icon, color, link})
  {
    
  const router = useRouter()
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active); // Inverse l'état actif lors du clic
    console.log(active);
    setTimeout(() => {
      router.push('/'+link)
    }, 500);
  };

  return (<div onClick={handleClick} className={`flex flex-col justify-start items-center text-${color}-900 transition-all ease-in-out duration-500 ${active ? "-translate-y-52 opacity-0" : ""}`}>
  <div className={`hover:drop-shadow-md h-40 w-40 rounded-xl shadow-lg border flex flex-col justify-center items-center bg-gradient-to-tl from-${color}-700 via-${color}-500 to-${color}-400 `}>
    <i className={`icon ${icon} text-6xl`} ></i>
  </div>
  <h3 className={`pt-4 text-lg font-bold`}>{title}</h3>
</div>)
}