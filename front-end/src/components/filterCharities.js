import charitiesList from './charitiesList.json';

export default function filterCharities(searchText) {
  const data = charitiesList[0].charitySearchResults
  return data.filter(
    function(data) {
      return data.name == searchText
    }
  );
}
