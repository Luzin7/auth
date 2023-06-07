import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  APIKEY,
  APPID,
  AUTHDOMAIN,
  MSGSENDERID,
  PROJECTID,
  STORAGEBUCKET,
} from "../utils/env";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MSGSENDERID,
  appId: APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
