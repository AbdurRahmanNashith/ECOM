import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footer = () => {
  return (
    <div>
      {/* Blue promotional banner */}
      <section className="bg-blue-600 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
                GET 10% OFF ON YOUR FIRST ORDER
              </h3>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold flex items-center gap-2">
              SIGN UP FOR FREE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Continue with any remaining sections */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ... existing code here ... */}
        </div>
      </section>

      <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Products Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                PRODUCTS
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Footwear
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wallets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Belts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Passport Holder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Handbags
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Card Holder
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                CATEGORIES
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Oxford
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sneakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Loafers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Boots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Heels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sandals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Flats
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                CONTACT
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+919790377807" className="hover:underline">
                    +91 97903 77807
                  </a>
                </li>
                <li>
                  <a href="tel:+919629019454" className="hover:underline">
                    +91 96290 19454
                  </a>
                </li>
                <li>
                  <a href="tel:+919789858117" className="hover:underline">
                    +91 97898 58117
                  </a>
                </li>
                <li>
                  <a href="tel:+919994106277" className="hover:underline">
                    +91 99941 06277
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                FOLLOW US
              </h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://www.instagram.com/shoestyle.shop/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline text-sm"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/shoestyle.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline text-sm"
                >
                  <Facebook />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtu.be/DRUO296WCpc?si=g9UH7SX-JY-hsuQ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline text-sm"
                >
                  <Youtube />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://wa.me/919790377807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline text-sm"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>

                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section with links and copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </div>
              <div className="text-sm text-gray-400">
                ©2025 Shoe Style. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
