export default function ProjectCard() {
  return (
    <div className="bg-[#f4a81e] overflow-hidden rounded-2xl w-full max-w-lg">
      <div className="mb-6 overflow-hidden ">
        <img
          className="object-cover w-full"
          src="/images/zebra.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="p-6 lg:p-8 flex flex-col items-center text-center gap-8">
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
    </div>
  );
}
