

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/muftlo/ui/card";
import { Badge } from "@/muftlo/ui/badge";

const workflowSteps = [
  {
    id: "discovery",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, and project requirements to create a comprehensive strategy.",
    icon: <MessageSquare className="w-6 h-6" />,
    deliverables: [
      "Project roadmap",
      "User personas",
      "Technical specifications",
    ],
  },
  {
    id: "design",
    title: "Design & Prototyping",
    description:
      "Our design team creates stunning visuals and interactive prototypes that bring your vision to life.",
    icon: <Palette className="w-6 h-6" />,
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system"],
  },
  {
    id: "development",
    title: "Development & Integration",
    description:
      "We build your solution using cutting-edge technologies, ensuring scalability and performance.",
    icon: <Code className="w-6 h-6" />,
    deliverables: ["Frontend app", "Backend APIs", "Database setup"],
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing across devices and browsers to ensure a flawless user experience.",
    icon: <TestTube className="w-6 h-6" />,
    deliverables: ["Test reports", "Bug fixes", "Optimization"],
  },
  {
    id: "launch",
    title: "Launch & Deployment",
    description:
      "We deploy your solution to production and ensure everything runs smoothly from day one.",
    icon: <Rocket className="w-6 h-6" />,
    deliverables: [
      "Production deployment",
      "Launch checklist",
      "Go-live support",
    ],
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description:
      "Ongoing support and maintenance to keep your solution running at peak performance.",
    icon: <HeadphonesIcon className="w-6 h-6" />,
    deliverables: ["24/7 monitoring", "Regular updates", "Technical support"],
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="relative py-5 text-white overflow-hidden">
      <div className="w-full mx-auto relative">
        <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-[2px] bg-gray-800 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 relative px-15 z-10">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {index < workflowSteps.length - 1 && (
                <div className="lg:hidden absolute bottom-[-32px] left-[50%] w-[2px] h-[40px] bg-gray-800 transform -translate-x-1/2 z-0" />
              )}

              <Card
                className={cn(
                  "relative px-4 py-5 h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 z-10",
                  activeStep === step.id && ""
                )}
                onClick={() =>
                  setActiveStep(activeStep === step.id ? null : step.id)
                }
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center justify-center w-8 h-8 p-2 rounded-full bg-blue-600 text-white">
                    {step.icon}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs text-gray-300 border-gray-700"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Badge>
                </div>

                <h3 className="text-lg text-gray-100 font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">{step.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
