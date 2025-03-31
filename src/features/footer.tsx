export default function Footer() {
  return (
    <footer className="text-white p-8">
      <div className="mb-8 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-center items-center mb-8">
          <h4 className="font-[lora] text-2xl lg:text-3xl mb-4">Stay in Touch</h4>
          <form>
            <input type="text" />
            <button>Subscribe</button>
          </form>
        </div>

        <div className="text-center text-gray-200 lg:text-right">
          <p>Wild Animals UK (Ltd)</p>
          <p>Based: Floor 10, Station Road,</p>
          <p>City: Crawley,</p>
          <p>County: East Sussex,</p>
          <p>Postcode: RH10 1RT</p>
        </div>
      </div>

      <nav className="flex gap-4 items-center justify-center lg:justify-end">
        <a href="#">Home</a>
        <a href="#">Our Work</a>
        <a href="#">News</a>
        <a href="#">About Us</a>
        <a href="#">Contact US</a>
      </nav>
    </footer>
  );
}
