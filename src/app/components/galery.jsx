import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GaleryPage() {
  const [ref1, inView1] = useInView({  threshold: 0.2 });
  const [ref2, inView2] = useInView({  threshold: 0.2 });
  const [ref3, inView3] = useInView({  threshold: 0.2 });
  const [ref4, inView4] = useInView({  threshold: 0.2 });

  return (
    <>
      {/* Portfolio section start */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-semibold text-lg text-primary mb-2"
              >
                Layanan
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-bold text-dark text-3xl mb-4 md:text-4xl lg:text-5xl dark:text-white"
              >
                Layanan Kami
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-medium text-md text-secondary"
              >
                Kami menyediakan beragam jenis layanan yang kami tawarkan, mulai dari perawatan motor hingga perbaikan yang lebih kompleks.
              </motion.p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -100 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 p-4 md:w-1/2"
            >
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/jual.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Jual Sparepart</h3>
              <p className="font-medium text-base text-secondary">
                Jual spearpart motor menyediakan komponen vital seperti rem, rantai, filter oli dan lain lain untuk perawatan dan perbaikan motor.
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 p-4 md:w-1/2"
            >
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/oli.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Ganti Oli</h3>
              <p className="font-medium text-base text-secondary">
                Proses penggantian oli melibatkan pengeluaran oli lama dari mesin kendaraan dan menggantinya dengan oli baru.
              </p>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: -100 }}
              animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-10 p-4 md:w-1/2"
            >
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/service.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Service Motor</h3>
              <p className="font-medium text-base text-secondary">
                Layanan servis motor profesional menyediakan perawatan berkualitas untuk memastikan kinerja optimal dan keamanan kendaraan Anda.
              </p>
            </motion.div>

            <motion.div
              ref={ref4}
              initial={{ opacity: 0, x: 100 }}
              animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-10 p-4 md:w-1/2"
            >
              <div className="rounded-md shadow-md overflow-hidden hover:scale-110 transition duration-300 hover:shadow-slate-500">
                <img src="./img/depan.jpg" alt="foto" width="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">Bengkel Kami</h3>
              <p className="font-medium text-base text-secondary">
                Kunjungi bengkel kami sekarang untuk mendapatkan layanan terbaik untuk motor Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Portfolio section end */}
    </>
  );
}
