import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bob Smith",
    role: "Industry Analyst",
    quote:
      "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
    rating: 5,
    img: "/placeholder.svg",
  },
  {
    name: "Eva Green",
    role: "Operations Director",
    quote:
      "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    rating: 3,
    img: "/placeholder.svg",
  },
  {
    name: "Cathy Lee",
    role: "Product Manager",
    quote:
      "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    rating: 5,
    img: "/placeholder.svg",
  },
  {
    name: "Frank Moore",
    role: "Project Manager",
    quote:
      "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    rating: 2,
    img: "/placeholder.svg",
  },
  {
    name: "Grace Hall",
    role: "Marketing Specialist",
    quote:
      "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
    rating: 5,
    img: "/placeholder.svg",
  },
  {
    name: "Mia Turner",
    role: "Systems Integrator",
    quote:
      "It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.",
    rating: 3,
    img: "/placeholder.svg",
  },
];
const TestimonialCard = ({ name, role, quote, rating }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 mb-6 w-[calc(100%-2rem)] mx-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">{quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
        <img
          src="/placeholder.svg"
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
    <div className="flex mt-4 gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  </motion.div>
);

export function TestimonialsScroll() {
  const scrollRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const scrollContainers = scrollRefs.map((ref) => ref.current);
    const animationFrameIds = [];

    scrollContainers.forEach((container, index) => {
      if (!container) return;

      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const isReverse = index % 2 === 1;

      const scroll = () => {
        if (!container) return;
        container.scrollTop += isReverse ? -1 : 1;
        if (isReverse) {
          if (container.scrollTop <= 0) {
            container.scrollTop = scrollHeight - clientHeight;
          }
        } else {
          if (container.scrollTop >= scrollHeight - clientHeight) {
            container.scrollTop = 0;
          }
        }

        animationFrameIds[index] = requestAnimationFrame(scroll);
      };
      if (isReverse) {
        container.scrollTop = scrollHeight - clientHeight;
      }

      scroll();
    });

    return () => {
      animationFrameIds.forEach((id) => {
        if (id) cancelAnimationFrame(id);
      });
    };
  }, []);

  return (
    <div className="h-screen bg-[#090014] overflow-hidden relative">
      <div className="mx-auto w-[85%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[0, 1, 2, 3].map((colIndex) => (
            <div
              key={colIndex}
              ref={scrollRefs[colIndex]}
              className="h-[calc(100vh-8rem)] overflow-hidden"
            >
              <div>
                {[...testimonials, ...testimonials].map((testimonial, i) => (
                  <TestimonialCard key={`${colIndex}-${i}`} {...testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
