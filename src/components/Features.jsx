import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      image: "Gif/safety.gif",
      title: "Quality & Safety",
      description:
        "We have always believed in providing the highest levels of quality and safety to our consumers.",
      delay: 0,
    },
    {
      image: "Gif/protection.gif ",
      title: "Superior Protection",
      description:
        "Enabling women to feel comfortable during periods – both physical and emotional, so that they can focus on what matters to them.",
      delay: 0.2,
    },
    {
      image: "Gif/Responsibility.gif", 
      title: "Social Responsibility",
      description:
        "We are always pushing ourselves to improve – our products, our communities, and our impact on the planet.",
      delay: 0.4,
    },
  ];

  return (
    <section className="lg:h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4 py-8 px-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-purple-100 rounded-full scale-[1.5] group-hover:scale-[1.7] transition-transform duration-300" />
                  <motion.div
                    className="relative w-20 h-20 flex items-center justify-center rounded-full bg-[#7D328D] text-white"
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-20 h-20 object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mt-4 transition-transform duration-300 group-hover:scale-105">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
                <motion.div
                  className="w-16 h-1 bg-[#7D328D] rounded-full mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: feature.delay + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
