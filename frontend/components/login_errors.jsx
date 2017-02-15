import React from 'react';

const LogInErrors = (props) => {
  const loginErrors = props.errors.map( (error, idx) => {
    return (
      <li key={idx}>{error}</li>
    );
  })
  return (
    <div id='login-errors' className="comp-d">
      { loginErrors }
    </div>
  );
};

export default LogInErrors;
