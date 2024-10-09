export default function SubscribePage() {
  return (
    <>
      {/* Clients section start */}
      <section
        id="clients"
        className="pt-36 pb-32 bg-slate-700 dark:bg-slate-300"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                BerLangganan
              </h4>
              <h2 className="font-bold text-white text-2xl mb-4 md:text-3xl lg:text-4xl  dark:text-dark">
                Beberapa mitra yang kami berlangganan
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Kolaborasi yang Berhasil dan Mitra Kerja Terpercaya.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <img src="https://www.cdnlogo.com/logos/h/92/honda.svg" />
              </a>
              <a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <img src="https://www.cdnlogo.com/logos/y/68/yamaha.svg" />
              </a>
              <a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <img src="./img/irc.png" alt="" />
              </a>
              <a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
              >
                <img src="./img/federal-oil-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Clients section end */}
    </>
  );
}
