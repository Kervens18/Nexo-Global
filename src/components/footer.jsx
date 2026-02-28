import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ onTermsClick, onPrivacyClick, onSitemapClick, onSecurityClick }) {
    return (
        <motion.footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href="#!">
                <svg width="205" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fill="#fff" fontWeight="bold">Nexo Global</text>
                </svg>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                <button onClick={onTermsClick} className='transition hover:text-gray-300 bg-transparent border-none outline-none cursor-pointer'>Terms of Service</button>
                <button onClick={typeof onPrivacyClick === 'function' ? onPrivacyClick : undefined} className='transition hover:text-gray-300 bg-transparent border-none outline-none cursor-pointer'>Privacy Policy</button>
                <button onClick={typeof onSecurityClick === 'function' ? onSecurityClick : undefined} className='transition hover:text-gray-300 bg-transparent border-none outline-none cursor-pointer'>Security</button>
                <button onClick={typeof onSitemapClick === 'function' ? onSitemapClick : undefined} className='transition hover:text-gray-300 bg-transparent border-none outline-none cursor-pointer'>Sitemap</button>
            </div>
            <div className="flex items-center gap-6 pb-6">
                <a href="https://www.facebook.com/profile.php?id=61586377145463" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/keleshop0/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <InstagramIcon />
                </a>
                <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <TwitterIcon />
                </a>
                <a href="https://youtube.com/@nexo-global-h6e?si=XgzOqW6VKvqaEqTv" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <YoutubeIcon />
                </a>
            </div>
            <hr className="w-full border-white/20 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
                <p>Build your store Online</p>
                <p>Copyright © 2025 Nexo Global • All rights reserved</p>
            </div>
        </motion.footer>
    );
};