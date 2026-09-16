export function Navbar() {
  return (
    <nav className="flex justify-between items-stretch bg-brasil-amarelo">
      <div className="w-16 place-content-center text-center px-4"></div>
      <div id="navbar-title" className="w-full text-center place-content-center">
        <p className="text-2xl font-bold text-brasil-verde">TIRINHA BRASILEIRA</p>
      </div>
      <div id="navbar-user" className="">
        <div className="flex flex-col justify-center items-center py-1 px-4">
          <img src="./public/icons/user.png" className="w-8" />
          <p className="text-sm">Usuário</p>
        </div>
      </div>
    </nav>
  );
}
