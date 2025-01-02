import React from 'react';

function About(){
    return (
        <div className="bg-black text-white min-h-screen">
            <h1 className="mt-16 ml-12 text-xl uppercase">
                ABOUT ME
            </h1>
            <div className="flex">
                <div>
                    <img src="./public/image.png" alt="" class="float-left" />
                    <p class="float-right">
                    Vishak chandrasekaran a Chennai based 
Disk jockey popularly known as DJ Vishak 
who is one of the promising DJ of current 
trend. 
He is very popular around private parties .
 He has done many private parties for 
popular actors like Actor Rajinikanth 
daughter soundarya’s wedding party ,
 Dhanush,Santhanu, director Shankar, 
director Anand Shankar and many leading 
celebrities in industries as the list goes on.
 Being born in a music family DJ vishak has 
an in-depth knowledge about music 
Anything related to music is his passion 
and not just work
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
