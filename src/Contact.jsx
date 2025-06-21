import image from '../public/images/lily.avif'
export default function Contact() {
    return (
        <>
            <div className="flex justify-center pt-10 text-shadow-black font-serif text-red-300 text-4xl ">
                <h1>Contact Us</h1>
            </div>
            <div className='flex p-20 justify-center items-center'>
                <div>
                    <h1 className='text-3xl font-light pb-20'>We're Here for Any Question</h1>
                    <div className='flex gap-10'>
                        <form action="">
                            <p className='pb-2'>First Name*</p>
                            <input type="text" className='border-0 border-b-2 bg-transparent' />
                        </form>
                        <form action="">
                            <p className='pb-2'>Second Name*</p>
                            <input type="text" className='border-0 border-b-2 bg-transparent' />
                        </form>
                    </div>
                    <div className='flex gap-10 pt-20'>
                        <form action="">
                            <p className='pb-2'>Email*</p>
                            <input type="text" className='border-0 border-b-2 bg-transparent' />
                        </form>
                        <form action="">
                            <p className='pb-2'>Subject</p>
                            <input type="text" className='border-0 border-b-2 bg-transparent' />
                        </form>
                    </div>
                    <div className='p-10'>
                <div className='flex justify-center py-2 border-y-1  border-red-400 w-24 m-auto border-x-1'>
                    <p>Submit</p>
                </div>
            </div>
                </div>
                <img className='w-170 pl-30' src={image} alt="" />
            </div>
        </>
    )
}