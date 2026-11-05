import rdLogo from "@/assets/rd-logo-transparent.png.asset.json";


import Link from "@/muftlo/next/link";
import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        <div className="-mt-3">
          <div className="flex items-center gap-2 mb-2">
            <img src={rdLogo.url} alt="R&D Software Solutions" className="h-14 w-auto" />
            <h1 className="text-xl font-bold leading-tight text-white">R&amp;D <span className="text-orange-400">Software Solutions</span></h1>
          </div>

          <h2 className="text-lg font-semibold text-blue-400 mb-2">Reach Us</h2>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-1">OFFICE:</h3>
              <p className="flex items-start gap-2">
                E45A, Garden Street, near Fort Restaurant, Lal Bahadur Nagar,
                Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                CONTACT DETAILS:
              </h3>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                info@muftlo.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" /> +91-78777 31096
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Digital Marketing
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Social Media Marketing</li>
            <li>SEO & SEM</li>
            <li>Influencer Marketing</li>
            <li>Brand Strategy</li>
            <li>Video Campaigns</li>
          </ul>
        </div>

        <div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Technology Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Website Development</li>
              <li>Landing Pages</li>
              <li>UI/UX Design</li>
              <li>Ecommerce Website</li>
            </ul>
          </div>

          <h2 className="text-lg font-semibold text-white mb-3 mt-5">
            Performance Marketing
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Performance Ads</li>
            <li>Conversion Optimization</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Photo & Video Production
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Brand Films & Ad Shoots</li>
            <li>Product Photography</li>
            <li>Youtube Videos</li>
            <li>Podcast</li>
            <li>Event Coverage</li>
            <li>Social Media Reels & Shorts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.instagram.com/muftlo"
              aria-label="Instagram"
              className="hover:text-blue-400 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/muftlo"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/p/Muftlo-100095111054351/"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@Muftlo"
              aria-label="YouTube"
              className="hover:text-blue-400 transition"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-8">
        <div className="flex gap-6 mb-3 md:mb-0">
          <Link href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Company Policy
          </Link>
          <Link href="#" className="hover:text-blue-400 transition">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-gray-500">
          © {new Date().getFullYear()} R&D Software Solutions Digital Marketing Agency. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
