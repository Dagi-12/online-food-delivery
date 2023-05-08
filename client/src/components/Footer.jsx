import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 px-6">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
          <ul className="text-gray-300">
            <li className="mb-4">
              <a href="/about" className="hover:text-orange-500">About</a>
            </li>
            <li className="mb-4">
              <a href="/login" className="hover:text-orange-500">Menu</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
          <ul className="text-gray-300">
            <li className="mb-4">
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-orange-500">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-orange-500">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-orange-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500">
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between justify-center">
        <span className="text-sm text-gray-300 sm:text-center ">© 2023 Online Food Delivery. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
