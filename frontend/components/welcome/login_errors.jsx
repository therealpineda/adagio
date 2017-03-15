import React from 'react';

const LogInErrors = ({ errors }) => {
  const loginErrors = errors.map((error, idx) => {
    return (
      <li key={idx}>
        {error}
      </li>
    );
  });
  return (
    <div id="login-errors">
      { loginErrors }
    </div>
  );
};

export default LogInErrors;
