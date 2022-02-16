import { FunctionComponent, useState } from "react";
import { IProject } from "../types";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { SiTata, SiAccenture } from "react-icons/si";
// TODO Github
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
    id,
    client,
    client_Icon,
    company,
    company_Icon,
    category,
    duration,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <>
      {showDetail !== id && (
        <div>
          <Image
            width="300"
            height="150"
            src={image_path}
            layout="responsive"
            alt={name}
            onClick={() => setShowDetail(id)}
            className="cursor-pointer "
            quality={10}
          />
          <p className="my-2 text-center">{name}</p>
        </div>
      )}
      {showDetail === id && (
        <div className="relative top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:absolute md:p-10 dark:bg-black-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-gray-100 "
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              {company && (
                <a
                  href={github_url}
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 "
                >
                  {company === "TCS" ? <SiTata /> : <SiAccenture />}{" "}
                  <span>{company}</span>
                </a>
              )}
              <a
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
              >
                <span>{client}</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {duration}
            </motion.h3>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base font-medium"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
