export default function BackHomePage() {
  return (
    <>
      {/* Back to home start */}
      <a
        href="#home"
        id="to-top"
        className="fixed  justify-center items-center bottom-4 left-4 z-[9999] h-14 w-13 rounded-full bg-primary p-4 hover:animate-pulse"
      >
        <span className="block h-5 w-5 rotate-45 border-t-2 border-l-2 mt-2" />
      </a>
      {/* Back to home end */}
    </>
  );
}
