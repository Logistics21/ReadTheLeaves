import { values } from 'lodash';

// export const selectCity = ({ }, ) => {
//  will extract events from cities once they have them
// }

export const selectAllCities = ({ cities }) => values(cities);
