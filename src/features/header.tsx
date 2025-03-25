import { useState } from 'react';
import { Menu } from 'react-feather';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-6 lg:py-2 lg:px-8 md:rounded-2xl md:my-6 lg:flex justify-between lg:mb-8">
      <div className="flex justify-between items-center w-full">
        <div>
          <a href="">BeyondEarth</a>
        </div>

        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      <div
        className={`${
          open ? ' h-[16rem]' : 'h-0'
        } overflow-hidden transition-all duration-300 lg:h-auto lg:overflow-auto lg:flex justify-between w-full`}
      >
        <nav className="flex flex-col lg:flex-row gap-x-8 gap-y-4 items-center my-6">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">News</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </nav>

        <div className="flex justify-center lg:justify-self-start">
          <button>Donate</button>
        </div>
      </div>
    </header>
  );
}
