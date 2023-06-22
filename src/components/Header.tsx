import ProfileImage from "../assets/profile.png";

export default function Header() {
  return (
    <header className="pb-2">
      <div className="flex items-center">
        <img
          src={ProfileImage}
          className="inline-block w-12 h-12 bg-gray-400 rounded-full ring-2 ring-white"
          alt=""
        />
        <div className="flex flex-col flex-1 ml-4 font-jakartaPlus">
          <h1 className="text-base font-bold text-gray-400 ">Hello,</h1>
          <h2 className="text-xl font-bold text-gray-700">Ega Gofur</h2>
        </div>
      </div>
    </header>
  );
}
