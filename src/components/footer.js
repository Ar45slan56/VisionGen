import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0e1833] text-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-2">VISIONGEN</h2>
          <p className="text-gray-400 text-sm mb-4">
            Shaping intelligent systems for tomorrow.
          </p>
          <div className="flex space-x-4 text-lg">
            {[ 
              { icon: <FiFacebook />, label: "Facebook", href: "#" },
              { icon: <FiTwitter />, label: "Twitter", href: "#" },
              { icon: <FiLinkedin />, label: "LinkedIn", href: "#" },
              { icon: <FiYoutube />, label: "YouTube", href: "#" },
              { icon: <FiMail />, label: "Email", href: "mailto:hello@visiongen.net" },
            ].map(({ icon, label, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Core Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "AI Agents & Automation",
              "n8n Workflows",
              "Vision Systems",
              "Custom CMS",
              "Web UI/UX",
            ].map((text, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-white transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter (Email Input Only) */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Join Our Newsletter</h4>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} VisionGEN. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition duration-300">Careers</Link>
          <Link href="#" className="hover:text-white transition duration-300">Privacy Policy</Link>
          <span className="border px-2 py-0.5 rounded border-gray-600">EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
