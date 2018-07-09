const local_dataBase = require('../../data/lodash-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    funcList: [],
    typeItem: '',
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
    const typeItem = options.typeItem;
    const funcList = Object.keys(local_dataBase[typeItem]);
    this.setData({
      funcList: funcList,
      typeItem: typeItem
    });

  },

  onListItemTap: function(event) {
    const funcItem = event.currentTarget.dataset.listItem;
    if (this.data.fromSearch) {
      wx.navigateTo({
        url: '../func/func?funcItem=' + funcItem
      });
    } else {
      wx.navigateTo({
        url: '../func/func?funcItem=' + funcItem + '&typeItem=' + this.data.typeItem
      });
    }
  },

  onCancelImgTap: function(event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: [],
      searchText: ''
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
      var data = Object.keys(local_dataBase[this.data.typeItem]);
      for (let i of data) {
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
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.typeItem,
    });
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