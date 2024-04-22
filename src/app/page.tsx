import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/page";
import TopDestination from "@/components/Topdestination/page";
import Testimonials from "@/components/Testimonials/page";
export default function Home() {
  return (
    <section>
      <div className='font-primary'>
        <Navbar />
        <Hero />
        <Testimonials />
        <TopDestination />
      </div>
    </section>
  );
}
