import { FaWhatsapp, FaBars } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div    
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#F35863] rounded-full p-2 shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      &gt;
    </div>
  ); 
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#F35863] rounded-full p-2 shadow-lg cursor-pointer z-10"
    onClick={onClick}
    >
      &lt;
    </div>
  );
};

const properties = [
  {
    id: 1,
    imageUrl: '/assets/img1.png',
    title: 'Gardenia Glory',
    price: 30,
    size: '1170 Sqft',
    location: 'Sector-76 Noida'
  },
  {
    id: 2,
    imageUrl: '/assets/img2.png',
    title: 'Society New 1',
    price: 40,
    size: '2200 Sqft',
    location: 'Sector-74 Noida'
  },
  {
    id: 3,
    imageUrl: '/assets/img3.png',
    title: 'Society New 2',
    price: 60,
    size: '3300 Sqft',
    location: 'Sector-78 Noida'
  }
];

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-2/3">
      <img src={property.imageUrl} alt={property.title} className="w-full h-56 object-cover" />
      <div className="p-4">
      <h1 className=" text-2xl text-[#F35863]">₹{property.price} Lacs</h1>
        <h3 className="text-md font-bold mb-2">{property.title}</h3>
        <div className="flex flex-col justify-between">
          <div>
          <p className="text-gray-900 font-bold text-xl">{property.location}</p>
          </div>
          <div className='flex justify-between'>
          <p className="text-gray-900">2 BHK Flat/Apartment</p>
          <p className="text-gray-900">{property.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings} className="relative">
      {properties.map(property => (
        <div key={property.id} className='ml-20'>
          <PropertyCard property={property}/>
        </div>
      ))}
    </Slider>
  );
};

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#FFCACE] to-white py-4 px-6 flex justify-between items-center">
      <a href="/" className="text-white ">
        <FaWhatsapp size={35} className='bg-green-600 p-1 rounded-full' />
      </a>
      <p className='text-4xl'>Premium Owner Properties</p>
      <button className="text-white">
        <FaBars size={35} className='bg-[#00bfc4] px-2 rounded-full' />
      </button>
    </header>
  );
};

const Header2 = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#FFCACE] to-white ">
      <div className="flex items-center space-x-2 p-2 bg-red-500 rounded-lg">
        <button className="flex items-center space-x-1  bg-[#F35863] text-white px-4 py-2 rounded-lg">
          <span>Buy</span>
        </button>
        <button className="flex items-center space-x-1 bg-transparent text-white px-4 py-2 rounded-lg">
          <span>Rent</span>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Residential</button>
        <button className="bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded-full">Commercial</button>
      </div>
    </div>
  );
};

const Properties = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFCACE] to-white p-0 min-h-screen">
      <Header />
      <Header2 />
      <PropertyList />
    </div>
  );
};

export default Properties;