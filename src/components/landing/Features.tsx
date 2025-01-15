import { Check, Trophy, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Trophy,
    title: "Competition Management",
    description: "Easily organize and manage weekly competitions with automated scoring and leaderboards.",
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Handle memberships, roles, and permissions across multiple golf clubs effortlessly.",
  },
  {
    icon: Calendar,
    title: "Event Scheduling",
    description: "Plan and schedule events with integrated calendars and automatic notifications.",
  },
  {
    icon: Check,
    title: "Real-time Updates",
    description: "Keep members informed with instant updates on scores, rankings, and upcoming events.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-golf-primary mb-4">
            Everything Your Golf Club Needs
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed specifically for social golf clubs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-gray-200 hover:border-golf-accent transition-colors"
            >
              <feature.icon className="w-12 h-12 text-golf-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};