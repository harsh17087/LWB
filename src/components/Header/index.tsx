import Image from 'next/image';
import LWBLogo from '@/assets/images/LWB_Logo.jpg';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="flex items-center mb-4 sm:mb-0">
        <Image src={LWBLogo} alt="Learning with basics Logo" width={40} height={40} className="rounded-full" />
        <span className="ml-2 text-xl font-bold">Learning With Basics</span>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Login / Register
        </button>
      </div>
    </header>
  );
}

export default Header;