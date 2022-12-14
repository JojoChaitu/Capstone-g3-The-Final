import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return <div className={`alert alert-${type}`}>{msg}</div>;
};

export default Alert;
