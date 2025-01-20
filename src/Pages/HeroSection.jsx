import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/product-grid";
import Article from "../components/article-card";
import Faq from "../components/FAQ";
import TitleSection from "../components/Title";
import ServiceSection from "../components/Features";
import { TestimonialsScroll } from "../components/TestimonialsScroll";
import { useTranslation, Trans } from "react-i18next";
export default function HeroSection() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className="relative min-h-screen   overflow-hidden bg-[#090014]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Navbar />
        <div className="flex items-center min-h-screen ">
          <motion.div
            className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Experience Luxury{" "}
                  <span className="text-[#7D328D]">Comfort</span>
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl text-gray-500"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Indulge in the epitome of softness and absorbency with our
                  premium pads.
                </motion.p>
                <motion.div
                  className="mt-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button className="bg-[#7D328D] hover:bg-[#9D52AD] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                    Shop Now
                  </Button>
                </motion.div>
              </div>

              <motion.div className="relative lg:mt-0" style={{ y }}>
                <div
                  className="absolute top-[-4.5%] left-0 w-full h-[30px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: 'url("/Img/Line.png")',
                  }}
                ></div>

                {/* Card with animated border */}
                <div className="relative overflow-hidden">
                  <div className="relative p-[3px] rounded-2xl animate-border">
                    <Card className="overflow-hidden rounded-2xl">
                      <img
                        src="Img/product_img.jpg"
                        alt="Luxury pad product"
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                  </div>
                  <img
                    src="Img/Circle.png"
                    alt="Top-right decoration"
                    className="absolute -top-1/4 -right-20 rotate-90 w-56 h-56 object-cover animate-rotate-slow"
                  />
                  <img
                    src="Img/Circle.png"
                    alt="Bottom-left decoration"
                    className="absolute -bottom-1/4 -left-20 w-56 h-56 object-cover animate-rotate-slow"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <FloatingElements />
      </section>
      <section className="bg-[#090014] py-5">
        <TitleSection titleLines={["Our Amazing Features"]} />
        <ServiceSection />
      </section>
      <section className="bg-[#090014] py-5">
        <TitleSection titleLines={["Our Amazing Features"]} />
        <ProductGrid />
      </section>
      <section className="bg-[#090014] py-5">
        <TitleSection titleLines={["Our Amazing Features"]} />
        <Article />
      </section>
      <section className="bg-[#090014] py-5 ">
        <TitleSection
          titleLines={["Hear what our users have to", "say about Feathers."]}
        />
        <TestimonialsScroll />
      </section>
      <section className="bg-[#090014] py-5 ">
        <TitleSection titleLines={["Our Amazing Features", ""]} />
        <Faq />
      </section>
      <Footer />
    </>
  );
}

// Floating Animation Elements
function FloatingElements() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </>
  );
}
