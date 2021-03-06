var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
            </li>
            <li>
              <Link to="/timer" activeClassName="active-link">Timer</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/DevEMCN" target="_blank">DevEMCN</a></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
