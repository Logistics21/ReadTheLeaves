import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <div className="footer-container-1">
      <div className="footer-container">
        <div className="footer-links">
          <Link className="footer-item" to="/about">About</Link>
          <Link className="footer-item" to="/hosting">Hosting</Link>
          <Link className="footer-item" to="/cities">Cities</Link>
          <Link className="footer-item" to="/">Facebook</Link>
          <Link className="footer-item" to="/">Twitter</Link>
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
    </div>
  </div>
);

export default Footer;
