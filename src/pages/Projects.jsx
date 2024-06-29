const Projects = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet purus urna. Sed nec risus vel mi ultrices bibendum.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">Project 2</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet purus urna. Sed nec risus vel mi ultrices bibendum.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">Project 3</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet purus urna. Sed nec risus vel mi ultrices bibendum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
