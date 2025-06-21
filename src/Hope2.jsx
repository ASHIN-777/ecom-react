import image from '../public/images/pot Flower2.avif'
import image2 from '../public/images/potflower3.avif'
import image3 from '../public/images/pot flower.avif'
import image4 from'../public/images/pot flower4.avif'
import image5 from'../public/images/pot flower5.avif'
import image6 from'../public/images/pot flower6.avif'
export default function Hope2() {
    return (
        <>
        <div className='flex font-bold justify-center text-5xl py-5'>
            <h>Shop Now</h>
        </div>
            <div className='grid grid-cols-3 justify-items-center justify-center'>
                <div>
                    <img className='w-96' src={image} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p><strike>$ 75.00</strike></p>
                        <p>$67.25</p>
                    </div>
                </div>
                <div>
                    <img className='w-96' src={image2} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p >
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p><strike>$ 80.96</strike></p>
                        <p>$67.25</p>
                    </div>
                </div>
                <div>
                    <img className='w-96' src={image3} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p><strike>$ 80.00</strike> </p>
                        <p>$67.25</p>
                    </div>
                </div>
                <div>
                    <img className='w-96' src={image4} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p>$70.00</p>
                    </div>
                </div>
                <div>
                    <img className='w-96' src={image5} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p>$70.00</p>
                    </div>
                </div>
                <div>
                    <img className='w-96' src={image6} alt="" />
                    <div className='py-2'>
                        <p>I'M a Product</p>
                    </div>
                    <div className='flex gap-1 py-1'>
                        <p>$70.00</p>
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <div className='flex justify-center py-2 border-y-1  border-red-400 w-24 m-auto border-x-1'>
                    <p>Shop All  </p>
                </div>
            </div>
        </>
    )
}
