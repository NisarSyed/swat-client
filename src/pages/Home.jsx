const Home = () => {
  return (
    <>
      <div className="relative">
        <img src="banner.jpg" alt="Banner" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
          <div className="bg-opacity-0 p-4">
            <h1 className="sm:text-2xl md:text-4xl lg:text-4xl text-white font-bold">
              Welcome to our SWAT home page
            </h1>
            <p className="sm:text-xl md:text-2xl lg:text-2xl text-white">
              An IOBM Society
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
