import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar bar1" />
              <span class="icon-bar bar2" />
              <span class="icon-bar bar3" />
            </button>
            <a class="navbar-brand" href="#">
              Dashboard - Saddle{" "}
              <span style={{ marginBottom: 6, backgroundColor: "#ff9800" }} class="badge badge-warning">
                Running
              </span>
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="ti-panel" />
                  <p>Stats</p>
                </a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="ti-bell" />
                  <p class="notification">5</p>
                  <p>Notifications</p>
                  <b class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Notification 1</a>
                  </li>
                  <li>
                    <a href="#">Notification 2</a>
                  </li>
                  <li>
                    <a href="#">Notification 3</a>
                  </li>
                  <li>
                    <a href="#">Notification 4</a>
                  </li>
                  <li>
                    <a href="#">Another notification</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="ti-settings" />
                  <p>Settings</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
