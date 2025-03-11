import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  const labelsData = [
    {
      lat: 43.6629, // Toronto
      lng: -79.3957,
      text: "University of Toronto",
      color: "white",
      size: 20,
    },
    {
      lat: 40.6068, // Lehigh
      lng: -75.3782,
      text: "Lehigh University",
      color: "yellow",
      size: 20,
    },
  ];

  const arcsData = [
    {
      startLat: 43.6629, // Toronto
      startLng: -79.3957,
      endLat: 40.6068, // Lehigh
      endLng: -75.3782,
      color: ["cyan"],
      altitude: 100,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("snowsyc524@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (globeRef.current) {
      setTimeout(() => {
        globeRef.current.pointOfView(
          { lat: 43.6629, lng: -79.3957, altitude: 1.5 },
          2000
        );
      }, 100);
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/avatar.webp"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Yichen Shen 👋</p>
              <p className="grid-subtext">
                With a strong academic background and hands-on experience, I
                have refined my expertise in both frontend and backend
                development, crafting dynamic, responsive, and user-friendly web
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/techstack.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in frontend (React, Vue, Next.js) and backend
                (Node.js, Python, Express, MongoDB, SQL). Also, I work with AI
                integration, cloud automation (AWS, Azure), and Terraform to
                build scalable, efficient systems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                ref={globeRef}
                height={1500}
                width={500}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={labelsData}
                arcsData={arcsData}
                arcStroke={0.5}
                arcAltitudeAutoScale={6}
                focusAnimationDuration={1000}
                focusDistanceRadiusScale={2}
              />
            </div>
            <div>
              <p className="grid-headtext">Education</p>
              <p className="grid-subtext">
                M.S. - University of Toronto (2024)
              </p>
              <p className="grid-subtext text-gray-400">Applied Computing</p>

              <p className="grid-subtext mt-2">
                B.S. - Lehigh University(2022)
              </p>
              <p className="grid-subtext text-gray-400">
                Computer Science & Cognitive Science
              </p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving complex problems, optimizing systems, and
                building seamless experiences. I'm passionate about AI-driven
                development, automation, and 3D technologies, constantly
                learning new tools to push innovation. For me, coding isn’t just
                about writing code—it’s about creating smarter, more impactful
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  snowsyc524@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
