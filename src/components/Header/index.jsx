import logo from '../../assets/logo.webp'
import img1 from '../../assets/header.webp'
import img6 from '../../assets/log1.webp'
import img2 from '../../assets/log2.webp'
import img3 from '../../assets/log3.webp'
import img4 from '../../assets/log4.webp'
import img5 from '../../assets/log5.webp'
import afro from '../../assets/afro.webp'
import whitee from '../../assets/whitee.webp'
import backgroundImage from '../../assets/bg.webp'

const Header = () => {
    return (
        <>
            <div>
                {/* <div className='bg-primary sm:h-screen text-white'> */}
                <div className='bg-primary bg-cover bg-no-repeat text-white' style={{backgroundImage: `url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-49.png')`}}>

                    <div className='sm:flex '  >
                        <div className='sm:w-1/4 '>
                            <img src={logo} className="h-32 w-32 ml-auto pl-7 bg-primary object-contain " />
                        </div>

                        <div className="sm:flex w-3/4 justify-center font-medium items-center bg-primary tracking-widest" >
                            <p className="sm:p-5 pr-4">Home</p>
                            <p className="sm:p-5 pr-4">About Us</p>
                            <p className="sm:p-5 pr-4">Blog</p>
                            <p className="sm:p-5 pr-4">Shop</p>
                            <p className="sm:p-5 pr-4">Contact Us</p>
                            <p className="sm:p-3 bg-secondary rounded">Get Started</p>
                        </div>

                    </div>
                    <div className='sm:max-w-7xl h-3/4 grid grid-cols-2 mx-auto bg-primary mt-10 pt-10 '  >
                        <div className='sm:w-full pl-20  pt-8 h-3/4 '  >
                            <p className='sm:text-7xl font-bold pt-20'>Your Website </p>

                            <p className='sm:text-7xl font-bold text-secondary'>Reimagined,</p>

                            <p className='sm:text-grey text-lg mt-5' >We’ve spent the last 5 years helping over 25,000 teams </p>
                            <p className='sm:text-grey text-lg'>just like yourself create and sustain a successful online support.</p>
                            <p className='sm:text-grey text-lg'>just like yourself create and sustain a successful online support.</p>

                            <div className='sm:flex mt-7'>
                            <button className="bg-secondary p-3 mt-5 text-white font-medium tracking-widest  ">Get Started</button>
                            <button className="bg-primary p-3 mt-5  font-medium tracking-widest text-grey ml-10 ">Watch Video</button>

                            </div>
                        </div>
                        <div className='sm:w-full'>
                        {/* <img src={afro} className="h-20 w-20 rounded-full absolute"/> 
                        <img src={whitee} className="h-20 w-20 rounded-full"/>  */}
                            <img src={img1} className='w-full pt-2' />
                        </div>
                       
                    </div>
                   
                </div>
                <div className='sm:flex justify-center space-x-10'>
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
 