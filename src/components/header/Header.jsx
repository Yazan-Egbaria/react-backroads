const Header = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-hero-image bg-cover bg-no-repeat	bg-center relative header-overlay flex justify-center items-center">
      <div className="text-white flex justify-center items-center flex-col gap-4 z-50 text-center">
        <h1 className="text-7xl font-bold uppercase">continue exploring</h1>
        <p className="tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <button className="text-secondaryColor bg-white tracking-widest p-4 uppercase hover:bg-transparent hover:border hover:border-white transition-all duration-300 hover:text-white">
          Explore Tours
        </button>
      </div>
    </div>
  );
};

export default Header;
