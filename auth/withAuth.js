/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initFirebase }  from '../firebaseConfig';
import { getAuth } from "firebase/auth"

// initFirebase();
const auth = getAuth();

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