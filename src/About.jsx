import React, { useEffect, useState } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.querySelector('.about-animation');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen mt-16">
            <h1 className="mt-16 ml-12 xl:text-2xl font-playfair font-custom text-base uppercase">
                ABOUT ME
            </h1>
            <div className="flex">
                <div className={`about-animation transform transition-transform duration-1000 delay-200 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
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
    <div className="flex flex-row-reverse items-center">
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

        </div>
    );
}

export default About;
