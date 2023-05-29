import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex justify-center items-center`}>
    <div
      className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center gap-5`}
    >
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className='text-[#915EFF]'>Marouane</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I develop user interfaces <br className='sm:block hidden' />
        and web applications
      </p>
    </div>
  
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  </section>
  
  );
};

export default Hero;
