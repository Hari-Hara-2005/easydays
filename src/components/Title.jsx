export default function TitleSection({
  titleLines = ["Simplify task management.", "Enhance focus."],
}) {
  return (
    <div className="relative flex items-center justify-center py-24 bg-[#090014] text-white ">
      <div className="relative border-t-[1px] border-gray-700 rounded-3xl  w-[85%] ">
        <div className="flex justify-center">
          <div
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="relative  rounded-lg w-[95%] max-w-5xl"
            style={{
              backgroundImage: 'url("/Img/glow_img.png")',
              backgroundPosition: "50% 130%",
              backgroundSize: "65%",
              height: "100px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-[-2px] left-1/2 transform -translate-x-1/2 w-[25%] h-[2px] bg-gradient-to-r from-transparent via-[#9BBFE3] to-transparent shadow-lg shadow-[#9BBFE3]"></div>
            <div className="text-center mt-12">
              <h1 className="flex flex-col gap-4 text-3xl font-[400] tracking-tight text-white md:text-4xl lg:text-[42px] font-montserrat">
                {titleLines.map((line, index) => (
                  <span key={index} className="leading-tight">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
