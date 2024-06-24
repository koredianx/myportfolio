import React from 'react'
import project1Image from '../images/pwork1.jpg'
import project2Image from '../images/calpic.png'
import project3Image from '../images/pwork1.jpg'


const Projects = () => {
    return (
      <section id="projects" className="projects bg-gray-100 text-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="project bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project1Image} alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Project 1</h3>
                <p className="mt-2">My Todo Initiative.</p>
              </div>
            </div>
            <div className="project bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project2Image} alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Project 2</h3>
                <p className="mt-2">My Simple Calculator.</p>
              </div>
            </div>
            <div className="project bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project3Image} alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Project 3</h3>
                <p className="mt-2">My Ecomerce Undertaking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;