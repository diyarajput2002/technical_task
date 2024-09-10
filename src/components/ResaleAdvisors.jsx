import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const advisors = [
  {
    name: "Neeraj Kumar",
    company: "Squareyard Solutions",
    location: "& Noida",
    experience: "20 Year Experience",
    languages: "Speaks Hindi & English",
    listings: "2 Listings",
    deals: "Deals in - Noida, Greater Noida"
  },
  {
    name: "Neeraj Kumar",
    company: "Squareyard Solutions",
    location: "& Noida",
    experience: "20 Year Experience",
    languages: "Speaks Hindi & English",
    listings: "2 Listings",
    deals: "Deals in - Noida, Greater Noida"
  },
  {
    name: "Neeraj Kumar",
    company: "Squareyard Solutions",
    location: "& Noida",
    experience: "20 Year Experience",
    languages: "Speaks Hindi & English",
    listings: "2 Listings",
    deals: "Deals in - Noida, Greater Noida"
  }
]

const bgColors = [
  'bg-slate-600',
  'bg-[#F35863]',
  'bg-slate-600'
]

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#F35863] rounded-full p-2 shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6" />
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#F35863] rounded-full p-2 shadow-lg cursor-pointer z-10"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6" />
    </div>
  )
}

export default function ResaleAdvisors() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="bg-slate-800 text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-5xl font-bold mb-4 md:mb-0">Featured Resale Advisors</h2>
          <p className="text-slate-300 max-w-lg text-lg">
            Our Featured Resale Advisors are market experts, providing top-notch guidance and support. Trust them to help you secure the best deals and ensure smooth transactions, maximizing your returns with ease.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="relative">
          {advisors.map((advisor, index) => {
            return (
              <div key={index} className={`px-2`}>
                <div className={`flex-none ${bgColors[index]} rounded-lg p-6 transition-all duration-300 ease-in-out`}>
                  <div className="flex items-start">
                    <img
                      src={`/assets/Icon.png?height=80&width=80&text=${advisor.name.charAt(0)}`}
                      alt={advisor.name}
                      className="w-20 h-20 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-1">{advisor.name}</h3>
                      <p className="text-sm text-slate-300 mb-1">{advisor.company}</p>
                      <p className="text-sm text-slate-300 mb-3">{advisor.location}</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                          <span>{advisor.experience}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                          <span>{advisor.languages}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                          <span>{advisor.listings}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0"></span>
                          <span>{advisor.deals}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>

        <div className="flex justify-center mt-8">
          <button className="bg-[#F35863] text-white font-semibold py-2 px-4 rounded-full text-sm">
            View More Advisers »
          </button>
        </div>
      </div>
    </div>
  )
}
