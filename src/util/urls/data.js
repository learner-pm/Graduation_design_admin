export default {
  name: 'data',
  urls: [
    {
      type: 'bodyList',
      url: '/data/list',
    },
    {
      tyep: 'addRule',
      url: '/data/addRule',
    },
    {
      type: 'getPeopleAge',
      url: '/data/peopleAge',
    },
    {
      type: 'getHealthy',
      url: '/data/peopleHealthy',
    },
    {
      tyep: 'getRunList',
      url: '/data/runList',
    },
    {
      type: 'getRun',
      url: '/data/run/{id}',
    },
  ],
};
