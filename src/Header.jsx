// export default function Header ()

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function Header() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//   <div>
//     <h1 className=' border-gray-900 text-shadow-emerald-200'>
//       hai
//     </h1>
//     <ul className='flex gap-36 justify-between'>
//       <li>home</li>
//       <li>contact</li>
//     </ul>
//   </div>
//     </>
//   )
// }
export default function Header() {

    return (
        <>
            <div className="grid grid-cols-6">
                <div className="col-span-4 col-start-2 place-items-center text-white bg-red-900 py-2">
                    <h2>
                        Valentine's Day Promotional Shop now 💕❤️
                    </h2>
                </div>
                <div className="flex justify-around col-span-4 col-start-2 py-3">
                    <ul><h1 className="text-2xl text-white pb-1 font-serif  bg-red-400 px-4 py-1 rounded-md">c</h1> </ul>
                    <ul className="flex ">
                       
                    </ul>
                    <ul className="flex justify-center gap-10">
                    <a href="/"><li>Home</li></a>
                       <a href="/Shop "><li>Shop</li></a> 
                        <a href="/About Us"><li>About Us</li></a>
                        <a href="/Contact Us"><li>Contact Us</li></a>
                    </ul>
                    <ul className="flex gap-10 ">
                        <a href="/Login"><li>Login</li></a>
                        <li>Cart(0)</li>
                    </ul>
                </div>

            </div>

        </>
    )
}


