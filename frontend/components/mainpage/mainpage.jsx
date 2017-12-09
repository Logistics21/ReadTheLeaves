import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.PureComponent {
  render() {
    return (
      <div className="mainpage-container">

        <div className="jumbotron">
          <div className="jumbotron-filter" />
        </div>
        <div className="pitch-box">
          <h1 className="pitch-text">Everyone is interesting</h1>
          <h2 className="pitch-p">But you don’t discover that when you’re staring at a screen.</h2>
          <Link to='/signup' className="body-signup-button">LET'S GET TEA</Link>
        </div>

        <div className="about-container">
          <div className="about-part">
            <h2 className="about-headline h2">Show up for tea time</h2>
            <p className="about-text p">You and a few others join a host at a cafe.</p>
          </div>

          <div className="about-part">
            <h2 className="about-headline h2">Have a real conversation</h2>
            <p className="about-text p">You talk for two hours about anything.</p>
          </div>

          <div className="about-part">
            <h2 className="about-headline h2">See what happens</h2>
            <p className="about-text p">That's it. No strings attached.</p>
          </div>
        </div>


        <div className="upper-body-container">
          <h3 className="why-title">SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>

          <div className="why-explain-item">
            <img
              className="mainpage-image"
              src='https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/people.png' />
            <div className="why-explain">
              <h2 className="why-explain-header h2">It’s weird.</h2>
              <p className="why-explain-p p">
                Everyone at tea time is stepping a little out of their
                comfort zone. This makes it so much easier to actually learn
                something unexpected about the people around you. Because
                open minds are a prerequisite around here.
              </p>
            </div>
          </div>

          <div className="why-explain-item">
            <div className="why-explain">
              <h2 className="why-explain-header h2">We won't meet otherwise.</h2>
              <p className="why-explain-p p">
                In all likelihood, our paths won’t cross for any reason. So
                often, we only meet people through work, school, or friends
                of friends. And even then, it’s questionable. So basically,
                we manufacture serendipity.
              </p>
            </div>
            <img
              className="mainpage-image"
              src='https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/never.png' />
          </div>

          <div className="why-explain-item">
            <img
              className="mainpage-image"
              src='https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/five.png' />
            <div className="why-explain">
              <h2 className="why-explain-header h2">Your hands are made for high fiving!</h2>
              <p className="why-explain-p p">
                And your eyes are made…for eye contact! Real humans are so
                much cooler than their tweets or Instagram pictures. Tea
                time has real humans! #nofilter!
              </p>
            </div>
          </div>
        </div>

        <div className="body-signup">
          <h2 className="signup-text">Actually talk to people.</h2>
          <Link to='/signup' className="body-signup-button">LET'S GET TEA</Link>
        </div>

        <div className="lower-body-container">

          <div className="testimonials">
              <p className="quote">
                ”I met people who I continue to be in touch with almost
                a year later, and people who I shared delightful
                conversations with that day but no more. Both are their
                own kind of fun.”
                <span className="quote-bold">Freia, NYC</span>
              </p>
              <p className="quote">
                ”I’m not the type of person who talks to strangers.
                This doesn’t mean I don’t want to. Read The Leaves
                just makes it easier because you know everyone there
                wants it too.”
                <span className="quote-bold">Molly, SF</span>
              </p>
          </div>

          <img
            className="mainpage-image img2"
            src='https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/weird.png' />

          <h3 className="stranger-title">THERE'S NO SUCH THING AS A STRANGER.</h3>

          <div className="stranger-story">
            <img className="mainpage-image img3" src='https://s3.us-east-2.amazonaws.com/readtheleaves1-dev/images/camp.png' />
              <article className="stranger-right">
                <p className="stranger-p">
                  You'd never think of yourself as a stranger. But
                  everyone else does. You know your story. Your
                  embarrassments. Your joy. Your idiocyncrasies — the
                  thing that make you, you. But they don't.
                </p>
                <p className="stranger-p">
                  And everyone has these — whether or not we know what
                  they are. Everyone around you is a person, loaded
                  with stories that you can't even begin to fathom.
                  They're different from yours, but the fact that we
                  all have them is what brings us together.
                </p>
                <p className="stranger-p">
                  In a stranger's story, we might discover parts of
                  our own. And in seeing where a stranger is coming
                  from, we might realize they're actually not so
                  strange. But we don't discover much just by thinking
                  about it. So let's find out.
                </p>
              </article>
            </div>
          </div>

        <div className="body-signup">
          <h2 className="signup-text">Do we get to high five yet?</h2>
          <Link to='/signup' className="body-signup-button">YES</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
