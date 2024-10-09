export default function IconWa() {
  return (
    <>
      <span className="w-52 bottom-14 -right-10  text-slate-900 animate-bounce dark:text-white flex fixed">
        Konsultasi langsung
      </span>
      <span className="w-30 bottom-5  text-gray-900 animate-pulse duration-0 dark:text-blue-400  right-[120px] flex fixed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
          />
        </svg>
      </span>
      <a href="https://wa.me/6287716052151" target="_blank" id="wa-direct">
        <img
          src="./img/WhatsApp-Logo.wine.png"
          alt=""
          width={100}
          className="bottom-0 right-8 flex fixed transform rotate-0 transition-transform duration-500 hover:rotate-[360deg]"
        />
      </a>
    </>
  );
}
