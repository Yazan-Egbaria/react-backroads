import Headline from "../headline/Headline";

const About = () => {
  return (
    <div className="flexColSection">
      <Headline firstWT="About" secondWT="US" />
      <div className="flex gap-8">
        <div className=" relative border-image">
          <img
            src="assets/about.jpeg"
            alt="Beach photo"
            className="w-[600px]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold tracking-widest text-primaryColor text-2xl">
            Explore The Difference
          </h2>
          <p className="text-thirdColor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam
            <br />
            harum nam cumque temporibus explicabo dolorum sapiente odio unde
            dolor?
          </p>
          <p className="text-thirdColor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam
            <br />
            harum nam cumque temporibus explicabo dolorum sapiente odio unde
            dolor?
          </p>
          <button className="text-white bg-secondaryColor tracking-widest py-2 font-light px-2 uppercase hover:bg-transparent hover:border hover:border-secondaryColor transition-all duration-300 hover:text-secondaryColor w-fit">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
