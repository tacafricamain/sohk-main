import Button from '../Button'
export default function HeroSection(){
    return(
        <div className=" bg-fixed bg-center bg-cover bg-mobileBG lg:bg-desktopBG">
            <div className="h-screen flex flex-col justify-end " style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                <div className=' w-10/12 mb-20 mx-auto'>
                    <p className='text-[#ff9700] text-3xl font-mavin '>We Are The School Of Hard Knocks</p>
                    <h1 className='text-white text-7xl my-6 font-mavin  overflow-hidden'>Enhancing Learning <br /> With Sports!</h1>
                    <p className='text-white font-light font-["openSans"] text-xl mb-7'>We are a cutting Edge Co-Creation Hub for sports, Research <br className='hidden lg:block' /> passionate about enhancing learning with sports</p>
                    <Button text={'Discover More'} />
                </div>
            </div>
        </div>
    )   
}