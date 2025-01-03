import React from "react";

function Service() {
  return (
    <div className="bg-black text-white min-h-screen text-lg xl:mt-12" id="Service">
      <h1 className="xl:ml-12 xl:mt-8 xl:text-6xl py-12 sm:text-3xl anton-regular uppercase text-center">
        SERVICES
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 xl:p-10">
        {/* Card 1 */}
        <div className="row-span-2 bg-gradient-to-r from-red-500 to-yellow-300 rounded-lg shadow-lg p-4">
          {/* <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            loading="lazy"
            className="rounded-md w-auto h-auto"
          /> */}
          <p className="mt-2 text-black">
            <strong className="xl:text-6xl">Genres Handled:</strong>
            <ul className="list-disc list-inside mt-2 xl:text-center">
              <li className="xl:mt-10 xl:text-3xl anton-regular uppercase">Bollywood</li>
              <br className="hidden xl:block" />
              <li className="xl:text-3xl anton-regular uppercase">Kollywood</li>
              <br className="hidden xl:block" />
              <li className="xl:text-3xl anton-regular uppercase">Tollywood</li>
              <br className="hidden xl:block" />
              <li className="xl:text-3xl anton-regular uppercase">English Commercial</li>
              <br className="hidden xl:block" />
              <li className="xl:text-3xl anton-regular uppercase">English Retro</li>
              <br className="hidden xl:block" />
              <li className="xl:text-3xl anton-regular uppercase">Techno/Deep House</li>
            </ul>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-purple-500 to-red-300 rounded-lg shadow-lg p-4">
          {/* <img
            src="https://via.placeholder.com/200"
            alt="Placeholder"
            loading="lazy"
            className="rounded-md w-auto h-auto"
          /> */}
          <p className="mt-2 text-black">
            <strong>Corporate Events:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Worked for leading corporate companies:</li>
              <ul className="list-disc list-inside ml-4">
                <li className="anton-regular uppercase">Amazon</li>
                <li className="anton-regular uppercase">Saint Gobain</li>
                <li className="anton-regular uppercase">HCL</li>
                <li className="anton-regular uppercase">TCS</li>
              </ul>
              <li>
                Entertainer at college cultural programs like Ethiraj College
                for Women.
              </li>
            </ul>
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-green-500 to-blue-300 rounded-lg shadow-lg p-4">
          {/* <img
            src="https://via.placeholder.com/200"
            alt="Placeholder"
            loading="lazy"
            className="rounded-md w-auto h-auto"
          /> */}
          <p className="mt-2 text-black">
            <strong>Cocktail and Birthday Parties:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Event Management Companies Worked With:</li>
              <ul className="list-disc list-inside ml-4">
                <li className="anton-regular uppercase">3X Events</li>
                <li className="anton-regular uppercase">S3 Events</li>
                <li className="anton-regular uppercase">The Wedding Experience</li>
                <li className="anton-regular uppercase">Anyonya Events</li>
                <li className="anton-regular uppercase">Big Bang Events</li>
                <li className="anton-regular uppercase">Vibe Entertainments</li>
                <li className="anton-regular uppercase">Epitome Events</li>
                <li className="anton-regular uppercase">Event Full</li>
              </ul>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
