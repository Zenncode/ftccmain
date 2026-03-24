import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../../firebase/clientApp";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

export default function Auth() {
  return (
    <div className="min-h-scree flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your preferred sign-in method
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </div>
    </div>
  );
}
