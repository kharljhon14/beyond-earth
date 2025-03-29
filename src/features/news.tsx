export default function News() {
  return (
    <section className="rounded-2xl overflow-hidden">
      <div className="bg-white p-6 lg:p-12">
        <div className="flex items-baseline justify-between border-b border-b-gray-400 pb-2 mb-6 lg:mb-12">
          <h2 className="font-[lora] text-2xl lg:text-4xl">Latest News</h2>
          <a
            className="underline text-gray-500 text-sm lg:text-base"
            href="#"
          >
            View All
          </a>
        </div>

        <div className="flex gap-8 lg:gap-12 flex-col justify-between flex-wrap lg:flex-row">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-full lg:w-auto">
              <img
                className="aspect-square object-cover w-48 h-48"
                src="/images/zebra.jpg"
              />
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex lg:items-center gap-1 lg:gap-4 flex-col lg:flex-row mb-4">
                <div className="bg-[#f4a81e] w-fit p-2 rounded-md">
                  <p className="uppercase font-semibold text-xs">NewsLetter</p>
                </div>
                <p className="text-sm text-gray-500">Jan 12,2025</p>
              </div>

              <h3 className="text-lg lg:text-3xl font-[lora] lg:max-w-sm">
                Joining Up For The Benefit Of Zebras
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-full lg:w-auto">
              <img
                className="aspect-square object-cover w-48 h-48"
                src="/images/zebra.jpg"
              />
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex lg:items-center gap-1 lg:gap-4 flex-col lg:flex-row mb-4">
                <div className="bg-[#f4a81e] w-fit p-2 rounded-md">
                  <p className="uppercase font-semibold text-xs">NewsLetter</p>
                </div>
                <p className="text-sm text-gray-500">Jan 12,2025</p>
              </div>

              <h3 className="text-lg lg:text-3xl font-[lora] lg:max-w-sm">
                Joining Up For The Benefit Of Zebras
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-full lg:w-auto">
              <img
                className="aspect-square object-cover w-48 h-48"
                src="/images/zebra.jpg"
              />
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex lg:items-center gap-1 lg:gap-4 flex-col lg:flex-row mb-4">
                <div className="bg-[#f4a81e] w-fit p-2 rounded-md">
                  <p className="uppercase font-semibold text-xs">NewsLetter</p>
                </div>
                <p className="text-sm text-gray-500">Jan 12,2025</p>
              </div>

              <h3 className="text-lg lg:text-3xl font-[lora] lg:max-w-sm">
                Joining Up For The Benefit Of Zebras
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden w-full lg:w-auto">
              <img
                className="aspect-square object-cover w-48 h-48"
                src="/images/zebra.jpg"
              />
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex lg:items-center gap-1 lg:gap-4 flex-col lg:flex-row mb-4">
                <div className="bg-[#f4a81e] w-fit p-2 rounded-md">
                  <p className="uppercase font-semibold text-xs">NewsLetter</p>
                </div>
                <p className="text-sm text-gray-500">Jan 12,2025</p>
              </div>

              <h3 className="text-lg lg:text-3xl font-[lora] lg:max-w-sm">
                Joining Up For The Benefit Of Zebras
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4ba4e] p-6 lg:p-12 pb-14">
        <div className="border-b pb-3 mb-8">
          <h2 className="text-2xl mb-4 font-[lora]">
            Protecting an astounding diversity of species
          </h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nam!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="aspect-square object-cover"
                src="/images/zebra.jpg"
              />
            </div>
            <div className="bg-gray-800 rounded-3xl w-full h-full absolute inset-0 opacity-40"></div>
            <h4 className="absolute font-[lora] text-white bottom-8 text-2xl right-0 left-0 text-center">
              Wildlife
            </h4>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="aspect-square object-cover"
                src="/images/zebra.jpg"
              />
            </div>
            <div className="bg-gray-800 rounded-3xl w-full h-full absolute inset-0 opacity-40"></div>
            <h4 className="absolute font-[lora] text-white bottom-8 text-2xl right-0 left-0 text-center">
              Land
            </h4>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="aspect-square object-cover"
                src="/images/zebra.jpg"
              />
            </div>
            <div className="bg-gray-800 rounded-3xl w-full h-full absolute inset-0 opacity-40"></div>
            <h4 className="absolute font-[lora] text-white bottom-8 text-2xl right-0 left-0 text-center">
              Community
            </h4>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="aspect-square object-cover"
                src="/images/zebra.jpg"
              />
            </div>
            <div className="bg-gray-800 rounded-3xl w-full h-full absolute inset-0 opacity-40"></div>
            <h4 className="absolute font-[lora] text-white bottom-8 text-2xl right-0 left-0 text-center">
              Leadership
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
