import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../config";

import type { User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const signInWithGoogle = async () => {
  let error: FirebaseError | null = null;
  let result: User | null = null;

  const provider = new GoogleAuthProvider();

  try {
    await signInWithRedirect(auth, provider);
    const res = await getRedirectResult(auth);

    if (res) {
      const { user } = res;

      result = user;
    }
  } catch (err) {
    const fbError = err as FirebaseError;

    error = fbError;
  }

  return { error, result };
};

export { signInWithGoogle };
