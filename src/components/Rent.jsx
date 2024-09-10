const Rent = () => {
  return (
    <div className="flex w-full items-start justify-between mt-5 px-6 py-4">
      <div className="flex flex-col items-center justify-end gap-4">
        <div className="w-1/2 items-center justify-center">
          <h1 className="text-4xl font-semibold text-center text-[#100A55] mb-4">
            Your Ultimate Source for the Latest Listings
          </h1>
          <p className="text-[#100A55] text-base mb-4">
            Stay ahead with our constantly updated listings, ensuring you never
            miss out.
          </p>
          <button className="bg-[#100A55] text-white items-center font-bold text-sm rounded-md p-3 mt-3">
            Browse Properties
          </button>
        </div>
        <div className="mt-5">
          <img src="/assets/Illustration.png" alt="" />
        </div>
      </div>
      <div className="flex  flex-col w-1/2 items-center justify-center gap-4 ">
        <div className="items-start justify-center gap-6 flex">
          <div className="flex gap-2">
            <img
              src="/assets/Mortgage.png"
              className="bg-[#FFCACE] rounded-full text-lg p-2 "
            />
          </div>
          <div>
            <h1 className="font-bold text-[#000929] mb-2 text-xl">
              Rent a home
            </h1>
            <p className="text-[#4D5461] text-sm mb-3">
              Our rental property experts share a wealth of information about
              the property that fits in your budget and suits your desired
              lifestyle.
            </p>
            <button className="bg-[#3E4C66] text-white px-4 py-2 rounded-full text-sm w-36">
              Rent a home
            </button>
          </div>
        </div>
        <div className="items-start justify-center gap-6 flex">
          <div className="flex gap-2">
            <img
              src="/assets/Property.png"
              className="bg-[#FFCACE] rounded-full text-lg p-2 "
            />
          </div>
          <div>
            <h1 className="font-bold text-[#000929] mb-2 text-xl">
              Buy a new home
            </h1>
            <p className="text-[#4D5461] text-sm mb-3">
              Looking to buy a new home? Our Residential Property Experts helps
              you make the smartest investment with an incredible collection of
              handpicked projects.
            </p>
            <button className="bg-[#3E4C66] text-white px-4 py-2 rounded-full text-sm w-36">
              Find a New Home
            </button>
          </div>
        </div>
        <div className="items-start justify-center gap-6 flex">
          <div className="flex gap-2">
            <img
              src="/assets/Caretaker.png"
              className="bg-[#FFCACE] rounded-full text-lg p-2 "
            />
          </div>
          <div>
            <h1 className="font-bold text-[#000929] mb-2 text-xl">
              Sell a home
            </h1>
            <p className="text-[#4D5461] text-sm mb-3">
              Our housing experts, with complete knowledge about locality,
              identifies the best sale strategy & helps you grab the best deal
              for your home.
            </p>
            <button className="bg-[#3E4C66] text-white px-4 py-2 rounded-full text-sm w-36">
              Sell a home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;