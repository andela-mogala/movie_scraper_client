import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  imgUrl: DS.attr('string'),
  description: DS.attr('string'),
  videoUrl: DS.attr('string')
});
