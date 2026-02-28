import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar({ onContactClick, onSignUpClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Accueil', href: '#home' },
        { name: 'Fonctionnalités', href: '#features' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Témoignages', href: '#testimonials' },
        { name: 'Contact', href: '#cta' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href='#!'>
                    <svg width="205" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fill="#fff" fontWeight="bold">Nexo Global</text>
                    </svg>
                </a>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        link.name === 'Contact' ?
                        <button key={link.name} type="button" className='transition hover:text-gray-300' style={{background:'none',border:'none',padding:0,margin:0}} onClick={onContactClick}>{link.name}</button>
                        :
                        <a key={link.name} href={link.href} className='transition hover:text-gray-300'>
                            {link.name}
                        </a>
                    ))}
                    <button type="button" className='btn glass' onClick={onSignUpClick}>
                        Sign Up
                    </button>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    link.name === 'Contact' ?
                    <button key={link.name} type="button" className='transition hover:text-gray-300' style={{background:'none',border:'none',padding:0,margin:0}} onClick={() => { setIsOpen(false); onContactClick && onContactClick(); }}>{link.name}</button>
                    :
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
                <button type="button" className='btn glass w-full' onClick={() => { setIsOpen(false); onSignUpClick && onSignUpClick(); }}>
                    Sign Up
                </button>
                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}
