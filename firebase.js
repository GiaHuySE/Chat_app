import { fbConfig } from "./env";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
