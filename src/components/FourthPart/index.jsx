import me from '../../assets/me.jpeg'
import left from '../../assets/left.webp'
import slide1 from '../../assets/slide1.webp'

const FourthPart = () => {
    return (
        <>
            <div className="sm:max-w-6xl mx-auto grid grid-cols-2 gap-3 pt-40 ">
                <img src={left} />

                <div className='sm:pl-10 ml-auto'>
                    <p className=' text-lg text-green font-bold tracking-widest	'> DATA ANALIZE</p>
                    <p className='font-bold text-5xl mt-2'>Increase your</p>
                    <p className='font-bold text-5xl mt-2 text-secondary'>performance</p>

                    <p className='text-wrap mt-7'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                    <div className='mt-5'>

                        <div className='border-l-2 pl-10'>
                            <p>"It is really refreshing
                                to work with this software which is truly helpful in the client’s needs and preferences."
                            </p>
                            <div className='flex mt-5'>
                                <img src={me} className="h-20 w-20 rounded-full" />
                                <div className='pt-4 pl-9'>
                                    <p className='font-bold'>Caroline Samoei</p>
                                    <p className='text-sm'>Front End Dev, Kudobuzz
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='bg-primary pb-20 mt-20'>
                <div className='max-w-6xl mx-auto grid grid-cols-3 text-white gap 2 pt-20'>
                    <div >

                        <p className='text-2xl font-bold  p-7'>Features</p>
                        <div className='flex row space-x-2 p-7 pl-0'>
                            <img src={'https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-29.png'} className="object-contain" />
                            <div>
                                <p className='text-2xl font-bold'>Intergrations</p>
                                <p className='pt-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                            </div>
                        </div>
                        <div className='flex row space-x-2 p-6 pl-0'>
                            <img src={'https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-28.png'} className="object-contain"/>
                            <div>
                            <p className='text-2xl font-bold'>Workflows</p>
                            <p className='pt-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                            </div>
                        </div>
                        <div className='flex row space-x-2 p-6 pl-0'>

                            <img src={'https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-27.png'}className="object-contain" />
                            <div>
                            <p className='text-2xl font-bold'>Community</p>
                            <p className='pt-2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
                            </div>
                        </div>

                    </div>
                    <div>    
                        <p className='text-2xl font-bold  p-7'  >Capabilities</p>
                        <div className='text-lg font-bold p-5'>
                        <p className='p-2'>Custom Functions</p>
                        <p className='p-2'>Time Tracking</p>
                        <p  className='p-2'>Layouts</p>
                        <p  className='p-2'>Notifications</p>
                        <p  className='p-2'>Responsive</p>
                        <p  className='p-2'>Reports</p>
                        <p  className='p-2'>Templates</p>

                        </div>




                    </div>
                    <div> 
                          <p className='text-4xl font-bold  pl-0 pt-2  mt-5 p-7'>Get All the Metrics</p>
                          <p className='font-bold mt-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium nam libero tempore.</p>
                          <img  src={slide1}/>
                    </div>

                </div>

            </div>
        </>
    )
}
export default FourthPart