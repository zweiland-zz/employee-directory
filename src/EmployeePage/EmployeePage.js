import React, { Component } from 'react';
import Header from '../Header/Header'
import '../App.css';

var EmployeePage = React.createClass({
  getInitialState () {
    return {employee: {}}
  },
  componentDidMount () {
    this.props.service.findById(this.props.employeeId).done(function(result) {
      this.setState({employee: result})
    }.bind(this))
  },
  render () {
    return (
      <div className="App">
        <Header text="Employee" back="true"/>
          <div className="card">
            <ul className="table-view">
                <li className="table-view-cell media">
                    <img
                      className="media-object big pull-left"
                      src={"./pics/" + this.state.employee.firstName + "_" + this.state.employee.lastName + ".jpg"}
                      />
                    <h1>{this.state.employee.firstName} {this.state.employee.lastName}</h1>
                    <p>{this.state.employee.title}</p>
                </li>
                <li className="table-view-cell media">
                  <div className="media-body">
                  Location
                      <p>{this.state.employee.city}</p>
                  </div>
                </li>
                <li className="table-view-cell media">
                  <div className="media-body">
                  Department
                      <p>{this.state.employee.department}</p>
                  </div>
                </li>
                <li className="table-view-cell media">
                    <a href={"mailto:" + this.state.employee.email} className="push-right">
                        <span className="media-object pull-left icon icon-email"></span>
                        <div className="media-body">
                        Email
                            <p>{this.state.employee.email}</p>
                        </div>
                    </a>
                </li>
                <li className="table-view-cell media">
                  <div className="media-body">
                  Manager
                      <p>{this.state.employee.managerName}</p>
                  </div>
                </li>
                <li className="table-view-cell media">
                    <a href={"tel:" + this.state.employee.officePhone} className="push-right">
                        <span className="media-object pull-left icon icon-call"></span>
                        <div className="media-body">
                        Call Office
                            <p>{this.state.employee.officePhone}</p>
                        </div>
                    </a>
                </li>
                <li className="table-view-cell media">
                    <a href={"tel:" + this.state.employee.mobilePhone} className="push-right">
                        <span className="media-object pull-left icon icon-call"></span>
                        <div className="media-body">
                        Call Mobile
                            <p>{this.state.employee.mobilePhone}</p>
                        </div>
                    </a>
                </li>
                <li className="table-view-cell media">
                    <a href={"sms:" + this.state.employee.mobilePhone} className="push-right">
                        <span className="media-object pull-left icon icon-sms"></span>
                        <div className="media-body">
                        SMS
                            <p>{this.state.employee.mobilePhone}</p>
                        </div>
                    </a>
                </li>
                <li className="table-view-cell media">
                  <div className="media-body">
                  Website
                      <p>{this.state.employee.blog}</p>
                  </div>
                </li>
                <li className="table-view-cell media">
                  <div className="media-body">
                  Twitter
                      <p>{this.state.employee.twitterId}</p>
                  </div>
                </li>
            </ul>
        </div>
      </div>
    )
  }
})

export default EmployeePage;
