import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

type Post = {
  id: number;
  title: string;
  model: string;
  post_date: string;
  texts: string[];
  interactions: { like: number }[];
  comments: {
    id: number;
    comment: string;
    user: {
      id: number;
      name: string;
      avatar: string;
    };
  }[];
};

const posts = [
  {
    id: 1,
    title: "STC: o herói invisível que faz a tecnologia funcionar no dia a dia",
    model: "IMG_TEXT",
    post_date: "2026-09-06",
    texts: [
      `Quando pensamos em tecnologia, normalmente imaginamos computadores modernos, inteligência artificial, sistemas sofisticados e grandes inovações. Mas existe uma parte fundamental desse universo que muitas vezes passa despercebida: o trabalho de quem mantém tudo funcionando.

É aí que entra o STC.

No cotidiano de uma empresa, basta um computador parar de funcionar, uma impressora apresentar problemas, uma conexão cair ou um sistema deixar de responder para que uma atividade simples possa se transformar em um grande transtorno.`,
    ],
    interactions: [{ like: 10 }],
    comments: [
      {
        id: 1,
        comment: "comentario da tirinha",
        user: {
          id: 10,
          name: "UserTeste",
          avatar: "../../../public/icons/user.png",
        },
      },
    ],
  },
  {
    id: 1,
    title: "STC: o herói invisível que faz a tecnologia funcionar no dia a dia",
    model: "IMG_TEXT",
    post_date: "2026-09-06",
    texts: [
      `Quando pensamos em tecnologia, normalmente imaginamos computadores modernos, inteligência artificial, sistemas sofisticados e grandes inovações. Mas existe uma parte fundamental desse universo que muitas vezes passa despercebida: o trabalho de quem mantém tudo funcionando.

É aí que entra o STC.

No cotidiano de uma empresa, basta um computador parar de funcionar, uma impressora apresentar problemas, uma conexão cair ou um sistema deixar de responder para que uma atividade simples possa se transformar em um grande transtorno.`,
    ],
    interactions: [{ like: 10 }],
    comments: [
      {
        id: 1,
        comment: "comentario da tirinha",
        user: {
          id: 10,
          name: "UserTeste",
          avatar: "../../../public/icons/user.png",
        },
      },
    ],
  },
];

export function Home() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [postList, setPostList] = useState<Post[]>(posts);
  const [viewCursor, setViewCursor] = useState(0);

  useEffect(() => {
    console.log(urlParams.get("post"));
  }, [urlParams]);

  return (
    <main className="relative w-auto overflow-y-auto">
      {postList.map((post) => {
        return (
          <div key={post.id} className="relative flex flex-col w-full">
            <div className="top-0 sticky w-full space-y-2 bg-brasil-azul flex flex-col items-start px-4 py-4">
              <div className="w-full flex items-center justify-between">
                <p className="flex text-xs gap-1">
                  <img src="../../../public/icons/calendar.png" className="w-4 h-4" />
                  <span className="text-white">27 de Agosto de 2026</span>
                </p>
                <p className="text-white self- text-xs rounded-lg bg-orange-400 px-4">Noticia</p>
              </div>
              <p className="w-full text-2xl text-brasil-amarelo">{post.title}</p>
            </div>

            <div className="w-full p-2">
              <img src="../../../public/imagens/default.png" className=" w-full" />
            </div>
            <div>
              <div className="s" dangerouslySetInnerHTML={{ __html: post.texts[0] }} />
              <div className="s" dangerouslySetInnerHTML={{ __html: post.texts[0] }} />
              <div className="s" dangerouslySetInnerHTML={{ __html: post.texts[0] }} />
              <div className="s" dangerouslySetInnerHTML={{ __html: post.texts[0] }} />
            </div>
            <div className="h-10"></div>
          </div>
        );
      })}
    </main>
  );
}
