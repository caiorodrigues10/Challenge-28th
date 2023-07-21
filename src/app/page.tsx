import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-[#E2E8F0] w-full h-screen justify-center items-center bg-[url('/images/bg.svg')] bg-no-repeat bg-cover">
      <div className="bg-[#020617] bg-opacity-80 rounded-3xl flex flex-col items-center gap-6 w-3/4 p-11">
        <div className="flex items-center bg-[#0F172A]  rounded-2xl p-3">
          <Image src="/images/MagicWand.svg" width={32} height={32} alt="" />
        </div>

        <h1 className="text-3xl pb-4">
          Experimente o poder da Inteligência Artificial
        </h1>

        <div className="flex items-center w-1/2 cursor-pointer border-[1px] border-[#334155] bg-[#0F172A]  rounded-2xl p-4 justify-between">
          <div className="flex gap-6 items-center">
            <div className="border-[1px] border-[#1E293B] p-4 rounded-2xl">
              <Image src="/images/Code.svg" width={32} height={32} alt="" />
            </div>
            Gerador de códigos
          </div>
          <Image src="/images/ArrowRight.svg" width={32} height={32} alt="" />
        </div>

        <div className="flex items-center w-1/2 cursor-pointer border-[1px] border-[#334155] bg-[#0F172A]  rounded-2xl p-4 justify-between">
          <div className="flex gap-6 items-center">
            <div className="border-[1px] border-[#1E293B] p-4 rounded-2xl">
              <Image
                src="/images/ImageSquare.svg"
                width={32}
                height={32}
                alt=""
              />
            </div>
            Edição de foto
          </div>
          <Image src="/images/ArrowRight.svg" width={32} height={32} alt="" />
        </div>

        <div className="flex items-center w-1/2 cursor-pointer border-[1px] border-[#334155] bg-[#0F172A]  rounded-2xl p-4 justify-between">
          <div className="flex gap-6 items-center">
            <div className="border-[1px] border-[#1E293B] p-4 rounded-2xl">
              <Image
                src="/images/PlayCircle.svg"
                width={32}
                height={32}
                alt=""
              />
            </div>
            Criador de áudios e musicas
          </div>
          <Image src="/images/ArrowRight.svg" width={32} height={32} alt="" />
        </div>

        <div className="flex items-center w-1/2 cursor-pointer border-[1px] border-[#334155] bg-[#0F172A]  rounded-2xl p-4 justify-between">
          <div className="flex gap-6 items-center">
            <div className="border-[1px] border-[#1E293B] p-4 rounded-2xl">
              <Image
                src="/images/MusicNotesSimple.svg"
                width={32}
                height={32}
                alt=""
              />
            </div>
            Gerador de códigos
          </div>
          <Image src="/images/ArrowRight.svg" width={32} height={32} alt="" />
        </div>

        <div className="h-[1px] w-full bg-[#334155] my-4" />

        <div className="flex gap-4 w-full">
          <label className="flex w-full border-[1px] border-[#334155] bg-[#0F172A] items-center p-4 gap-4 rounded-2xl">
            <Image src="/images/PlusCircle.svg" width={32} height={32} alt="" />
            <input
              type="text"
              placeholder='Envie uma mensagem ou digite "/" para exibir os comandos'
              className="placeholder-slate-50 bg-transparent w-full border-0 focus-visible:outline-0"
            />
          </label>
          <button className="cursor-pointer flex items-center border-[1px] border-[#334155] bg-[#0F172A]  rounded-2xl p-4 justify-between">
            <Image
              src="/images/PaperPlaneRight.svg"
              width={32}
              height={32}
              alt=""
            />
          </button>
        </div>
      </div>
    </main>
  );
}
