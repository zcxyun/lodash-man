const local_dataBase = require('../../data/lodash-data.js');
const typeValueList = Object.values(local_dataBase);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    funcItem: '',
    funcObj: {},
    isCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const funcItem = options.funcItem;
    const typeItem = options.typeItem || null;
    this.setData({
      funcItem: funcItem,
      typeItem: typeItem
    });
    this._loadData();
  },

  _loadData: function() {
    var
      funcObj = {},
      funcItem = this.data.funcItem,
      typeItem = this.data.typeItem,
      isCollected = wx.getStorageSync('collectObj')[funcItem] || false;

    if (!typeItem) {
      for (let obj of typeValueList) {
        if (obj.hasOwnProperty(funcItem)) {
          funcObj = obj[funcItem];
        }
      }
    } else {
      funcObj = local_dataBase[typeItem][funcItem];
    }
    this.setData({
      funcItem: funcItem,
      funcObj: funcObj,
      isCollected: isCollected
    });
  },

  /**
   * 点击收藏
   */
  onCollected: function(event) {
    this.setData({
      isCollected: !this.data.isCollected
    });
    var collectObj = wx.getStorageSync('collectObj') || {};
    collectObj[this.data.funcItem] = this.data.isCollected;
    wx.setStorageSync('collectObj', collectObj);
    var message = this.data.isCollected ? '已收藏' : '取消收藏';
    wx.showToast({
      title: message,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.funcItem,
    })
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