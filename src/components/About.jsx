import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-lg md:text-xl mt-8 md:mt-20">
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            deserunt illum mollitia officiis qui exercitationem perferendis
            neque quasi a recusandae necessitatibus tempora iusto! Blanditiis
            error iste, totam fugiat recusandae rerum laborum perferendis
            molestiae aperiam asperiores nemo.
          </p>

          <p>
            Magni dolor maxime debitis vitae, eaque hic ab mollitia
            voluptatibus, a nostrum eveniet laborum!
          </p>
        </div>

        <div className="text-lg md:text-xl mt-8">
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur, vel similique sint, nobis aspernatur ut praesentium
            explicabo ipsam aliquid quasi laboriosam et culpa possimus
            repudiandae quisquam ullam maiores ab unde.
          </p>

          <p>
            Fugiat odio mollitia nemo alias. Commodi facilis atque nulla vero
            voluptatem explicabo. Quibusdam, magni quo! Eum cupiditate debitis
            labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
