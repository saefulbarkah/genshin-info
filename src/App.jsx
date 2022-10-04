import React, { useState } from "react";
import genshinDB from "genshin-db";
const App = () => {
  const [infoCharacter, setInfoCharacter] = useState();
  const [character, setCharacter] = useState();
  const back = () => {
    setInfoCharacter(false);
    setCharacter();
  };
  const showCharacter = (e) => {
    e.preventDefault();
    setInfoCharacter(true);
    const form = new FormData(e.target);
    const name = form.get("karakter");
    console.log(form.get("karakter"));
    setCharacter(
      genshinDB.characters(name, {
        matchAltNames: true,
        resultLanguage: "Indonesian",
      })
    );
    if (character === null) {
      setCharacter(false);
    } else {
    }
    e.target.reset();
  };
  console.log(character);
  return (
    <>
      {infoCharacter ? (
        character == null ? (
          <div className="flex flex-col justify-center items-center h-screen gap-5">
            <div className="text-2xl">Karakter tidak di temukan</div>
            <a
              href="#"
              onClick={back}
              className="bg-blue-700 font-bold py-2 px-4 text-white rounded-md"
            >
              Kembali
            </a>
          </div>
        ) : (
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="content flex flex-col bg-sky-700/20 backdrop-blur-lg w-[350px] sm:w-[600px] sm:p-10 py-5 rounded-xl px-5">
              <div className="flex items-center justify-center w-full">
                <img
                  src={character.images["icon"]}
                  alt=""
                  className="items-center w-[180px] sm:w-[250px] justify-center py-5"
                />
              </div>
              <div className="items-center justify-center flex flex-col py-5">
                <span className="text-2xl font-bold w-full text-white">
                  {character.fullname}
                </span>
                <p className="text-white mt-5">{character.description}</p>
              </div>
              <div className="flex mt-5 w-full gap-2">
                <img
                  src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                  alt=""
                  className="w-[25px]"
                />
                <span className="text-xl">{character.rarity}</span>
              </div>
              <div className="mt-5 flex justify-end w-full">
                <a
                  href="#"
                  onClick={back}
                  className="bg-blue-700 font-bold py-2 px-4 text-white rounded-md "
                >
                  BACK
                </a>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="w-full h-screen">
          <div className="title flex flex-col justify-center items-center h-full">
            <span className="text-3xl font-semibold">Cari karakter</span>
            <div className="flex items-center justify-center">
              <form onSubmit={showCharacter}>
                <input
                  type="text"
                  placeholder="Pencarian karakter....."
                  name="karakter"
                  className="mt-5  py-2 px-5 text-slate-200 rounded-lg outline-none bg-sky-800/50"
                />
                <button
                  className="bg-blue-700 py-2 px-4 rounded-xl ml-3"
                  type="submit"
                >
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
