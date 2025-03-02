import React from "react";

const About = () => {
  return (
    <div className="flex flex-col max-w-xlg w-full mt-8">
      <h1 className="font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-500 dark:text-white">
        About
      </h1>
      <p className="my-2 text-base font-normal text-stone-50 leading-relaxed">
        A Frontend Developer who loves building sleek, functional apps. I
        graduated from San Francisco State University with a degree in Computer
        Science. I thrive on bringing ideas to life, whether it's a web or
        mobile application. My passion lies in creating intuitive,
        high-performance user interfaces that enhance user experiences.
        <br /> <br />
        With a strong foundation in JavaScript, React, and modern front-end
        technologies, I enjoy tackling complex problems, optimizing performance,
        and delivering polished applications. Beyond coding, I love playing in a
        basketball rec league on Sundays and occasionally competing in badminton
        tournaments.
        <br /> <br />
        Let’s build something awesome! 🚀
      </p>
    </div>
  );
};

export default About;
