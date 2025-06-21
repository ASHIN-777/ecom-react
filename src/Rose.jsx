export default function Rose() {
    return (
        <>
            <div className='bg-[url(public/images/roseFlower.avif)] h-195 object-cover flex justify-center flex-col relative'>

                <h2 className="flex gap-40 items-center justify-center font-mono font-bold  text-white text-5xl z-9">
                    10% Off Selected Flowers For Valentine's Day
                </h2>
                <p className="flex gap-52 justify-center text-1xl font-light font-mono text-center text-white  pt-10 z-9">
                    I'm a paragraph.click here to add your own text and edit<br />me.Its easy.just click  "Edit Text"  or double click me to add<br />Your own content and make changes to the font.
                </p>
                <div className='p-10 z-9'>
                    <div className='flex justify-center py-2 border-y-1  border-white  w-24 m-auto border-x-1'>
                        <p className="text-white">Order Now </p>
                    </div>
                </div>
                <div id="overlay">
                </div>
            </div>

        </>

    )
}