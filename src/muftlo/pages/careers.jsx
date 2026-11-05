
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Briefcase, Users, Zap } from "lucide-react";

export default function CareerPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contact: "",
    location: "",
    position: "",
    experience: "",
    company: "",
    currentCTC: "",
    expectedCTC: "",
    notice: "",
    resumeURL: "",
    portfolioURL: "",
    whyJoin: "",
    linkedin: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const benefits = [
    {
      icon: Zap,
      title: "Flexible Work",
      desc: "Remote-first culture with flexible work arrangements.",
    },
    {
      icon: Users,
      title: "Team Culture",
      desc: "Collaborative environment with regular team events.",
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      desc: "Learning budget and career development opportunities.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChangeField = (name, value) => {
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("entry.47462513", form.fullName);
      formData.append("entry.1320771824", form.email);
      formData.append("entry.58604647", form.contact);
      formData.append("entry.345663087", form.location);
      formData.append("entry.118269734", form.position);
      formData.append("entry.1446406695", form.experience);
      formData.append("entry.1075271523", form.company);
      formData.append("entry.1284267423", form.currentCTC);
      formData.append("entry.1299332172", form.expectedCTC);
      formData.append("entry.197604861", form.notice);
      formData.append("entry.160627999", form.resumeURL);
      formData.append("entry.1595832918", form.portfolioURL);
      formData.append("entry.2030398824", form.whyJoin);
      formData.append("entry.2097985814", form.linkedin);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdc7h_AaOiIarUBJaoitFe4aHuC5Kwb5dUTpBjpbyqP7Kz32Q/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setSubmitted(true);
      // setForm({
      //   fullName: "",
      //   email: "",
      //   contact: "",
      //   location: "",
      //   position: "",
      //   experience: "",
      //   company: "",
      //   currentCTC: "",
      //   expectedCTC: "",
      //   notice: "",
      //   resumeURL: "",
      //   portfolioURL: "",
      //   whyJoin: "",
      //   linkedin: "",
      // });

      // auto-close after 3s
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      // network errors won't show due to no-cors, but keep this
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-950/10 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4"
          >
            Join our talented team and help shape the future of digital
            innovation.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-1">
              Why Join Our Team?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We create an environment where smart people grow fast.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 backdrop-blur-md 
                  hover:border-blue-500/40 hover:bg-slate-800/70 transition-all duration-300 shadow-lg"
                >
                  <Icon className="w-10 h-10 mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-7">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-7"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1">
              Ready to Join Us?
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us about yourself — it only takes a minute.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 
            backdrop-blur-xl rounded-2xl p-5 shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <Input
                label="Full Name"
                value={form.fullName}
                onChange={(v) => handleChangeField("fullName", v)}
              />
              <Input
                label="Email Address"
                value={form.email}
                onChange={(v) => handleChangeField("email", v)}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <Input
                label="Contact Number"
                value={form.contact}
                onChange={(v) => handleChangeField("contact", v)}
              />
              <Input
                label="Current Location"
                value={form.location}
                onChange={(v) => handleChangeField("location", v)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Interested Role
              </label>
              <select
                name="position"
                value={form.position}
                onChange={(e) => handleChangeField("position", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/40 border border-slate-600/40 text-white"
              >
                <option value="">Select Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Marketing Executive">Marketing Executive</option>
                <option value="Content Writer">Content Writer</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Experience (in years)
              </label>

              <select
                value={form.experience}
                onChange={(e) =>
                  handleChangeField("experience", e.target.value)
                }
                className="w-full px-4 py-3 rounded-lg bg-slate-700/40 border border-slate-600/40 
               text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
              </select>
            </div>

            <Input
              label="Current Company"
              className="mb-6"
              value={form.company}
              onChange={(v) => handleChangeField("company", v)}
            />

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <Input
                label="Current CTC"
                value={form.currentCTC}
                onChange={(v) => handleChangeField("currentCTC", v)}
              />
              <Input
                label="Expected CTC"
                value={form.expectedCTC}
                onChange={(v) => handleChangeField("expectedCTC", v)}
              />
            </div>

            {/* Notice Period - SELECT */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Notice Period
              </label>
              <select
                name="notice"
                value={form.notice}
                onChange={(e) => handleChangeField("notice", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/40 border border-slate-600/40 text-white"
              >
                <option value="">Select Notice Period</option>
                <option value="Immediate">Immediate</option>
                <option value="1 week">1 week</option>
                <option value="15 week">15 week</option>
                <option value="30 days">30 days</option>
              </select>
            </div>

            <Input
              label="Resume URL"
              className="mb-6"
              value={form.resumeURL}
              onChange={(v) => handleChangeField("resumeURL", v)}
            />

            <Input
              label="Portfolio URL (optional)"
              className="mb-6"
              value={form.portfolioURL}
              onChange={(v) => handleChangeField("portfolioURL", v)}
            />

            <Input
              label="LinkedIn Profile"
              className="mb-6"
              value={form.linkedin}
              onChange={(v) => handleChangeField("linkedin", v)}
            />

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2">
                Tell Us About Yourself
              </label>
              <textarea
                rows={5}
                value={form.whyJoin}
                onChange={(e) => handleChangeField("whyJoin", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/40 border border-slate-600/40 text-white"
                placeholder="Why do you want to join us?"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center gap-2"
            >
              {loading ? "Submitting..." : "Apply"}{" "}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FULL-SCREEN THANK YOU MODAL */}
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
    </main>
  );
}

function Input({ label, value, onChange, className }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-slate-700/40 border border-slate-600/40 text-white"
        placeholder={label}
      />
    </div>
  );
}
