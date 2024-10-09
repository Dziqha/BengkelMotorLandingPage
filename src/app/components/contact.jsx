"use client";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select"; // Pastikan untuk menginstal react-select jika belum terinstal

export default function ContactPage() {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const motorRef = useRef(null);
  const messageRef = useRef(null);
  const nohpRef = useRef(null);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryOptions = [
    { value: "+62", label: "Indonesia (+62)" },
    { value: "+1", label: "United States (+1)" },
    { value: "+91", label: "India (+91)" },
    { value: "+86", label: "China (+86)" },
    { value: "+81", label: "Japan (+81)" },
    { value: "+44", label: "United Kingdom (+44)" },
    { value: "+55", label: "Brazil (+55)" },
    { value: "+7", label: "Russia (+7)" },
    { value: "+49", label: "Germany (+49)" },
    { value: "+33", label: "France (+33)" },
    { value: "+39", label: "Italy (+39)" },
    { value: "+82", label: "South Korea (+82)" },
    { value: "+34", label: "Spain (+34)" },
    { value: "+91", label: "India (+91)" },
    { value: "+92", label: "Pakistan (+92)" },
    { value: "+880", label: "Bangladesh (+880)" },
    { value: "+63", label: "Philippines (+63)" },
    { value: "+84", label: "Vietnam (+84)" },
    { value: "+66", label: "Thailand (+66)" },
    { value: "+65", label: "Singapore (+65)" },
  ];

  useEffect(() => {
    const form = formRef.current;

    const handleSubmit = async (event) => {
      event.preventDefault();

      let name = nameRef.current.value;
      let date = dateRef.current.value;
      let motorcycleType = motorRef.current.value;
      let message = messageRef.current.value;
      let nohpclient = nohpRef.current.value;

      if (!selectedCountry) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Silakan pilih kode negara terlebih dahulu.",
          showConfirmButton: true,
        });
        return;
      }

      if (nohpclient.startsWith("0")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Nomor telepon tidak boleh dimulai dengan '0'. Silakan periksa kembali.",
          showConfirmButton: true,
        });
        return;
      }
      try {
        // Redirect to WhatsApp with pre-filled message
        const whatsappMessage = `Nama: ${name}\nTanggal: ${date}\nMotor: ${motorcycleType}\nKeluhan: ${message}`;
        const whatsappUrl = `https://wa.me/6287716052151?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        Swal.fire({
          icon: "success",
          title: "Reservasi berhasil!",
          text: "Anda akan diarahkan ke WhatsApp dalam 3 detik.",
          showConfirmButton: false,
          timer: 3000,
        });

        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 3000);
      } catch (error) {
        console.error("Error sending data:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat mengirim data.",
          showConfirmButton: true,
        });
      }
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [selectedCountry]);

  return (
    <>
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 md:text-4xl lg:text-5xl dark:text-white">
                Service Sekarang!
              </h2>
              <p className="font-medium text-md text-secondary">
                Segera Pesan! Hubungi kami sekarang untuk melakukan service atau
                mendapatkan informasi lebih lanjut tentang layanan kami.
              </p>
            </div>
          </div>
          <form id="reservasi" ref={formRef}>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Masukan nama kamu"
                  ref={nameRef}
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="numberhp"
                  className="text-base font-bold text-primary"
                >
                  No HP
                </label>
                <div className="flex items-center">
                  <Select
                    className="w-1/4 bg-slate-200 text-dark p-1.5 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mr-2"
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    placeholder="kode negara"
                  />
                  <input
                    type="text"
                    name="numberhp"
                    id="numberhp"
                    placeholder="Masukan no HP"
                    ref={nohpRef}
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="date"
                  className="text-base font-bold text-primary"
                >
                  Tanggal
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  placeholder="Masukan Tanggal Reservasi"
                  ref={dateRef}
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="motor"
                  className="text-base font-bold text-primary"
                >
                  Nama Motor
                </label>
                <input
                  type="text"
                  name="motor"
                  id="motor"
                  placeholder="Masukan nama motor"
                  ref={motorRef}
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Keluhan Motor
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Masukan keluhan pada motor anda"
                  ref={messageRef}
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                  defaultValue={""}
                />
              </div>
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
