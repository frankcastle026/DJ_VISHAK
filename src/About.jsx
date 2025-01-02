import React, { useEffect, useState } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState({
        firstSection: false,
        secondSection: false,
        thirdSection: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.getAttribute("data-section");
                    setIsVisible((prev) => ({
                        ...prev,
                        [sectionName]: true,
                    }));
                }
            },
            { threshold: 0.3 } 
        );

        
        const elements = document.querySelectorAll('.about-animation');
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen mt-16">
            <h1 className="xl:ml-12 xl:text-5xl sm:2xl anton-regular  uppercase">
                ABOUT ME
            </h1>

            
            <div className="flex">
                <div
                    className={`about-animation transform transition-transform duration-1000 delay-200 ${
                        isVisible.firstSection ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    data-section="firstSection"
                >
                    <img
                        src="/image.png"
                        alt=""
                        className="float-left xl:ml-12 xl:mt-12 sm:mr-5 w-40 sm:w-48 md:w-64 lg:w-80"
                    />
                    <br className="hidden xl:block" />
                    <br className="hidden xl:block" />
                    <br className="hidden xl:block" />
                    <p className="xl:mt-12 sm:ml-5 font-playfair font-custom text-base xl:text-2xl">
                        What’s up, party people? I’m DJ Vishak, hailing from Chennai, here to turn your nights into unforgettable
                        experiences! Known as one of the most sought-after DJs in the scene, I bring the energy, the beats, and the
                        vibe to every private party I spin at.
                    </p>
                </div>
            </div>

            
            <div className="block mt-12">
                <div
                    className={`about-animation flex flex-row-reverse items-center transform transition-transform duration-1000 delay-200 ${
                        isVisible.secondSection ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    data-section="secondSection"
                >
                    <img
                        src="./image2.png"
                        alt=""
                        className="w-40 sm:w-48 md:w-64 lg:w-80 sm:mr-5 xl:ml-12 xl:mt-12"
                    />
                    <div className="text-white mt-8 sm:ml-5 xl:mt-12">
                        <p className="font-playfair font-custom text-base xl:text-2xl">
                            I’ve had the honor of spinning tracks for some of the biggest names out there—Soundarya Rajinikanth’s
                            wedding, Dhanush, Santhanu, director Shankar, Anand Shankar, and a star-studded list that keeps growing.
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="flex mt-12">
                <div
                    className={`about-animation transform transition-transform duration-1000 delay-200 ${
                        isVisible.thirdSection ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    data-section="thirdSection"
                >
                    <img
                        src="/image3.png"
                        alt=""
                        className="float-left xl:ml-12 xl:mt-12 sm:mr-5 w-40 sm:w-48 md:w-64 lg:w-80"
                    />
                    <br className="hidden xl:block" />
                    <br className="hidden xl:block" />
                    <br className="hidden xl:block" />
                    <p className="xl:mt-12 sm:ml-5 font-playfair font-custom text-base xl:text-2xl">
                        Coming from a family deeply rooted in music, it’s more than just a career for me—it’s a way of life. Music
                        is my passion, my drive, and my art. If you’re looking for the ultimate party experience, you know I’ve got
                        the soundtrack to make it unforgettable. Let’s keep the energy alive and the beats rolling! 🎧🎶
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
