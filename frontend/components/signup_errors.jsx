import React from 'react';

const SignUpErrors = (props) => {
  const signupErrors = props.errors.map ((error, idx) => {
    return (
      <li key={idx}>{error}</li>
    )
  });
  return (
    <div id='signup-errors' className="comp">
      <h6>SignUpErrors</h6>
      {signupErrors}
    </div>
  );
};

export default SignUpErrors;
