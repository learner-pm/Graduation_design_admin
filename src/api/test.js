import { fetch } from 'dva';
import fet from '../util/request';
// console.log(fet);
// fet
//   .get({
//     url: 'http://api.pmthank.cn:5382/artic/getAllArtic',
//     obj: {
//       header: {},
//     },
//   })
//   .then((res) => res.json())
//   .then((e) => {
//     console.log(e);
//   });
console.log(fet);
export async function getAllArtic() {
  const url = '/api/artic/getAllArtic';
  const a = fet.get('/api/artic/getAllArtic');
  a.then((e) => {
    console.log(e);
  });

  return fetch(url);
}
