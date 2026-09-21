import { useAppContext } from "../context/app.context";

const mediaColor = {
  nav: {
    green: "bg-brasil-verde ",
    yellow: "bg-brasil-amarelo",
    blue: "bg-brasil-azul",
    default: "bg-brasil-verde",
  },
  navButton: {
    green: "border-green-900 hover:bg-green-900",
    yellow: "border-yellow-900 hover:bg-yellow-900",
    blue: "border-blue-600 hover:bg-blue-700",
    default: "border-green-900 hover:bg-green-900",
  },
};

export function Navbar() {
  const appContext = useAppContext();

  return (
    <nav className={`min-w-12 flex justify-between py-1 px-2 md:py-2 md:px-4 ${mediaColor.nav["green"]}`}>
      <div className="flex gap-2 items-center place-content-center text-center">
        <p
          className={`min-h-8 md:min-h-12 h-8 md:h-10 min-w-8 md:min-w-12 w-8 md:w-10 flex items-center justify-center text-md rounded-full font-medium border ${mediaColor.navButton["green"]}`}
        >
          <img
            src="../../public/icons/menu.png"
            className="min-h-6 md:min-h-8 h-6 md:h-8 min-w-6 md:min-w-8 hover:cursor-pointer"
            onClick={() => appContext?.setShowSubNavbar("MENU")}
          />
        </p>
        <p
          className={`min-h-8 md:min-h-12 h-8 md:h-10 min-w-8 md:min-w-12 w-8 md:w-10 flex items-center justify-center text-md rounded-full font-medium border ${mediaColor.navButton["green"]}`}
        >
          <img
            src="../../public/icons/search.png"
            className="min-h-6 md:min-h-8 h-6 md:h-8 min-w-6 md:min-w-8 hover:cursor-pointer"
            onClick={() => appContext?.setShowSubNavbar("SEARCH")}
          />
        </p>
      </div>

      <div id="navbar-title" className="w-full text-center place-content-center pb-1">
        {/* <p className="text-3xl md:text-5xl font-black text-white drop-shadow-[4px_4px_0_#0f0f4e]">TIRINHA BRASILEIRA</p> */}
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src="./public/icons/user.png" className="md:w-14" />
        {/* <p className="text-xs md:text-sm">Usuário</p> */}
      </div>
    </nav>
  );
}
