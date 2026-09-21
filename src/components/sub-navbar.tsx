import React, { useState } from "react";
import { useAppContext } from "../context/app.context";
import { useNavigate } from "react-router";

export function SubNavbar() {
  const appContext = useAppContext();
  const [searchPost, setSearchPost] = useState("");
  const navigate = useNavigate();

  function findPost(e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    if ("key" in e && e.key != "Enter") return null;
    appContext?.setShowSubNavbar("");
    navigate(`?post=${encodeURI(searchPost)}`);
  }

  return (
    <nav className="w-full bg-brasil-amarelo">
      <div className="flex gap-5 border-y-2 border-y-yellow-500 py-1 px-4 justify-center">
        {appContext?.showSubNavbar === "MENU" && (
          <div className="w-full flex justify-between items-center py-1 px-2 gap-3">
            <div className="w-full"></div>
            <p className="flex text-nowrap items-center text-center text-brasil-verde text-md font-bold py-1 px-3 rounded-lg hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
              Noticias
            </p>
            <p className="flex text-nowrap items-center text-center text-brasil-verde text-md font-bold py-1 px-2 rounded-lg hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
              Vagas de empregos
            </p>
            <p className="flex text-nowrap items-center text-center text-brasil-verde text-md font-bold py-1 px-2 rounded-lg hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
              Ao vivo
            </p>
            <div className="w-full place-items-end">
              <div className="min-h-8 h-8 min-w-8 w-8 hover:bg-green-900 flex items-center justify-center text-md rounded-full font-medium border border-green-900">
                <img
                  src="../../public/icons/close.png"
                  className="min-h-6 h-6 min-w-6 hover:cursor-pointer"
                  onClick={() => appContext.setShowSubNavbar("")}
                />
              </div>
            </div>
          </div>
        )}

        {appContext?.showSubNavbar === "SEARCH" && (
          <div id="navbar-title" className="w-full flex justify-between items-center py-0 px-2 gap-3">
            <div className="flex w-full items-center text-center place-content-center py-1 gap-3">
              <input
                type="text"
                value={searchPost}
                onChange={(e) => setSearchPost(e.currentTarget.value)}
                onKeyUp={findPost}
                className="w-full text-md text-green-900 text-shadow-2xs border-2 border-green-700 rounded-xl px-3 outline-0"
              />
              <div className="min-h-8 h-8 min-w-8 w-8 hover:bg-green-900 flex items-center justify-center text-md rounded-full font-medium border border-green-900">
                <img
                  src="../../public/icons/search.png"
                  className="min-h-6 h-6 min-w-6 hover:cursor-pointer"
                  onClick={findPost}
                />
              </div>
            </div>
            <div className="min-h-8 h-8 min-w-8 w-8 hover:bg-green-900 flex items-center justify-center text-md rounded-full font-medium border border-green-900">
              <img
                src="../../public/icons/close.png"
                className="min-h-6 h-6 min-w-6 hover:cursor-pointer"
                onClick={() => appContext.setShowSubNavbar("")}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
