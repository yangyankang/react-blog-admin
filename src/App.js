import React, { Component } from 'react';
import { Hello } from './components/hello'

class App extends Component {
  render () {
    return (
      <div className="container">
        <Hello compiler="Typescript" framework="React"></Hello>
        <section className="sidebar">侧边导航栏</section>
        <section className="main">
          <header className="header">
            <span className="usernaem">用户姓名</span>
          </header>
          <div className="wrapper">
            主体内容
          </div>
          <footer className="footer">
            <span className="copyright">Copyright@2019</span>
          </footer>
        </section>
      </div>
    )
  }
}
export default App