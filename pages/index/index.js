// index.js
Page({
  data: {
    text: "This is page data.",
    counter: 10
  },
  onLoad: function(options) {
    let that = this;
    // 页面创建时执行
    console.log("text:"+this.data.text)
    wx.cloud.callContainer({
      "config": {
        "env": "prod-1gvku656ef9376d0"
      },
      "path": "/api/count",
      "header": {
        "X-WX-SERVICE": "flask-2ev5"
      },
      "method": "POST",
      "data": {
        "action": "inc"
      },
      success (res) {
        console.log(res.data)
        that.setData({
          "counter": res.data.data
        })
      }
    })
  },
  onShow: function() {
    // 页面出现在前台时执行
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
  },
  onHide: function() {
    // 页面从前台变为后台时执行
  },
  onUnload: function() {
    // 页面销毁时执行
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
  },
  onReachBottom: function() {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function() {
    // 页面滚动时执行
  },
  onResize: function() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件响应函数
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
      console.log("text:"+this.getData("text"))
    })
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  },

  clickCounterButton: function() {
    let that = this;
    wx.cloud.callContainer({
      "config": {
        "env": "prod-1gvku656ef9376d0"
      },
      "path": "/api/count",
      "header": {
        "X-WX-SERVICE": "flask-2ev5"
      },
      "method": "POST",
      "data": {
        "action": "inc"
      },
      success (res) {
        console.log(res.data)
        that.setData({
          "counter": res.data.data
        })
      }
    })


  }
})

