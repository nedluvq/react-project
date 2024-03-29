import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { UserCredential } from "firebase/auth";
import { firebaseConfig } from "../apiKey/apiKey";



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const updateUserData = (firstName: string, secondName: string) => {
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: `${firstName} ${secondName}`
    }).catch(((err) => alert(err)))
  }
}

export const updatePhotoUrl = (photoURL: string) => {
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      photoURL: photoURL
    }).catch(((err) => alert(err)))
  }
}

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};

export const startSession = ({ user }: UserCredential) => {
  sessionStorage.setItem("email", user.email!);
  sessionStorage.setItem("refreshToken", user.refreshToken);
};

export const getSession = () => {
  return {
    email: sessionStorage.getItem("email"),
    refreshToken: sessionStorage.getItem("refreshToken"),
  };
};

export const endSession = () => {
  sessionStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().refreshToken;
};
