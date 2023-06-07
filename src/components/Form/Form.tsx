import AuthButtons from "../AuthButtons/AuthButtons";

function Form() {
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
        <p className="w-full text-sml text-center text-gray-500 mb-7">
          Escolha uma das opções abaixo que mais você se sentir confortável para
          acessar o melhor sistema de aprendizado já criado!
        </p>

        <div className="flex justify-center gap-5">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}

export default Form;
