import Button from '../Button'
export default function Promotion(){
    return(
        <div className=" bg-fixed bg-center bg-cover bg-membershipBgDesktop " style={{backgroundAttachment: 'scroll' }}>
            <div className="h-screen flex flex-col justify-end " style={{background: 'rgba(0, 0, 0, 0.69)' }}>
                <div className=' w-10/12 mb-20 2xl:mb-[10%] mx-auto'>
                    <p className='text-[#ff9700] text-lg lg:text-3xl 2xl:text-4xl font-mavin '>Promotion</p>
                    <h1 className='text-white text-3xl lg:text-7xl my-6 font-mavin overflow-hidden'>Explore how it <br className='hidden lg:block' /> really feels to Excel!</h1>
                    <p className='text-white font-light font-["openSans"] text-xl mb-7'>We are a cutting Edge Co-Creation Hub for sports, Research <br className='hidden lg:block' /> passionate about enhancing learning with sports</p>
                    <Button text={'Get your Membership'} />
                </div>
            </div>
        </div>
    )   
}