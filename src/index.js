import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmployeePage from './EmployeePage/EmployeePage';
import router from './router'
import employeeService from './data'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <App service={employeeService}/>,
  document.getElementById('root')
);

router.addRoute('', function() {
    ReactDOM.render(
        <App service={employeeService}/>,
        document.getElementById('root')
    );
});

router.addRoute('employees/:id', function(id) {
    ReactDOM.render(
        <EmployeePage employeeId={id} service={employeeService}/>,
        document.getElementById('root')
    );
});*/

router.start();
