import { FaGithub, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-secondaryAccent" id="contact">
      <div className="lg:mx-32  py-8">
        <div className="flex justify-center items-center ">
          <a
            href="https://github.com/deepikasainju/Kidney-stone-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-4 hover:underline md:mr-20 text-white"
          >
            <FaGithub className="mr-3" /> GitHub repository
          </a>
          <div className="flex items-center  mr-4 hover:underline md:mr-20">
            <FaEnvelope className="mr-3  text-white " />
            <span className="text-white">binisha4200@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
