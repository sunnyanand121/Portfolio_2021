import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";
const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Sunny Anand | Web Developer</title>
      </Head>
      <h4 className="my-3">
        <p>
          Dynamic and creative frontend developer with over 6 years of
          experience in design and devlopment of web application, I am a hard
          working and dedicated professional front-end developer interface
          designer with a keen eye for detail and a determination to deliver the
          very highest quality within budget and on time.{" "}
        </p>
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const BASE_URL = process.env.VERCEL_URL;
  return { props: { BASE_URL: BASE_URL || null } };
};

export default About;
