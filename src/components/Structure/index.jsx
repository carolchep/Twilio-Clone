import right from '../../assets/right.webp'
const Structure = () => {
    return (
      <div className="w-full min-h-0 mt-5">
        <div className="flex justify-around p-4 gap-0" >
          <div className="w-1/3  p-10 min-h-0">
            <p className="text-2xl mb-4 text-green">STRUCTURE</p>
            <p className="text-5xl font-bold">Discover all our</p>
            <p className="text-5xl mb-4 font-bold text-secondary">features</p>
            <p >Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
          <div className="flex  ">
            <div className="p-3 pl-0">Trends Tracking</div>
            <div className="p-3">Loyalty Programs</div>
            
          </div>
          <div className="flex">
          <div className="p-3 pl-0">Vendor Management</div>
            <div className="p-3 ">Billing</div>
          </div>
          <p  className="text-secondary text-xl">All categories</p>

          </div>
          <div className="w-1/3  p-10 min-h-0">
            <img src={right}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Structure;
  