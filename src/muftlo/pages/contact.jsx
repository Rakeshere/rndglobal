
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    lookingFor: "",
    message: "",
    social: "",
    findUs: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfeFXeuhRERgQ0EN063-MbJR3YHV3JRaaJygsg2_l1gQ0bIJg/formResponse";

    const formPayload = new FormData();

    formPayload.append("entry.2005620554", formData.fullName);
    formPayload.append("entry.1045781291", formData.email);
    formPayload.append("entry.1065046570", formData.phone);
    formPayload.append("entry.1166974658", formData.company);
    formPayload.append("entry.839337160", formData.lookingFor);
    formPayload.append("entry.1730421540", formData.message);
    formPayload.append("entry.41709883", formData.social);
    formPayload.append("entry.1943891604", formData.findUs);

    await fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formPayload,
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen text-white mt-24 px-6 md:px-20">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white text-black rounded-2xl px-4 py-5 shadow-xl max-w-md text-center"
            >
              <h2 className="text-2xl font-bold mb-1">Thank You!</h2>
              <p className="text-gray-700">
                Our team will reach out to you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 bg-black text-white cursor-pointer px-6 py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Connect with <span className="text-blue-500">us</span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Our incredible team brings a world of creativity into your business.
            Contact us to learn more about the best digital marketing strategies
            tailored for your brand.
          </p>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-1">
              Phone Number
            </h3>
            <p className="text-gray-300">IND +91 7877731096</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-1">E-mail</h3>
            <p className="text-gray-300">info@muftlo.com</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-1">
              Office Address
            </h3>
            <p className="text-gray-300">
              E45A, Garden Street, near Fort Restaurant, Lal Bahadur Nagar,
              Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018
            </p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-2 md:p-7 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 mb-10">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                What service are you interested in? *
              </label>
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                required
              >
                <option value="">Select</option>
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Website Development">Website Development</option>
                <option value="Branding & Strategies">
                  Branding & Strategies
                </option>
                <option value="SEO">SEO</option>
                <option value="Google Ads / Meta Ads">
                  Google Ads / Meta Ads
                </option>
                <option value="Content Strategy">Content Strategy</option>
                <option value="Video Production">Video Production</option>
                <option value="360 Marketing">360 Marketing</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Your Message / Requirement
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Website / Social Link
              </label>
              <input
                type="text"
                name="social"
                value={formData.social}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                How did you find us?
              </label>
              <select
                name="findUs"
                value={formData.findUs}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
              >
                <option value="">Select</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Returning Client">Returning Client</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
