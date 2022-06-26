import React, { useEffect, useState } from "react";
import sanityClient from "../Client";
const Projects = () => {
  const [projectData, setPRojectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        discription,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setPRojectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to My project page
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-blue-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener norefferrer noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span className="font-bold">Company</span>: {project.place}
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700  leading-relaxed">
                    {project.discription}
                  </p>
                  <a
                    rel="noopener noreferrer"
                    href={project.link}
                    target="_blank"
                    className="text-blue-700 font-bold hover:underline hover:text-blue-400 text-xl"
                  >
                    View the project
                    <span role={"img"} aria-label="right-pointer">
                      {" "}
                      👉🏼
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
