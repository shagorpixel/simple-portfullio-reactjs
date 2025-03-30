const About = () => {
    return (
        <section className=" px-3 text-center bg-black py-14 text-white space-y-8 max-w-[1800px] mx-auto">
          <div className=" max-w-[810px] mx-auto">
              <h2 className=" font-bold text-4xl leading-[150%] mb-4">About Me</h2>
              <p className=" font-normal text-base ">I'm John Smith, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.</p>
          </div>
          <div className=" max-w-5xl mx-auto grid md:grid-cols-3 grid-cols-1 space-y-5 md:space-y-0">
              <div>
                <h2 className=" text-6xl leading-[150%] font-bold text-[#FFD4D0]">502</h2>
                <p className=" text-lg font-bold leading-[130%]">Projects Done</p>
              </div>
              <div>
                <h2 className=" text-6xl leading-[150%] font-bold text-[#FFD4D0]">10+</h2>
                <p className=" text-lg font-bold leading-[130%]">Years of Experience</p>
              </div>
              <div>
                <h2 className=" text-6xl leading-[150%] font-bold text-[#FFD4D0]">273+</h2>
                <p className=" text-lg font-bold leading-[130%]">Clients Served</p>
              </div>
          </div>
        </section>

    );
};

export default About;