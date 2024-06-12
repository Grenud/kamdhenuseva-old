import React from 'react'
import './Login.css'
export default function Login() {
  return (
      <div>
          <div class="outer-box">
              <div class="inner-box">
                  <header id="signup">
                      <h1>Signup</h1>
                      <p>It just takes 30 seconds</p>
                  </header>
                  <main class="signup-body">
                      <form>
                          <p>
                              <label for="fullname">Full Name</label>
                              <input type="text" id="fullname" placeholder="ABC" required></input>
                          </p>
                          <p>
                              <label for="email">Your Email</label>
                              <input type="email" id="email" placeholder="abc@gmail.com" required></input>
                          </p>
                          <p>
                              <label for="password">Your New Password</label>
                              <input type="password" id="password" placeholder="at least 8 characters" required></input>
                          </p>
                          <p>
                              <input type="submit" id="submit" value="Create Account"></input>
                          </p>
                      </form>
                  </main>

                  <footer class="signup-footer">
                      <p>Already have an Account? <a href="#">Login</a> </p>
                  </footer>


              </div>  <div class="circle c1"></div> <div class="circle c2"></div></div>


    </div>
  )
}
