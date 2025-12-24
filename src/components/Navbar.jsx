const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="grid grid-cols-[50px_550px_130px] py-4 flex items-center justify-center gap-20">
        <div>
          <img className="cursor-pointer" src="/demologo.png" alt="Logo" />
        </div>

        <div className="bg-neutral-950 rounded-full flex items-center justify-center px-6 py-3 border border-[#262527]">
          <ul className="flex gap-10 text-gray-300 text-sm cursor-pointer">
            <li className=" hover:text-purple-800">Features</li>
            <li className=" hover:text-purple-800">Developers</li>
            <li className=" hover:text-purple-800">Company</li>
            <li className=" hover:text-purple-800">Blog</li>
            <li className=" hover:text-purple-800">Changelog</li>
          </ul>
        </div>

        <div className="rounded-xl">
          <button className="rounded-xl px-4 py-2 text-white bg-gradient-to-b from-purple-500 to-purple-900 cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
