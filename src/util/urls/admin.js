export default {
  name: 'admin',
  urls: [
    {
      type: 'getAdminList',
      url: '/admin/list',
    },
    {
      type: 'getAdminInformation',
      url: '/admin/information/{id}',
    },
    {
      type: 'deleteAdmin',
      url: '/admin/delete/{id}',
    },
    {
      type: 'creatAdmin',
      url: '/admin/creat',
    },
  ],
};
