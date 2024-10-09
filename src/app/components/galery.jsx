export default function GaleryPage() {
  return (
    <>
      {/* Portfolio section start */}
      <section
        id="portfolio"
        className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Layanan
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4  md:text-4xl lg:text-5xl  dark:text-white">
                Layanan Kami
              </h2>
              <p className="font-medium text-md text-secondary">
                Kami menyediakan beragam jenis layanan yang kami tawarkan, mulai
                dari perawatan motor hingga perbaikan yang lebih kompleks.{" "}
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-10 p-4 md:w-1/2 ">
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/jual.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3  dark:text-white">
                Jual Sparepart
              </h3>
              <p className="font-medium text-base text-secondary">
                Jual spearpart motor menyediakan komponen vital seperti rem,
                rantai, filter oli dan lain lain untuk perawatan dan perbaikan
                motor, memastikan performa dan keamanan yang optimal.
              </p>
            </div>
            <div className="mb-10 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/oli.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3  dark:text-white">
                Ganti Oli
              </h3>
              <p className="font-medium text-base text-secondary">
                Proses penggantian oli melibatkan pengeluaran oli lama dari
                mesin kendaraan dan menggantinya dengan oli baru untuk menjaga
                performa dan keawetan mesin.
              </p>
            </div>
            <div className="mb-10 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/service.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3  dark:text-white">
                Service Motor
              </h3>
              <p className="font-medium text-base text-secondary">
                Layanan servis motor profesional menyediakan perawatan
                berkualitas untuk memastikan kinerja optimal dan keamanan
                kendaraan Anda.
              </p>
            </div>
            <div className="mb-10 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/depan.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3  dark:text-white">
                Bengkel Kami
              </h3>
              <p className="font-medium text-base text-secondary">
                mitra setia kendaraan Anda. Kunjungi bengkel kami sekarang untuk
                mendapatkan layanan terbaik untuk motor Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio section end */}
    </>
  );
}
