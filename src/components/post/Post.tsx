import React from "react";
import type { Post } from "../../pages/home/Home";

export function Post({ post }: { post: Post }) {
  return (
    <div key={post.id} className="relative flex flex-col max-w-5xl">
      <div className="top-0 sticky w-full space-y-2 bg-brasil-azul flex flex-col items-start px-4 py-4 border-t border-t-white">
        <div className="w-full flex items-center justify-between">
          <p className="flex text-xs gap-1">
            <img src="../../../public/icons/calendar.png" className="w-4 h-4" />
            <span className="text-white">{new Date(post.dateCreated).toLocaleDateString()}</span>
          </p>
          <p className="text-white self- text-xs rounded-lg bg-orange-400 px-4">{post.category}</p>
        </div>
        <p className="w-full text-2xl text-brasil-amarelo">{post.title}</p>
      </div>
      <div className="p-2">
        <img src={post.image} loading="lazy" className="w-64 max-w-64 h-40 max-h-40" />
      </div>
      <div className="space-y-4">
        {post.contents.map((content) => {

          switch (content.model) {
            case "TEXT":
              return (
                <div className="border-4 border-slate-400 rounded px-2">
                  <p className="w-full text-md text-justify indent-8">{content.text}</p>
                </div>
              );
              break;
            case "IMG":
              return (
                <div className="border-4 border-slate-400 rounded px-2">
                  <img src={`${content.image}`} loading="lazy" className="max-w-3xs max-h-3xs" />
                </div>
              );
              break;
            case "IMG_TEXT":
              return (
                <div className="border-4 border-slate-400 rounded px-2 max-w-xl h-full">
                  <img src={content.image as string} className="float-left mr-4 mb-2 w-32 h-32 object-cover rounded" />
                  <p className="text-gray-700">{content.text}</p>
                </div>
              );
              break;
            case "IMG_CAROUSEL":
              return (
                <div className="border-4 border-slate-400 rounded px-2 space-y-4 space-x-4">
                  {content.image instanceof Array &&
                    content.image?.map((img) => <img src={img} className="max-w-3xs max-h-3xs " />)}
                </div>
              );
              break;
            default:
              return <div className="border-4 border-slate-400 rounded px-2">SEM PADRAO</div>;
              break;
          }
        })}
      </div>
    </div>
  );
}
