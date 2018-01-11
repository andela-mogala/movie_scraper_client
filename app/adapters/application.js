import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api/v1',
  host: 'http://localhost:3000/api/v1',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
});
