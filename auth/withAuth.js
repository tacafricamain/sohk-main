/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import router from 'next/router';
import 'firebase/auth';
import { auth } from '../firebaseConfig';


const withAuth = Component => props => {
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (!authUser) {
        router.push('/reg');
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  )
};

export default withAuth;