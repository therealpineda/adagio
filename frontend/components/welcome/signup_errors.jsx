import React from 'react';

const SignUpErrors = (props) => {
  const signupErrors = props.errors.map((error, idx) => {
    return (
      <li key={idx}>{error}</li>
    );
  });
  return (
    <div id="signup-errors">
      {signupErrors}
    </div>
  );
};

export default SignUpErrors;
