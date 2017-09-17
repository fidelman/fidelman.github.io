import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  props: {
    title: string,
    status: string
  };

  render() {
    const { title, status } = this.props;

    return (
      <header className="header">
        <h1 className="header-title">{title}</h1>
        <p className="header-status">{status}</p>
      </header>
    );
  }
}

export default Header;