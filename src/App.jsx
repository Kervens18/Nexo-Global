import Sitemap from "./components/Sitemap";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import FaqSection from "./sections/faq-section";
import TrustedCompanies from "./sections/trusted-companies";
import Features from "./sections/features";
import WorkflowSteps from "./sections/workflow-steps";
import Testimonials from "./sections/testimonials";
import PricingPlans from "./sections/pricing-plans";
import CallToAction from "./sections/call-to-action";
//
import ContactSalesPage from "./components/ContactSalesPage";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useState } from "react";
import SecurityPolicy from "./components/SecurityPolicy";
// ...existing code...

export default function App() {
    const [page, setPage] = useState("main");
    //
    if (page === "signup") {
        return <SignUpPage onLogInClick={() => setPage("login")} />;
    }
    if (page === "login") {
        return <LoginPage onSignUpClick={() => setPage("signup")} />;
    }
    if (page === "contactsales") {
        return <ContactSalesPage />;
    }
    if (page === "terms") {
        return <TermsOfService onBack={() => setPage("main")} />;
    }
    if (page === "privacy") {
        return <PrivacyPolicy onBack={() => setPage("main")} />;
    }
    if (page === "sitemap") {
        return <Sitemap onBack={() => setPage("main")} />;
    }
    if (page === "security") {
        return <SecurityPolicy onBack={() => setPage("main")} />;
    }
    return (
        <>
            <LenisScroll />
            <Navbar onContactClick={() => setPage("contactsales")} onSignUpClick={() => setPage("signup")} />
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
            </div>
            <main className='px-4'>
                <section id="home"><HeroSection onOpenStoreClick={() => setPage("signup")} /></section>
                <section id="trusted"><TrustedCompanies /></section>
                <section id="features"><Features /></section>
                <section id="workflow"><WorkflowSteps /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="faq"><FaqSection /></section>
                <section id="pricing"><PricingPlans onPlanClick={() => setPage("signup")} onContactSales={() => setPage("contactsales")} /></section>
                <section id="cta"><CallToAction onTryNowClick={() => setPage("signup")} /></section>
            </main>
            <Footer 
                onTermsClick={() => setPage("terms")} 
                onPrivacyClick={() => setPage("privacy")} 
                onSitemapClick={() => setPage("sitemap")} 
                onSecurityClick={() => setPage("security")} 
            />
        </>
    );
}