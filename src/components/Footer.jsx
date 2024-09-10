import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-gray-50 px-10">
      <div className="text-center py-12">
        <h2 className="text-red-500 text-lg font-semibold">No Spam Promise</h2>
        <h3 className="text-2xl font-bold mb-4">Are you a Property Owner?</h3>
        <p className="text-gray-600 mb-6">
          Discover ways to increase your home's value and get listed. No Spam.
        </p>
        <div className="flex justify-center items-center mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 border border-gray-300 rounded-l-lg w-80 focus:outline-none"
          />
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
            Submit
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          Join <span className="text-red-500">10,000+</span> other landlords in
          our estattery community.
        </p>
      </div>
      <div className="border-t border-gray-200 py-8">
        <div className="flex">
          <div className="w-1/2 px-3">
            <img
              src="/assets/logo-(1) 1.png"
              alt=""
              className="h-10 w-52"
            />
            <p className="text-gray-600 mb-4">
              Aaronconnect India E-Services Pvt
              <br />
              A-84, Ground Floor, Sector-4,
              <br />
              Noida-201201
              <br />
              Cust Care: 9540-120-120
              <br />
              info@resaleadvisor.com
            </p>
            <div className="flex space-x-4 mt-20">
              <a href="#" className="text-gray-300 hover:text-gray-600">
                <TiSocialFacebook size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-600">
                <SlSocialInstagram size={25} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-600">
                <TiSocialTwitter size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-600">
                <TiSocialLinkedin size={30} />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Find Advisor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Become a Member
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Advertise with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Career with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.40516303433!2d77.0899683170365!3d28.522147497380253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725945863566!5m2!1sen!2sin"
                height={300}
                width={400} >      
                </iframe>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" text-center py-4 px-10 text-gray-600 text-sm flex justify-between">
        <p>©2024 Resaleadvisor All rights reserved</p>
        <p>Designed & developed by Kanak Drishti Infotech Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;