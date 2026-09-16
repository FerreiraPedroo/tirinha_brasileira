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
    appContext?.setShowSubNavbar(false);
    navigate(`?post=${encodeURI(searchPost)}`);
  }

  return (
    <nav className="w-full bg-brasil-verde">
      <div className="flex gap-5 border-y-2 border-y-green-700 py-1 px-4 justify-center">
        <p className="flex items-center text-center text-brasil-amarelo text-md font-bold py-1 px-3 rounded-4xl hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
          Noticias
        </p>
        <p className="flex items-center text-center text-brasil-amarelo text-md font-bold py-1 px-2 rounded-4xl hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
          Vagas de empregos
        </p>
        <p className="flex items-center text-center text-brasil-amarelo text-md font-bold py-1 px-2 rounded-4xl hover:bg-green-900 hover:text-yellow-500 hover:cursor-pointer">
          Ao vivo
        </p>
        {!appContext?.showSubNavbar && (
          <p className="min-h-8 h-8 min-w-8 w-8 hover:bg-green-900 flex items-center justify-center text-md rounded-full font-medium border border-green-900">
            <img
              src="../../public/icons/search.png"
              className="min-h-6 h-6 min-w-6 hover:cursor-pointer"
              onClick={() => appContext?.setShowSubNavbar(true)}
            />
          </p>
        )}
      </div>
      {appContext?.showSubNavbar && (
        <div id="navbar-title" className="w-full flex justify-between items-center py-1 gap-2">
          <div className="flex w-full items-center text-center place-content-center py-1 gap-2">
            <input
              type="text"
              value={searchPost}
              onChange={(e) => setSearchPost(e.currentTarget.value)}
              onKeyUp={findPost}
              className="text-md border rounded-3xl px-3 outline-0"
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
              onClick={() => appContext.setShowSubNavbar(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
