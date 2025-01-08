import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturesSection from "../components/Features";
import TitleComponent from "../components/Title";
import ProductGrid from "../components/product-grid";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className="relative min-h-screen   overflow-hidden bg-gradient-to-b from-white to-purple-50">
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
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
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
                <Card className="overflow-hidden rounded-2xl bg-white/10 shadow-xl backdrop-blur-lg">
                  <img
                    src="Img/product_img.jpg"
                    alt="Luxury pad product"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <FloatingElements />
      </section>
      <section className="bg-gradient-to-b from-purple-100 to-white py-5">
        <TitleComponent title="Our Amazing Features" />
        <FeaturesSection />
      </section>
      <section className="bg-gradient-to-b from-purple-100 to-white py-5">
      <TitleComponent title="Featured Products" />
        <ProductGrid />
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
