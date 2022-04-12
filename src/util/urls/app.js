export default {
  name: 'app',
  urls: [
    {
      type: 'getAppInformation',
      url: '/app/information',
    },
    {
      type: 'getAppHostWords',
      url: '/app/host',
    },
    {
      type: 'feedBackList',
      url: '/app/feedBackList',
    },
    {
      type: 'feedBackInformation',
      url: '/app/feedBack/{id}',
    },
    {
      type: 'getAllArtic',
      url: '/app/artic/list',
    },
    {
      type: 'deleteArtic',
      url: '/app/artic/delete/{id}',
    },
    {
      type: 'addArtic',
      url: '/app/artic/add',
    },
    {
      type: 'getArticInformation',
      url: '/app/artic/{id}',
    },
    {
      type: 'getAllForumList',
      url: '/app/forum/list',
    },
    {
      type: 'addForum',
      url: '/app/forum/add',
    },
    {
      type: 'getForumInformaiton',
      url: '/app/forum/information/{id}',
    },
    {
      type: 'deleteForum',
      url: '/app/forum/delte/{id}',
    },
  ],
};
