import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-links">
      <Link className="footer-item" to="/cities">Cities</Link>
      <Link className="footer-item" to="/new_event">Hosting</Link>
      <h4 className="footer-item">
        <a href="https://github.com/Logistics21">Github</a>
      </h4>
      <h4 className="footer-item">
        <a href="https://www.linkedin.com/in/david-halsey-72487559/">LinkedIn</a>
      </h4>
      <h4 className="footer-item">
        <a href="https://www.davidhalsey.tech/">Portfolio</a>
      </h4>
    </div>
    <div className="footer-about">
      <p className="footer-p">
        Read The Leaves is all about making our cities feel more like
        neighborhoods. We're more "connected" than ever before, but we're also
        more alone. And all we want to do is bring people together because,
        well, the world is better that way.
      </p>
      <p className="footer-p">
        We're not doing anything groundbreaking. We're creating something that
        would've been incredibly unnecessary 20 years ago. But while we get
        busier, it's easy to forget the value of a conversation for no reason.
        A conversation that's intentionally unintentional.
      </p>
    </div>
  </div>
);

export default Footer;
