import React from 'react';

const Flash = ({ signedIn }) => {
  console.log(signedIn);
  if (signedIn) {
    return (
      <div>Signed out successfully.</div>
    )
  } else {
    return (
      <div>Invalid email or password.</div>
    )
  }
}

export default Flash;
