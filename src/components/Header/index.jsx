import logo from '../../assets/logo.webp'
import img1 from '../../assets/header.webp'
import img6 from '../../assets/log1.webp'
import img2 from '../../assets/log2.webp'
import img3 from '../../assets/log3.webp'
import img4 from '../../assets/log4.webp'
import img5 from '../../assets/log5.webp'

const Header = () => {
    return (
        <>
            <div>
                <div className='bg-primary sm:h-screen text-white'>
                    
                    <div className='sm:flex '  >
                        <div className='sm:w-1/4  '>
                            <img src={logo} className="h-32 w-32 ml-20 object-contain " />
                        </div>

                        <div className="sm:flex w-3/4 justify-center  items-center">
                            <p className="sm:p-5 pr-4">Home</p>
                            <p className="sm:p-5 pr-4">About Us</p>
                            <p className="sm:p-5 pr-4">Blog</p>
                            <p className="sm:p-5 pr-4">Shop</p>
                            <p className="sm:p-5 pr-4">Contact Us</p>
                            <p className="sm:p-3 bg-secondary rounded">Get Started</p>
                        </div>

                    </div>
                    <div className='sm:flex items-center  '>
                        <div className='sm:w-full pl-20 ml-20 w-1/3  ' >
                            <p className='sm:text-6xl font-bold'>Your Website </p>

                            <p className='sm:text-6xl font-bold text-secondary'>Reimagined,</p>

                            <p className='sm:text-grey text-lg mt-5' >We’ve spent the last 5 years helping over 25,000 teams </p>
                            <p className='sm:text-grey text-lg'>just like yourself create and sustain a successful online support.</p>
                            <div className='sm:flex mt-5'>
                                <button className='sm:p-3 bg-secondary'>Get Started</button>
                                <p className='sm:p-3 text-grey ml-2'>Watch Video</p>
                            </div>
                        </div>
                        <div className='sm:w-full w-1/3  '>
                            <img src={img1} className='w-full' />
                        </div>
                       
                    </div>
                   
                </div>
                <div className='flex justify-center space-x-10'>
                        <img src={img2} className='sm:h-32 w-32 object-contain ' />
                        <img src={img3} className='sm:h-32 w-32 object-contain' />
                        <img src={img4} className='sm:h-32 w-32 object-contain'/>
                        <img src={img5} className='sm:h-32 w-32 object-contain' />
                        <img src={img6} className='sm:h-32 w-32 object-contain' />

                    </div>
            </div>
            
        </>
    )
}
export default Header
 