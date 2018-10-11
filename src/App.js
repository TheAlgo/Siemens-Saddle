import React, { Component } from "react";
import { Route } from "react-router";
import Dashboard from "./layouts/pages/Dashboard";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Device from "./layouts/pages/Device";
import { fetchDevices } from "./fetch";
import "./index.css";

class App extends Component {

  state = {
    devices: {}
  }

  updateDevices() {
    fetchDevices().then(res => {
      console.log(res);
      this.setState({
        devices: res
      })
    });
  }

  constructor() {
    super();
    this.updateDevices();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Route render={(props) => <Sidebar {...props} devices={this.state.devices} />} />
          <div class="main-panel">
            <Navbar />

            <Route exact path="/" component={Dashboard} />
            <Route path="/device/:deviceId"
              render={(props) => <Device {...props} devices={this.state.devices} />}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
