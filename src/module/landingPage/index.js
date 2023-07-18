import Layout from "../../components/layout";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonial from "./sections/Testimonial";
import Banner from "./sections/Banner";
import Faq from "./sections/Faq";


export default function LandingPage() {
    return (
        <Layout>
            <Hero />
            <Services />
            <About />
            <Testimonial />
            <Banner />
            <Faq />
        </Layout>
    )
}
