import React from 'react'
import pic from '../images/mypic.png'


const Home = () => {
  return (
    <section className="home bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-2/3">
          <h1 className="text-6xl font-bold mb-6">Adeoye Omokolade</h1>
          <p className="text-lg leading-relaxed">
            I am a passionate developer dedicated to bringing my clients' narratives to life through engaging and purposeful designs that not only meet but exceed expectations, ensuring every project is both visually stunning and functionally sound.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img 
            src={pic} 
            alt="Profile" 
            className="rounded-full w-48 h-48 object-cover md:w-64 md:h-64 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home