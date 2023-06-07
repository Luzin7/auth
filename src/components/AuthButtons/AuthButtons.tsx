import { useContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { UserDataContext } from "../../Contexts/userData";
import { auth } from "../../services/firebase";
import { BsGoogle, BsGithub } from "react-icons/bs";

function AuthButtons() {
  const { setUserData } = useContext(UserDataContext);
  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;
        setUserData(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleGithubSignIn() {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const userData = result.user;
        setUserData(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <button
        className=" px-4 py-4 font-medium text-white bg-purple-700 rounded-md"
        onClick={() => handleGoogleSignIn()}
      >
        <BsGoogle />
      </button>
      <button
        className=" px-4 py-4 font-medium text-white bg-purple-700 rounded-md"
        onClick={() => handleGithubSignIn()}
      >
        <BsGithub />
      </button>
    </>
  );
}

export default AuthButtons;
