import { values } from 'lodash';

// export const selectCity = ({ }, ) => {
//  will extract events from cities once they have them
// }

export const selectAllCities = (state) => {
  return values(state.cities);
}

export const selectAllEvents = (events) => {
  return values(events);
}

export const selectAllUsers = (users) => {
  return values(users);
}

export const selectAllHosts = (hosts) => {
  return values(hosts);
}
