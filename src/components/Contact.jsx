import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { github, linkdin } from "../assets";
import { Link } from "react-router-dom";


import { useRef, useState } from "react";
import { link } from "framer-motion/client";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_yj5o2dq",
        "template_ikufnan",
        {
          from_name: form.name,
          to_name: "Deepak Kumar",
          from_email: form.email,
          to_email: "deepaksingh451181@gmail.com",
          message: form.message,
        },
        "gf_kTlhn0zL1wHjIL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <div className=" inset-0 flex justify-end m-3 card-img_hover">
              <div
              onClick={() => window.open("https://github.com/Deepak4511", "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

               <div
                onClick={() => window.open("https://www.linkedin.com/in/deepak-kumar-kushwaha-80021a163/", "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ms-3"
              >
                <img
                  src={linkdin}
                  alt="linkdin"
                  className="w-1/2 h-1/2 object-contain rounded-full"
                />
              </div>

            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
