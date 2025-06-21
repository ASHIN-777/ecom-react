import image from '../public/images/color.jpg'
import image2 from '../public/images/color2.jpg'
import image3 from '../public/images/color3.jpg'
import image4 from '../public/images/color4.jpg'

export default function Rose2() {
    return (
        <>
        <div className='flex justify-center text-5xl py-25 font-serif'>
        <p> ASHIN Flowers Shop </p>
        </div>
            <div className='flex gap-10 justify-center py-0.5'>
                <div>
                    <img className='w-96' src={image3} alt="" />
                </div>
                <div>
                    <img className='w-96' src={image2} alt="" />
                </div>
                <div>
                    <img className='w-96' src={image} alt="" />
                </div>
                <div>
                    <img className='w-96' src={image4} alt="" />
                </div>


            </div>
            <div className='p-10'>
                            <div className='flex justify-center py-2 border-y-1  border-red-400 w-24 m-auto border-x-1'>
                <p> Follow Us </p>
            </div>
</div>
        </>
    )
}
