export function Post({ data }: any) {
  return (
    <div key={data.id} className="relative flex flex-col w-full">
      <div className="top-0 sticky w-full space-y-2 bg-brasil-azul flex flex-col items-start px-4 py-4 header">
        <div className="w-full flex items-center justify-between">
          <p className="flex text-xs gap-1">
            <img src="../../../public/icons/calendar.png" className="w-4 h-4" />
            <span className="text-white">27 de Agosto de 2026</span>
          </p>
          <p className="text-white self- text-xs rounded-lg bg-orange-400 px-4">Noticia</p>
        </div>
        <p className="w-full text-2xl text-brasil-amarelo">{data.title}</p>
      </div>
      <div className="w-full p-2">
        <img src="../../../public/imagens/default.png" loading="lazy" className=" w-full" />
      </div>
      <div>
        <div className="s" dangerouslySetInnerHTML={{ __html: data.texts }} />

      </div>
      <div className="h-10"></div>
    </div>
  );
}
