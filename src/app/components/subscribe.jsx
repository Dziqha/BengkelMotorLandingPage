import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SubscribePage() {
  // Menggunakan intersection observer untuk memantau apakah elemen dalam viewport
  const [ref, inView] = useInView({ // Animasi hanya berjalan sekali
    threshold: 0.8, // Jalankan ketika 10% dari elemen sudah terlihat
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Clients section start */}
      <section
        id="clients"
        className="pt-36 pb-32 bg-slate-700 dark:bg-slate-300"
        ref={ref} // Menambahkan ref ke section ini agar intersection observer bekerja
      >
        <div className="container">
          <div className="w-full px-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Animasi berjalan saat elemen terlihat
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="mx-auto text-center mb-16"
            >
              <h4 className="font-semibold text-lg text-primary mb-2">
                BerLangganan
              </h4>
              <h2 className="font-bold text-white text-2xl mb-4 md:text-3xl lg:text-4xl dark:text-dark">
                Beberapa mitra yang kami berlangganan
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Kolaborasi yang Berhasil dan Mitra Kerja Terpercaya.
              </p>
            </motion.div>
          </div>
          <div className="w-full px-4">
            <motion.div
              className="flex flex-wrap items-center justify-center"
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Sama dengan di atas, animasi hanya ketika terlihat
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
                variants={fadeInUp}
              >
                <img src="https://www.cdnlogo.com/logos/h/92/honda.svg" />
              </motion.a>
              <motion.a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
                variants={fadeInUp}
              >
                <img src="https://www.cdnlogo.com/logos/y/68/yamaha.svg" />
              </motion.a>
              <motion.a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
                variants={fadeInUp}
              >
                <img src="./img/irc.png" alt="" />
              </motion.a>
              <motion.a
                href=""
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8"
                variants={fadeInUp}
              >
                <img src="./img/federal-oil-logo.png" alt="" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Clients section end */}
    </>
  );
}
