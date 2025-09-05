import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('siddhantpatil.ai.dev@gmail.com'); // <- your email here
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Intro Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Soniya</p>
              <p className="grid-subtext">
                I’m a Computer Science undergrad specializing in AI, Data Science, and Full Stack Development.
                Through internships and leadership roles, I’ve gained hands-on experience in machine learning,
                computer vision, and building scalable web platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools:
                <br /><br />
                <strong>Programming:</strong> Python, JavaScript, C++ <br />
                <strong>Frontend:</strong> React, Next.js, Tailwind CSS <br />
                <strong>Backend:</strong> Node.js, Express.js, MongoDB, SQL <br />
                <strong>AI/ML:</strong> TensorFlow, Scikit-learn, Pandas, NumPy, Computer Vision <br />
                <strong>Other Tools:</strong> Git/GitHub, APIs, AWS/GCP basics
              </p>
            </div>
          </div>
        </div>

        {/* Globe + Location Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 19.076, lng: 72.8777, text: 'Navi Mumbai, India', color: 'white', size: 15 }]} // <- your location
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m based in Navi Mumbai, India, and open to remote work, internships, and freelance opportunities worldwide.
                I thrive in hybrid and distributed team environments.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building impactful solutions through code.
                Whether it’s developing AI-driven models, creating robust web applications,
                or exploring cloud deployments, programming isn&apos;t just my profession—it&apos;s my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
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
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  soniya.231104@gmail.com
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
