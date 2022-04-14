const uni = {
  request({}) {},
};

const methods = ['GET', 'POST'];

class Http {
  constructor() {
    this.addMethods();
  }
  addMethods() {
    for (let i = 0; i < methods.length; i++) {
      this[methods[i]] = this.request;
    }
  }
  request(url, data, header) {
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        data,
        header,
        success: (res) => {
          if (res.code === 200) resolve(res);
          else reject(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }
}

const http = new Http();

export default http;
