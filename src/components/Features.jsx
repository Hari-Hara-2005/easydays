import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Umbrella, EarthLock, Flower2 } from "lucide-react"; // Added Flower2 icon for eco-friendliness

export default function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set duration of animation
      easing: "ease-in-out", // Set easing function for animation
    });
  }, []);

  return (
    <div className="bg-[#090014] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Card: Quality & Safety */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center relative z-10 -bottom-10">
                <ShieldCheck className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <Card className="relative group overflow-hidden bg-transparent backdrop-blur-2xl border border-gray-800 rounded-3xl">
              <CardContent className="p-4">
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-purple-500/50 group-hover:bg-purple-500/60 blur-xl rounded-3xl transition-colors duration-300 mx-16 -top-16" />
                </div>
                <div className="py-10">
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">
                    Quality & Safety
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    We have always believed in providing highest levels of
                    quality and safety to our consumers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Card: Superior Protection */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center relative z-10 -bottom-10">
                <Umbrella className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <Card className="relative group overflow-hidden bg-transparent backdrop-blur-2xl border border-gray-800 rounded-3xl">
              <CardContent className="p-4">
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-blue-500/50 group-hover:bg-blue-500/60 blur-xl rounded-3xl transition-colors duration-300 mx-16 -top-16" />
                </div>
                <div className="py-10">
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">
                    Superior Protection
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    Enabling women to feel comfortable during periods – both
                    physically and emotionally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Card: Social Responsibility */}
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center relative z-10 -bottom-10">
                <EarthLock className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <Card className="relative group overflow-hidden bg-transparent backdrop-blur-2xl border border-gray-800 rounded-3xl">
              <CardContent className="p-4">
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-yellow-500/50 group-hover:bg-yellow-500/60 blur-xl rounded-3xl transition-colors duration-300 mx-16 -top-16" />
                </div>
                <div className="py-10">
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">
                    Social Responsibility
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    We are always pushing ourselves to improve – our products,
                    our communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fourth Card: Eco-Friendly Comfort */}
          <div data-aos="fade-up" data-aos-delay="800">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center relative z-10 -bottom-10">
                <Flower2 className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <Card className="relative group overflow-hidden bg-transparent backdrop-blur-2xl border border-gray-800 rounded-3xl">
              <CardContent className="p-4">
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-green-500/50 group-hover:bg-green-500/60 blur-xl rounded-3xl transition-colors duration-300 mx-16 -top-16" />
                </div>
                <div className="py-10">
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">
                    Eco-Friendly Comfort
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    Our pads are made with sustainable materials,
                    superior comfort and eco-conscious design.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
