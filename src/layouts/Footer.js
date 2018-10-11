import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="footer footer-black  footer-white ">
        <div class="container-fluid">
          <div class="row">
            <nav class="footer-nav">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Saddle
                  </a>
                </li>
              </ul>
            </nav>
            <div class="credits ml-auto">
              <span class="copyright">
                ©<script>document.write(new Date().getFullYear())</script>, made
                with <i class="fa fa-heart heart" /> by Team Jugaad for Siemens
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
