import ProjectCard from './project-card';

export default function Projects() {
  return (
    <section className="my-8 ">
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl font-[lora] mb-4">Our Lastest Projects</h2>
        <p className="text-lg text-amber-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, mollitia.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 md:flex-row lg:justify-between justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
