// app.js
App({
  onLaunch: async function () {
    wx.cloud.init({
      // env: "其他云开发环境，也可以不填"    // 此处 init 的环境 ID 和微信云托管没有作用关系，没用就留空
    });
  
  }


})
