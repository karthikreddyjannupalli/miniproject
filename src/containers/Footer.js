import React from "react"
import logo from './cover.png'
export default function Footer(){
var p=new Date();
let year=p.getFullYear();
  return(
      <footer class="site-footer">
        {p.getDate}
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <ul class="footer-links">
              <li><a class="facebook" href="#"><i class="fa fa-envelope"></i> karthikreddyjannupalli@gmail.com</a></li>
              <li><a class="twitter" href="#"><i class="fa fa-envelope"></i> lrahul28@gmail.com</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Useful Links</h6>
            <ul class="footer-links">
              <li><a href="http://geeksforgeeks.org">Geeks For Geeks</a></li>
              <li><a href="http://w3schools.com/">W3 Schools</a></li>
              <li><a href="http://tutorialspoint.com">Tutorials Point</a></li>
              <li><a href="/signup">Get Started With CodeX</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
<img src={logo} width={340} style={{marginLeft:130}} />
        </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy;{year}  <a href="/home">CODEX</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    );
  }