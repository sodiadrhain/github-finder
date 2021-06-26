import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = ({ getAlert }) => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert && (
      <div className={`card alert alert-${alertContext.alert.type}`}>
        <i className="fa fa-info-circle"></i>
        <span>{alertContext.alert.msg}</span>
      </div>
    )
  );
};

export default Alert;
