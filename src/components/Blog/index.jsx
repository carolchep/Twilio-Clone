const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto pt-20 pb-20 mb-5 mt-20">
            <div className="mx-auto w-1/4">
                <p className="text-lg mb-7 text-green font-bold tracking-widest ">BLOG</p>

            </div>
            <div className="w-3/4 ml-10 text-center
                 pl-5">  <p className="text-5xl text-primary pb-7 ml-1 font-bold">Learn new
                    <span className='text-secondary'> with us</span></p>
            </div>

            <div className="sm:grid gap-8 grid-cols-3 mt-7 ">

                <div className="h-96">



                    <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2021/03/person-writing-on-white-paper-3815585.jpg" class="object-cover w-full h-full" />

                    <p className="text-2xl pt-2 font-bold">
                        Software as a Service (SaaS): A cheat sheet</p>
                    <p>Cloud DB ,Support</p>
                </div>

                <div>

                    <div className="h-96">

                        <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2020/11/austin-distel-rxpThOwuVgE-unsplash-1-scaled.jpg" class="object-cover w-full h-full" />
                        <p className="text-2xl pt-2 font-bold">
                            Scale up vs Scale out: What’s the difference?</p>
                        <p>Cloud DB ,Support</p>
                    </div>

                </div>
                <div>

                    <div className="h-96 ">
                        <img src="https://n.foxdsgn.com/twilo/wp-content/uploads/2021/03/shutterstock_1025348617_copy.jpg " class="object-cover w-full h-full" />
                        <p className="text-2xl pt-2 font-bold">
                            WordPress Website Audit by a Website Maintenance</p>
                        <p>Software</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Blog