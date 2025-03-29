export default function ProjectCard() {
  return (
    <div className="bg-[#f4a81e] p-8 rounded-2xl w-full lg:w-[30rem]">
      <div className="mb-6 overflow-hidden rounded-3xl">
        <img
          className="object-cover h-[20rem] w-full"
          src="/images/zebra.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center text-center gap-8">
        <h4 className="font-[lora] text-2xl">Wild Welfare Tunisia</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo pariatur illum
          perferendis quo voluptatem nostrum natus molestias quae non.
        </p>

        <p>$99,00 raised</p>
        <input
          disabled
          type="range"
        />
        <button>Learn More</button>
      </div>
    </div>
  );
}
