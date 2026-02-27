import { motion } from "framer-motion";

export default function TrustedCompanies() {
    const logos = [
        '/assets/company-logo-1.svg',
        '/assets/company-logo-2.svg',
        '/assets/company-logo-3.svg',
        '/assets/company-logo-4.svg',
        '/assets/company-logo-5.svg',
        '/assets/company-logo-6.svg', // TikTok Shop
        '/assets/company-logo-7.svg', // AliExpress
        '/assets/company-logo-8.svg', // Alibaba
        '/assets/company-logo-9.svg', // Amazon
    ]

    return (
        <motion.section className="mt-14"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
            <p className="py-6 mt-14 text-center">Trusting by leading brands, including —</p>

            <div className="flex flex-wrap justify-between max-sm:justify-center gap-10 max-w-4xl w-full mx-auto py-4" id="logo-container">
                {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-7 w-auto max-w-xs" />)}
            </div>
        </motion.section>
    )
}