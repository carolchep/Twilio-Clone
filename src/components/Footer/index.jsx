import logo from '../../assets/logo.webp'

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div class="sm:grid grid-cols-4 gap-4 h-96">
                <div className="mt-10 pt-10">
                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-113258899.png" className="h-20 w-32 pb-0 object-contain " />
                    <div className='flex space-x-2 p-1'>
                        <i class="fab fa-instagram text-xl text-primary1"></i>
                        <p className='pl-5'>Instagram</p>
                    </div>
                    <div className='flex space-x-2 p-1'>
                    <i class="fab fa-facebook  text-primary1"></i>
                        <p className='pl-5 '>Facebook</p>
                    </div><div className='flex space-x-2 p-1'>
                    <i class="fab fa-linkedin-in  text-primary1"></i>
                        <p className='pl-5'>LinkedIn</p>
                    </div><div className='flex space-x-2 p-1'>
                    <i class="fas fa-phone-alt  text-primary1"></i>
                        <p className='pl-5'>+254 711 344457</p>
                    </div>
                    <div className='flex space-x-2 p-1'>
                    <i class="fas fa-envelope text-primary1"></i>
                        <p className='pl-5'>carolchepsam@gmail.com</p>
                    </div>
                </div>

                <div class="sm:grid grid-cols-subgrid gap-4 col-span-3">
                    <div className='sm:grid grid-cols-4 gap-2 mt-10 pt-10 '>
                        <div>
                            <p className='text-xl font-bold pt-5'>HomePages</p>
                            <p className='p-1 mt-5'>About Us</p>
                            <p className='p-1 '>Team Member</p>
                            <p className='p-1'>Patners</p>
                            <p className='p-1'>Services</p>
                            <p className='p-1'>Main Home</p>



                        </div>
                        <div>
                        <div>
                            <p className='text-xl font-bold pt-5'>Team Member</p>
                            <p className='p-1 mt-5'>About Us</p>
                            <p className='p-1 '>Team Member</p>
                            <p className='p-1'>Patners</p>
                            <p className='p-1'>Services</p>
                            <p className='p-1'>Main Home</p>



                        </div>
                        </div>
                        <div>  <div>
                            <p className='text-xl font-bold pt-5'>Resources</p>
                            <p className='p-1 mt-5'>About Us</p>
                            <p className='p-1 '>Team Member</p>
                            <p className='p-1'>Patners</p>
                            <p className='p-1'>Services</p>
                            <p className='p-1'>Main Home</p>



                        </div></div>
                        <div>  <div>
                            <p className='text-xl font-bold pt-5'>Services</p>
                            <p className='p-1 mt-5'>About Us</p>
                            <p className='p-1 '>Team Member</p>
                            <p className='p-1'>Patners</p>
                            <p className='p-1'>Services</p>
                            <p className='p-1'>Main Home</p>



                        </div></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
