import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroPage() {
  // Menggunakan intersection observer untuk memantau apakah elemen dalam viewport
  const [ref, inView] = useInView({
    threshold: 0.8, // Jalankan ketika 10% dari elemen sudah terlihat
  });

  return (
    <>
      {/* Hero section start */}
      <section
        id="home"
        className="pt-24 p-10 dark:bg-dark"
        ref={ref} // Menghubungkan intersection observer ke section
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 text-awal">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi berjalan jika inView true
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base font-semibold text-primary md:text-xl"
              >
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
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi berdasarkan inView
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-medium text-secondary text-lg mb-5 mt-4 lg:text-2xl dark:text-white"
              >
                Service Motor &amp;
                <span className="text-dark dark:text-secondary">
                  jual sparepart motor
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi saat inView true
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-medium text-secondary mb-10 leading-relaxed"
              >
                Bengkel motor rumahan, tempat perawatan dan modifikasi sepeda
                motor. dibangun sejak tahun 2000-an{" "}
                <span className="text-dark font-bold dark:text-white">
                  Yups!
                </span>
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animasi saat inView true
                transition={{ duration: 0.5, delay: 0.8 }}
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Kami
              </motion.a>
            </div>
            <div className="w-full self-end px-24 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} // Animasi saat elemen masuk viewport
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 relative lg:mt-9 lg:right-0"
              >
                <img
                  src="img/mekanik.png"
                  alt="bapak.png"
                  className="max-w-full w-96 h-auto rounded-xl transition duration-300 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}
    </>
  );
}
