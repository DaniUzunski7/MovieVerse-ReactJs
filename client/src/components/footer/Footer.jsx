import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-center py-6 mt-auto">
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
        <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
        <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
      </div>
      <p className="text-yellow-400">
        &copy; {new Date().getFullYear()} MovieVerse. All rights reserved.
      </p>
    </footer>
  );
}
