import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config";

import type { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const provider = new GoogleAuthProvider();

const signIn = async () => {
  let error: FirebaseError | null = null;
  let result: User | null = null;

  try {
    await signInWithRedirect(auth, provider);
    const res = await getRedirectResult(auth);

    if (res) {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;

      const { user } = res;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      result = user;
    }
  } catch (err) {
    // Handle Errors here.
    const fbError = err as FirebaseError;

    const errorCode = fbError.code;
    const errorMessage = fbError.message;
    // The email of the user's account used.
    const email = fbError.customData?.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(fbError);
    // ...

    error = fbError;
  }

  return {
    error,
    result
  };
};

export default signIn;
