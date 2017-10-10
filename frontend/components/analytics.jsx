import React from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-105597701-2');

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.sendPageChange(props.location.pathname, props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    let currPage = this.props.location.pathname;
    let nextPage = nextProps.location.pathname;
    let currSearch = this.props.location.search;
    let nextSearch = nextProps.location.search;

    if (currPage !== nextPage || currSearch !== nextSearch) {
      this.sendPageChange(nextPage, nextSearch)
    }
  }

  sendPageChange(pathname, search='') {
    const page = pathname + search;
    ReactGA.set({page});
    ReactGA.pageview(page);
  }

  render() {
    return null
  }
}

export default Analytics;
