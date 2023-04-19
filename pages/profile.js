import React from 'react';
import User from '../components/UserCard';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <User userObj={user} />
      <signout />
    </>
  );
}
