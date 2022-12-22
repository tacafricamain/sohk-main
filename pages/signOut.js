import { useSignOut } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebaseConfig';

import { initFirebase } from '../firebaseConfig'


// const auth = getAuth(initFirebase());

const SignOut = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const router = useRouter()

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App pt-28">
      <button
        onClick={async () => {
          const success = await signOut();
          if (success) {
            router.push('/')
          }
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOut