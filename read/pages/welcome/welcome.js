Page({
  onContainerTap: function () {
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    // console.log("onContainerTap");

    //页面跳转方法二
    wx.redirectTo({
      url: '../posts/posts',
    })
  }
})