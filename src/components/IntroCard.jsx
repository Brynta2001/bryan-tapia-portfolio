import { motion } from "framer-motion";

export const IntroCard = () => {
  return (
    <motion.a
      href="#"
      whileHover={"groupHover"}
      variants={{
        groupHover: {
          scale: 0.97,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
      className="rounded-3xl dark:bg-gray-900 aspect-2/1 col-span-3 row-span-2 content-center flex"
    >
      <div className="grid grid-cols-3">
        <div className="col-span-2 content-center">
          <div className="text-5xl md:text-6xl 2xl:text-6xl 2xl: m-6 md:ml-16 ml-10 md:m-8 font-nunito font-bold">
            Marcelo Tapia
          </div>
          <div className="text-2xl md:text-3xl 2xl:text-3xl 2xl:mt-8 m-6 md:ml-16 ml-10 md:m-8">
            Software Engineer | CCNA
          </div>
          <div className="text-2xl md:text-3xl 2xl:text-2xl 2xl:mt-12 m-6 md:ml-16 ml-10 md:m-8 font-extralight">
            I&apos;m a software engineer with a passion for <strong>software development 
            and networking</strong>. I&apos;m currently learning about different
            technologies and good practices in order to improve the way I code.
          </div>
        </div>
        <div className="col-span-1 content-center mr-10 2xl:mr-16 md:mr-10">
          {/* <img
            src="/images/animated_photo.png"
            className="xl:scale-100 rounded-r-3xl"
          /> */}
          <img
            src="/images/photo.jpg"
            className="xl:scale-125 rounded-full"
          />
        </div>
      </div>
    </motion.a>
  );
};
