export default function HeroPage() {
  return (
    <>
      {/* Hero section start */}
      <section id="home" className="pt-24 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 text-awal">
              <h1 className="text-base font-semibold text-primary md:text-xl ">
                Hallo samua{" "}
                <img
                  className="inline-block mb-1"
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Light%20Skin%20Tone.png"
                  alt="Waving Hand Light Skin Tone"
                  width={25}
                  height={25}
                />
                , Kami
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                  Bengkel Salam Cetan
                </span>{" "}
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 mt-4 lg:text-2xl dark:text-white">
                Service Motor &amp;
                <span className="text-dark dark:text-secondary ">
                  jual sparepart motor
                </span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Bengkel motor rumahan, tempat perawatan dan modifikasi sepeda
                motor. dibangun sejak tahun 2000-an{" "}
                <span className="text-dark font-bold  dark:text-white">
                  Yups!
                </span>
              </p>
              <a
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out "
              >
                Hubungi Kami
              </a>
            </div>
            <div className="w-full self-end px-24 lg:w-1/2">
              <div className="mt-10 relative lg:mt-9 lg:right-0">
                <img
                  src="img/mekanik.png"
                  alt="bapak.png"
                  className="max-w-full w-96 h-auto rounded-xl transition duration-300 hover:scale-110"
                />
                {/* <span class="sm:scale-125 absolute -bottom-0  left-1/2 -translate-x-1/2 lg:inline-block"
                      id="svg-container">
                      <svg class="w-48 lg:w-96 h-auto lg:h-80" viewBox="0 0 200 200"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill="#14b8a6"
                              d="M49.3,-60.8C63.7,-57.3,75.3,-42.8,77.7,-27.2C80.1,-11.6,73.3,5,65.7,19.2C58.2,33.4,49.8,45.2,38.7,55.1C27.6,64.9,13.8,72.6,1.8,70.2C-10.3,67.8,-20.5,55.1,-33.3,45.8C-46,36.6,-61.2,30.7,-64.4,21C-67.5,11.2,-58.5,-2.4,-54.4,-18.5C-50.4,-34.6,-51.2,-53.2,-43,-58.7C-34.8,-64.3,-17.4,-56.8,0,-56.9C17.4,-56.9,34.8,-64.3,49.3,-60.8Z"
                              transform="translate(100 100) scale(1.1)" />
                      </svg>
                  </span> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}
    </>
  );
}
