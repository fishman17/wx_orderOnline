// pages/myCart/myCart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    // cartTotal: 0,
    // cartTotalPrice: 0,
    cartAllIn: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    console.log("跳转至购物车")
    this.setData({
      cart: app.globalData.carts,
    })
    console.log(this.data.cart)
    console.log(app.globalData.carts)
  },
  reduceItems: function (e) {
    let carts = app.globalData.carts;
    let classifyList = app.globalData.classifyList;
    let i = 0;
    for (let key of carts) {
      console.log(i);
      if (key.id === e.target.dataset.id) {
        key.cartSelected = true;

        if (key.num === 1) {
          console.log("没了");
          key.num--;
          key.cartSelected = false;
          // classifyList.forEach((otherKey)=>{
          //   otherKey.forEach((anotherKey)=>{
          //     if(anotherKey.id ===e.target.dataset.id)
          //     {
          //       anotherKey.selected = false;
          //     }
          //   })
          // });
          // for(let keyy in classifyList)
          // {
          //   for(let keyyy in classifyList[keyy])
          //   {

          //     for(let keyyyy in classifyList[keyy][keyyy]){
          //       console.log(classifyList[keyy][keyyy]);
          //       if(classifyList[keyy][keyyy][keyyy].id ===e.target.dataset.id ){
          //         classifyList[keyy][keyyy][keyyy].id .selected =false;
          //       }
          //     }
          //   }
          // }


          key.selected = false;
          app.globalData.carts = carts.filter((item) => {
            return item.id != e.target.dataset.id;
          })
        } else {
          key.num--;
          console.log(key.num);
        }
      }
      i++;
    }

    let num = 0;
    let totalPrice = 0;
    for (let key of carts) {
      if (key.cartSelected) {
        num += key.num;
        totalPrice += key.num * key.price;
      }
    }
    this.setData({
      cart: app.globalData.carts,
      cartTotal: num,
      cartTotalPrice: totalPrice,
    })

  },
  addItems: function (e) {
    let carts = app.globalData.carts;
    for (let key of carts) {
      console.log(carts);
      if (key.id === e.target.dataset.id) {
        key.cartSelected = true;
        console.log("add");
        key.num++;
        console.log(key.num);
        console.log(carts);
      }

    }
    let num = 0;
    let totalPrice = 0;
    for (let key of carts) {
      if (key.cartSelected) {
        num += key.num;
        totalPrice += key.num * key.price;
      }
    }
    this.setData({
      cart: app.globalData.carts,
      cartTotal: num,
      cartTotalPrice: totalPrice,
    })
  },

  cartAdd: function (e) {
    console.log(e);
    let carts = this.data.cart;
    for (let key of carts) {
      if (key.id === e.currentTarget.dataset.id) {

        if (key.cartSelected) {
          key.cartSelected = false;
        } else {
          key.cartSelected = true;
        }
        console.log(key.cartSelected);
      }
    }

    let num = 0;
    let totalPrice = 0;
    for (let key of carts) {
      if (key.cartSelected) {
        num += key.num;
        totalPrice += key.num * key.price;
      }
    }
    console.log(totalPrice);
    this.setData({
      cart: carts,
      cartTotal: num,
      cartTotalPrice: totalPrice,
    });
    app.globalData.carts = carts;
  },
  cartAllIn: function () {

    for (let key of this.data.cart) {
      if (this.data.cartAllIn) {
        key.cartSelected = false;
      } else {
        key.cartSelected = true;
      }
    }
    if (this.data.cartAllIn) {
      this.data.cartAllIn = false;
      app.globalData.cartAllIn = false;
    } else {
      this.data.cartAllIn = true;
      app.globalData.cartAllIn = true;
    }
    let num = 0;
    let totalPrice = 0;
    let carts = this.data.cart;
    for (let key of carts) {
      if (key.cartSelected) {
        num += key.num;
        totalPrice += key.num * key.price;
      }
    }

    this.setData({
      cartAllIn: this.data.cartAllIn,
      cart: this.data.cart,
      cartTotal: num,
      cartTotalPrice: totalPrice,
    });
    app.globalData.carts = this.data.cart;
  },
  finishedOrder: function () {
    wx.showToast({
      title: "您好像没钱",
      icon: "loading",
      duration: 2000,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(1);
    this.setData({
      cart: app.globalData.carts,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})