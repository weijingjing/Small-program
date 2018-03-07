var postsData = require("../../data/posts-data.js")

Page({
  data: {
    postList:[]
  },

  onLoad: function (options) {

    this.setData({
      postList: postsData.postList
    })
    // this.setData({
    //   posts_key: postsData.postList
    // });

    },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postid);
    wx.navigateTo({
      url: 'post-detail/post-detail'
    })
  }
})
