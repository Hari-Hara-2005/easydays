import { motion } from "framer-motion";

export default function TitleComponent({ title }) {
  return (
    <div className="container mx-auto px-4 text-center py-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        style={{ color: "#7D328D" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-16 sm:w-24 h-1 bg-[#7D328D] rounded-full mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
