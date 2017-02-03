import React, { Component } from 'react';
import router from './router'
import employeeService from './data'
import Header from './Header/Header'
import EmployeePage from './EmployeePage/EmployeePage'
import './App.css';
import FontAwesome from 'react-fontawesome'

var SearchBar = React.createClass({
    getInitialState () {
      return {searchKey: ""}
    },
    searchHandler (event) {
      var searchKey = event.target.value;
      this.setState({searchKey: searchKey});
      this.props.searchHandler(searchKey);
    },
    render () {
        return (
          <div className="bar bar-standard bar-header-secondary">
            <input type="search" placeholder="Search for friends..." value={this.state.symbol} onChange={this.searchHandler}/>
          </div>
        )
    }
})

class EmployeeListItem extends Component {
  render () {
    return (
      <li className="table-view-cell media">
        <a href={"#employees/" + this.props.employee.id}>
          <img
            className="media-object small pull-left"
            role="presentation"
            alt={this.props.employee.firstName + " " + this.props.employee.lastName}
            src={"./pics/" + this.props.employee.firstName + "_" + this.props.employee.lastName + ".jpg" }/>
          {this.props.employee.firstName} {this.props.employee.lastName}
          <p>{this.props.employee.title}</p>
        </a>
      </li>
    )
  }
}

class EmployeeList extends Component {
  render () {
    var items = this.props.employees.map(function (employee) {
        return (
            <EmployeeListItem key={employee.id} employee={employee} />
        );
    });
    return (
      <ul className="table-view">
          {items}
      </ul>
    )
  }
}

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Employee Directory" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                  <EmployeeList employees={this.props.employees}/>
                </div>
            </div>
        );
    }
})

var App = React.createClass({
    getInitialState () {
        return {
            searchKey: '',
            employees: [],
            page: null,
        }
    },
    searchHandler (searchKey) {
        employeeService.findByName(searchKey).done(function(employees) {
            this.setState({searchKey:searchKey, employees: employees, page: <HomePage searchKey={searchKey} searchHandler={this.searchHandler} employees={employees}/>});
        }.bind(this));
    },
    componentDidMount () {
        router.addRoute('', function() {
            this.setState({page: <HomePage searchKey={this.state.searchKey} searchHandler={this.searchHandler} employees={this.state.employees}/>});
        }.bind(this));
        router.addRoute('employees/:id', function(id) {
            this.setState({page: <EmployeePage employeeId={id} service={employeeService}/>});
        }.bind(this));
        router.start();
    },
    render () {
        return this.state.page;
    }
});

export default App;
