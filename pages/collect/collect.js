// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    funcList: [],
    containerShow: true,
    searchPanelShow: false,
    searchResult: [],
    searchText: '',
    fromSearch: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },


  onListItemTap: function(event) {
    const funcItem = event.currentTarget.dataset.listItem;
    wx.navigateTo({
      url: '../func/func?funcItem=' + funcItem
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var collectObj = wx.getStorageSync('collectObj');
    var tempArr = [];
    for (let i in collectObj) {
      if (collectObj[i] === true) {
        tempArr.push(i);
      }
    }
    this.setData({
      funcList: tempArr
    });
  },

  onCancelImgTap: function (event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: [],
      searchText: ''
    })
  },
  onBindFocus: function (event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },

  onBindInput: function (event) {
    var searchText = event.detail.value;
    if (searchText === '') {
      this.onCancelImgTap();
    }
    var searchResult = [];
    var funcList = this.data.funcList;
    for (let i of funcList) {
      if (i.includes(searchText)) {
        searchResult.push(i);
      }
    }
    this.setData({
      searchResult: searchResult,
      fromSearch: true,
      containerShow: false,
      searchPanelShow: true
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})