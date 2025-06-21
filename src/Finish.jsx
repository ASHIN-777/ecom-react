
import image from '../public/images/flowerh.avif'
export default function Finish() {
  return (
    <>

      <div className='pb-20'>
        <h1 className='flex justify-center py-10 text-shadow-black font-serif text-red-300 text-4xl'> ABOUT US</h1>
        <div className='flex px-30 pt-10 justify-center'>
          <div className='flex flex-col gap-5 justify-center'>
            <p className='text-2xl font-light'>Delivering Fresh Flowers Since 2035</p>
            <p className=''> I'm a paragraph. Click here to add your own text and edit<br />me. It's easy.Just click"Edit Text" or double click me to add<br /> your own content and make changes to the font. </p>
            <p>This is a great space to write a long text about your company<br /> and your services.You can use this space to go into a litle<br />more detail about your company.Tsalk about your team and <br />what services tou provide.</p>
            <div className='pt-5 flex start'>
              <span className='flex justify-center  py-2 border-y-1 border-red-300 w-24 border-x-1'>Contact Us</span>
            </div>
          </div>
          <img className='w-170 pl-30' src={image} alt="" />
        </div>
      </div>
    </>
  )
}   