import Hero from "../../components/Hero/Hero";
import Form from "../../components/Form/Form";

function SignIn() {
  return (
    <section className="w-full mx-auto h-screen px-8 py-16 bg-gray-700 xl:px-8 flex justify-center items-center md:flex-row">
      <div className="max-w-7xl flex justify-center items-center md:flex-row">
        <Hero />
        <Form />
      </div>
    </section>
  );
}

export default SignIn;
