export default {
  name: 'user',
  urls: [
    {
      type: 'getUserInformation',
      url: '/user/information/{id}',
    },
    {
      type: 'getUserList',
      url: '/user/list',
    },
    {
      type: 'disableUser',
      url: '/user/disable/{id}',
    },
  ],
};
