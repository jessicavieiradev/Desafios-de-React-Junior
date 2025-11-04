import { useState } from "react";
import Button from "./components/Button";

interface PilhaProps {
  posicao: { x: number; y: number };
}

const App = () => {
  const [pilhaDesfazer, setPilhaDesfazer] = useState<PilhaProps[]>([]);
  const [pilhaRefazer, setPilhaRefazer] = useState<PilhaProps[]>([]);

  const handlerFazer = (e: React.MouseEvent<HTMLDivElement>) => {
    setPilhaRefazer([]);
    setPilhaDesfazer((prev) => [
      ...prev,
      { posicao: { x: e.clientX, y: e.clientY } },
    ]);
  };

  const handlerDesfazer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPilhaDesfazer((prev) => {
      if (prev.length === 0) return prev;

      const novoDesfazer = prev.slice(0, -1);
      const ultimoItem = prev[prev.length - 1];

      setPilhaRefazer((prev) => [...prev, ultimoItem]);
      return novoDesfazer;
    });
  };

  const handlerRefazer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPilhaRefazer((prev) => {
      if (prev.length === 0) return prev;
      const novoRefazer = prev.slice(0, -1);
      const ultimoItem = prev[prev.length - 1];

      setPilhaDesfazer((prev) => [...prev, ultimoItem]);
      return novoRefazer;
    });
  };

  const handlerNaoClicavel = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handlerFazer}
      className="w-full h-screen bg-blue-200 flex  items-center justify-center"
    >
      <div
        onClick={handlerNaoClicavel}
        className="text-white  bg-purple-500 p-4 rounded-md flex items-center justify-center flex-col gap-4"
      >
        <h1 className="text-xl">clique na tela!</h1>
        <div className="flex gap-4">
          <Button onClick={handlerRefazer}>Refazer</Button>
          <Button onClick={handlerDesfazer}>Desfazer</Button>
        </div>
        {pilhaDesfazer.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${item.posicao.x - 25}px`,
                top: `${item.posicao.y - 25}px`,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "purple",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
