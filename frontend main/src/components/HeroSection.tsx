const HeroSection = () => {
  return (
    <section className="bg-primary ">
      <div className="flex max-w-screen-xl px-4 py-20 md:mx-20 lg:mx-32  items-center ">
        <div className="mr-auto">
          <h1 className="max-w-lg md:max-w-xl  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Empowering Precision in Kidney Stone Detection
          </h1>
          <p className="lg:max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Fast, Reliable, and AI-driven Insights for Better Health
          </p>

          <a
            href="#prediction"
            className="bg-accent inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg  hover:bg-secondaryAccent "
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden md:flex">
          <img src="src\assets\kidney1.png" alt="kidney" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
