const local_dataBase = require('../../data/lodash-data.js');
const typeList = Object.keys(local_dataBase);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [],
    searchPanelShow: false,
    containerShow: true,
    searchResult: [],
    searchText: '',
    fromSearch: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      typeList: typeList
    })
  },
  onListItemTap: function(event) {
    var listItem = event.currentTarget.dataset.listItem;
    if (this.data.fromSearch) {
      wx.navigateTo({
        url: '../func/func?funcItem=' + listItem,
      })
    } else {
      wx.navigateTo({
        url: '../funcList/funcList?typeItem=' + listItem,
      });
    }
  },

  onCancelImgTap: function(event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: [],
      searchText: '',
      fromSearch: false
    })
  },
  onBindFocus: function(event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },

  onBindInput: function(event) {
    var searchText = event.detail.value;
    if (searchText === '') {
      this.onCancelImgTap();
    } else {
      var searchResult = [];
      var data = Object.values(local_dataBase);
      for (let i of data) {
        for (let j in i) {
          if (j.includes(searchText)) {
            searchResult.push(j);
          }
        }
      }
      this.setData({
        searchResult: searchResult,
        fromSearch: true,
        containerShow: false,
        searchPanelShow: true
      });
    }
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