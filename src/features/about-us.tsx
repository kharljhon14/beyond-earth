export default function AboutUs() {
  return (
    <section>
      <div className="bg-[#615f36] w-full lg:h-[34rem] rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:rounded-l-2xl overflow-hidden w-full h-full">
          <img
            className="object-cover w-full h-full pointer-events-none"
            src="/images/hero.jpg"
            alt="Rhinos"
          />
        </div>
        <div className="w-full p-12 text-white flex h-full justify-center flex-col gap-6">
          <h2 className="text-2xl lg:text-5xl mb-4 font-[lora]">
            We are a voice for all animals that share our world
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero facere nam
            modi! Consequuntur voluptatum fugit minima porro, natus at.
          </p>
          <div>
            <button>More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
