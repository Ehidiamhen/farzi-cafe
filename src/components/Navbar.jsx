import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavItem = ({ children }) => (
  <li className="py-2 text-gold hover:text-white transition-colors duration-300">
    {children}
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green w-screen text-gold p-4">
      <div className="container mx-auto flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gold hover:text-white transition-colors duration-300 space-y-2"
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gold"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gold"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gold"></span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-green z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 my-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors duration-300"
          >
            <X size={30} />
          </button>
          <ul className="text-center space-y-4">
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/">HOME</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/about">ABOUT US</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/events">EVENTS</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/family">FAMILY DINING</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/business">BUSINESS DINING</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/">RESERVE A TABLE</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/">ORDER ONLINE</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/">MENU</Link>
            </NavItem>
            <NavItem>
                <Link onClick={() => setIsOpen(false)} to="/contact">CONTACT US</Link>
            </NavItem>
          </ul>
        </div>
      )}

      <div className="fixed bottom-0 w-full bg-gold text-white left-0 right-0 font-bold z-20">
        <div class="flex justify-evenly text-center">
          <a
            href="https://www.google.com/search?sca_esv=1926c2955f272b3e&sca_upv=1&rlz=1C5CHFA_enCA1017CA1017&q=Farzi+Cafe+%7C+Modern+Spice+Bistro&ludocid=7698142137783639181&lsig=AB86z5Wc0ZFLKTjZFuAQPH2wlWz3&shndl=-1&shem=lsde,vslcea&source=sh/x/loc/act/m1/1&kgs=e0b1e38578c96a39#vhid=33:/g/11v6g13zp5&vssid=menu-viewer-entrypoint"
            className="py-4"
          >
            MENU
          </a>
          <a
            href="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE"
            className="border-l border-white px-4 py-4"
          >
            BOOK
          </a>
          <a
            href="https://food.google.com/chooseprovider?restaurantId=/g/11v6g13zp5"
            className="border-l border-white px-4 py-4"
          >
            DELIVERY
          </a>
        </div>
      </div>
    </nav>
  );
}