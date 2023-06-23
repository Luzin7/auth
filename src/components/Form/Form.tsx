import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { UserDataContext } from "../../Contexts/userData";
import { AuthButtons } from "../AuthButtons/AuthButtons";

function Form() {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });
  const { setUserData } = useContext(UserDataContext);

  const { email, password } = formInfo;

  interface emailProp {
    email: string;
    password: string;
  }

  function emailAuth({ email, password }: emailProp) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
        setUserData(userData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div className="w-full mt-16 md:mt-0 md:w-2/5">
      <div
        className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <h3 className="mb-2 text-2xl font-medium text-center">
          Entre com sua conta
        </h3>
        <p className="w-full text-md text-center text-gray-500 mb-7">
          Escolha uma das opções abaixo que mais você se sentir confortável para
          acessar o melhor sistema de aprendizado já criado!
        </p>
        <div className="flex justify-center gap-5">
          <AuthButtons />
        </div>
        <p className="w-full text-lg font-medium text-center py-5 ">
          Ou acesse usando seu email e senha
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={({ target }) =>
                setFormInfo((prevFormInfo) => ({
                  ...prevFormInfo,
                  email: target.value,
                }))
              }
              type="email"
              name="email"
              id="email"
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-md"
            />
            <label htmlFor="password">Senha</label>
            <input
              value={password}
              onChange={({ target }) =>
                setFormInfo((prevFormInfo) => ({
                  ...prevFormInfo,
                  password: target.value,
                }))
              }
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-md"
            />
          </div>
          <button
            className="bg-purple-700 py-2 px-4 text-white font-bold rounded-md text-center w-full hover:bg-purple-800 mt-7"
            onClick={() => emailAuth({ email, password })}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
