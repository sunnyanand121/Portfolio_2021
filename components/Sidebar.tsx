import { AiFillLinkedin,AiFillInstagram,AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Image
        width="128"
        height="128"
        src="/images/me.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Sunny</span> Anand
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200">
        Senior Software Engineer
      </p>
      {/* Resume */}
      <a
        href="/assets/Resume_Sunny_Anand.pdf"
        download="Resume_Sunny_Anand.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-2/3 mx-auto my-5 text-red">
        <a href="https://www.instagram.com/sunnyanand22/" target="_blank">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sunny-anand-9aa906105" target="_blank">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        {/* <a href="" target="_blank">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center my-2">
          <GoLocation className="mr-2" /><span> Pune, Maharashtra, India </span>
        </div>
        <div className="flex items-center justify-center my-2">
        <AiOutlineMail className="mr-2" /><span>  letsunnybe99@gmail.com </span>
        </div>
        <div className="flex items-center justify-center my-2">
        <AiOutlinePhone className="mr-2"/> +91-7702574449
        </div>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:letsunnybe99@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeMode}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;
