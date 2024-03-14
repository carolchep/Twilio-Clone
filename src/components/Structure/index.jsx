import right from '../../assets/right.webp'
const Structure = () => {
    return (
      <div className="sm:max-w-7xl	mx-auto h-200 mb-20 ">
        <div className="sm:grid grid-cols-2 pl-20 pt-20" >
          <div className=" min-h-0">
            <p className="text-lg mb-7 text-green font-bold tracking-widest	">STRUCTURE</p>
            <p className="text-5xl font-bold">Discover all <span className='text-secondary'>our</span></p>
            <p className="sm:text-5xl mb-4 font-bold text-secondary">features</p>
            <div className='w-3/4 text-wrap'>
            <p className='font-raleway font-sans '>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
            impedit quo minus id quod maxime placeat facere possimus, omnis 
             voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
          <div className="flex font-bold ">
            <div className="p-3 pl-0 ">Trends Tracking</div>
            <div className="p-3 ml-10  ">Loyalty Programs</div>
            
          </div>
          <div className="flex font-bold">
          <div className="p-3 pl-0">Vendor Management</div>
            <div className="p-3">Billing</div>
          </div>
          <p  className="text-secondary text-lg font-bold underline underline-offset-8 mt-10">All categories</p>

          </div>
          </div>
          <div className=" min-h-0">
            <img src={right}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Structure;
  