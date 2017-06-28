import React from 'react';
import { Route, Link } from 'react-router-dom';

class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id);
    debugger
  }

  componentDidMount() {
    this.props.fetchCity(this.id);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.cities).length !== Object.keys(this.props.cities).length) {
      this.props.fetchCity(nextProps.match.params.id);
    }
  }

  renderCityName() {
    debugger
    return (
      <div className="city-name-container">
        <h1 className="city-title">{this.props.cities[this.id].name}</h1>
        <h3 className="get-tea">LET'S GET TEA!</h3>
      </div>
    );
  }
//   ["Shiv",
//    "Jillian","Misha",
// "Kyle","Nou",
// "Owen",
// "Yohan",  "Willie", "Alex",
// "Sophia,"
// "Shumita",
// "Joel",
// "Claire"]
  // renderPastHosts() {
    // return (
    //   <div className="past-hosts-container">
    //     <h2 className="past-host-title">Hosts we've missed!</h2>
    //     <p className="past-host-p">
    //       Every host in the community has played a huge role in making this
    //       movement come to life. You might not have seen tea times from these
    //       hosts in a bit, but without them, Tea With Strangers in New York
    //       City wouldn't be where it is today.
    //     </p>
    //   </div>
    // );
  // }

  // renderCurrentHosts() {
    // const hosts = this.state.hosts.map(host => {
    //   return (
    //     <div className="current-hosts-container">
    //       <h2>{host.first_name}</h2>
    //     </div>
    //   );
    // });

  //   return (
  //     <div className="hosts-container">
  //       <div className="hosts-stories">
  //         <h2 className="host-title">
  //           The Host Community is full of amazing stories.
  //         </h2>
  //         <p className="host-p">
  //           How else would someone end up regularly bringing strangers together
  //           for conversations? Before each of them were invited to community,
  //           they were attendees that fed their tea times with their questions,
  //           open-mindedness, and presence.
  //         </p>
  //       </div>
  //       {hosts}
  //       {this.renderPastHosts()}
  //     </div>
  //   );
  // }

  // renderCityAlert() {
    // not signed in => link to signup
    // signed in, no home => link to signup
    // signed in && is home city => link to cities index
    // signed in && at diff home city => set new city as homecity/re-render
    // city with new message
  // }

  render() {
    return (
      <div className="city-detail-container">
        <h2>Tea</h2>
        {this.renderCityName()}
    </div>
    );
  }
}


export default CityDetail;


//   <div className="city-info-container">
//     <div className="tea-time-container">
//       <h2>
//         Tea Time is a conversation between a few
//         people who know nothing about each other.
//       </h2>
//       <p>
//         You'll never leave without questions, new perspectives, and the
//         reminder that we're far more the same than we are different.
//       </p>
//   </div>
//   <div className="events-container">
//     null
//   </div>
//     {this.renderCurrentHosts()}
//   </div>
