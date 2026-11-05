"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl font-medium hover:bg-gray-800 transition-all z-40"
      >
        Interested
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0e1320] w-full max-w-2xl rounded-2xl shadow-2xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto custom-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Contact Us
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Full Name *
                  </label>
                  <input
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Company *
                  </label>
                  <input
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    placeholder="Brand / Company Name"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Phone *
                  </label>
                  <input
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    placeholder="10 Digit Mobile Number"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Email *
                  </label>
                  <input
                    disabled
                    type="email"
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Looking For *
                  </label>
                  <select
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                  >
                    <option>Select Service</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Message
                  </label>
                  <textarea
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    rows={3}
                    placeholder="Describe your requirements..."
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    Website / Social Link
                  </label>
                  <input
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                    placeholder="Your website or IG handle"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-1 block">
                    How did you find us?
                  </label>
                  <select
                    disabled
                    className="w-full bg-[#0b0f1a] opacity-50 border border-gray-700 px-4 py-3 rounded-xl text-gray-400"
                  >
                    <option>Select</option>
                  </select>
                </div>

                <motion.button
                  type="button"
                  animate={{ y: [0, -6, 0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfeFXeuhRERgQ0EN063-MbJR3YHV3JRaaJygsg2_l1gQ0bIJg/viewform",
                      "_blank"
                    )
                  }
                  className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-lg py-3 rounded-xl font-semibold mt-4 shadow-lg"
                >
                  Fill Full Form
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        select option { background: #000 !important; }
        .custom-scroll { scrollbar-width: none; }
        .custom-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
