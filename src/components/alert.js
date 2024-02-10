import React, { useContext } from 'react';
import alertContext from '../contexts/alert/alertcontext';

const Alert = () => {
  const { alert } = useContext(alertContext);
  
  if (!alert) return null;

  let word = alert.type;

  if (word === 'danger') {
    word = 'Error';
  }

  const capitalizeFirstLetter = (string) => {
    if (typeof string === 'string' && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  };

  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <b>{capitalizeFirstLetter(word)}: </b>
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
