import { useSignOut } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebaseConfig';
import NoSSR from 'react-no-ssr'

import { initFirebase } from '../firebaseConfig'


// const auth = getAuth(initFirebase());

const SignOut = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const router = useRouter()

  if (error) {
      return (
        <NoSSR>        
            <div>
                <p>Error: {error.message}</p>
            </div>
        </NoSSR>
    );
  }
  if (loading) {
    return (<NoSSR> <p>Loading...</p> </NoSSR>)
  }
    return (
      <NoSSR>       
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
      </NoSSR>
  );
};

export default SignOut