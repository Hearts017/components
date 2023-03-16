export default function Cards() {
  return (
    <div className="bg-[#001128]">
      <div className="flex justify-center items-center h-screen">
        <div className="box relative w-[200px] h-[200px] bg-[#020223] overflow-hidden">
          <span className="before:content-[''] before:absolute before:bg-[conic-gradient(#04b0ee_20deg,transparent_120deg)] before:w-[300px] before:h-[300px] before:top-[-25%] before:left-[-25%] after:content-['tailwind'] after:text-white after:w-[94%] after:h-[94%] after:bg-[#020223] after:absolute after:top-[3%] after:left-[3%] after:flex after:justify-center after:items-center uppercase after:tracking-[2px] after:font-medium before:animate-fullSpin"></span>
        </div>
      </div>
    </div>
  );
}
