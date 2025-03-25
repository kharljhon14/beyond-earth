export default function Hero() {
  return (
    <section className="relative h-[40rem] flex items-center">
      <div className="md:rounded-2xl overflow-hidden absolute -z-40 w-full h-full">
        <img
          className="object-cover w-full h-full pointer-events-none"
          src="/images/hero.jpg"
          alt="Rhinos"
        />
        <div className="bg-gray-800  w-full h-full absolute inset-0 opacity-50"></div>
      </div>
      <div className="text-white p-6 lg:p-18">
        <div className="flex flex-col mb-12 lg:max-w-xl">
          <h1 className="text-3xl lg:text-7xl mb-4">Africa's Voice for Wildlife</h1>
          <p className="lg:text-xl font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus aliquam{' '}
          </p>
        </div>
        <button>Donate</button>
      </div>
    </section>
  );
}
