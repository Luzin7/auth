import { useContext } from "react";
import { UserDataContext } from "../../Contexts/userData";

function Hero() {
  const { userData } = useContext(UserDataContext);

  if (userData?.uid) {
    return (
      <div className="w-full space-y-5 md:w-3/5 md:pr-16">
        <p
          className="font-medium text-purple-500 uppercase"
          data-primary="blue-500"
        >
          Olá, {userData.displayName ?? userData.email}!
        </p>
        {userData.photoURL && (
          <img
            className="rounded-full h-20"
            src={userData.photoURL}
            alt="User"
          />
        )}
        <h2 className="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl">
          É ótimo te receber ao melhor sistema de aprendizado do mundo.
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5 md:w-3/5 md:pr-16">
      <p
        className="font-medium text-purple-500 uppercase"
        data-primary="blue-500"
      >
        espalhando conhecimento
      </p>
      <h2 className="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl">
        Transformando a forma que você e outras pessoas aprendem.
      </h2>
      <p className="text-xl text-gray-400 md:pr-16">
        Aprenda a aprender ao mesmo tempo que aprende a ensinar! Faça parte do
        melhor e mais otimizado sistema de aprendizado do mundo.
      </p>
    </div>
  );
}

export default Hero;
