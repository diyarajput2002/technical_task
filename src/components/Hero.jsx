

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFCACE] to-white p-10 min-h-screen">
      <div className="flex flex-col mb-16">
        <h1 className="text-4xl font-semibold text-center">
          A Perfect Place to <span className="text-[#F35863]">Rent</span>{" "}
          Property
        </h1>
        <p className="text-4xl mt-2 font-semibold text-center">
          Connect With Best Resale Professionals
        </p>
      </div>
      <div className="mt-5 w-full">
        <form className="flex flex-col items-center justify-center space-x-4 px-72 mb-20">
          <div className="flex border-l w-full ml-4 border-gray-200 rounded">
            <button className="text-red-500 border bg-white px-4 py-2 rounded-l-md">
              Buy
            </button>
            <button className="text-red-500 border bg-white px-4 py-2 rounded-r-md">
              Rent
            </button>
          </div>
          <div className="flex w-full gap-20">
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                <select className="p-3 rounded-lg border border-gray-300 bg-white w-1/3">
                  <option>All Residential</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Cities"
                  className="p-3 rounded-lg border border-gray-300 bg-white w-96"
                />
              </div>
              <div className="w-full flex gap-5">
                <select className="p-3 rounded-lg border border-gray-300 bg-white w-full">
                  <option>Bedroom</option>
                  <option>Any</option>
                  <option>1 RK</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                </select>
                <select className="p-3 rounded-lg border border-gray-300 bg-white w-full">
                  <option>Budget</option>
                </select>
                <select
                  className="p-3 rounded-lg border border-gray-300 bg-white w-full"
                  type="checkbox"
                >
                  <option>Posted By</option>
                  <option>Owner</option>
                  <option>Dealer</option>
                </select>
              </div>
            </div>
            <div className="flex-col flex gap-3">
              <button className="bg-[#F35863] text-white px-6 py-3 rounded-lg">
                Search Properties
              </button>
              <button className="text-gray-900 ml-4">Clear All</button>
            </div>
          </div>
        </form>
        <img src="/assets/logo-1 1.png"  alt=""/>
      </div>
    </section>
  );
};
export default Hero;

// const Hero = () => {
//   return (
//     <section className="bg-gray-100 p-10 text-center">
//       <h1 className="text-4xl font-bold">A Perfect Place to <span className="text-pink-500">Rent</span> Property</h1>
//       <p className="text-xl mt-2">Connect With Best Resale Professionals</p>
//       <div className="mt-5">
//         <form className="flex justify-center space-x-3">
//           <select className="p-2 rounded-lg">
//             <option>All Residential</option>
//           </select>
//           <input type="text" placeholder="Enter Cities" className="p-2 rounded-lg border" />
//           <select className="p-2 rounded-lg">
//             <option>Bedroom</option>
//           </select>
//           <select className="p-2 rounded-lg">
//             <option>Budget</option>
//           </select>
//           <button className="bg-pink-500 text-white px-5 py-2 rounded-lg">Search Properties</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Hero;
