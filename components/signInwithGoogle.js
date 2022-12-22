import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const SignInWithGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <input
        type="email"
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        // value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signInWithGoogle()}>Sign In</button>
    </div>
  );
};

export default SignInWithGoogle