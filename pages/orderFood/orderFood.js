// pages/orderFood/orderFood.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentTab: 0,
		cart: [],
		cartTotal: 0,
		cartTotalPrice: 0,
		foodList: [
			{
				id: 0,
				name: '赣菜'
			},
			{
				id: 1,
				name: '湘菜'
			},
			{
				id: 2,
				name: '川菜'
			},
			{
				id: 3,
				name: '酒水'
			},
			{
				id: 4,
				name: '汤饮'
			}
		],
		classifyList: [
			[
				{
					name: "达利园",
					price: 38,
					url: "",
					introduce: "12341",
					stock: true,
					id: 1
				},
				{
					name: "旺旺",
					price: 58,
					url: "",
					introduce: "12341",
					stock: true,
					id: 19,
				},
				{
					name: "徐福记",
					price: 88,
					url: "",
					introduce: "12341",
					stock: true,
					id: 2
				}
			],
			[
				{
					name: "豆奶",
					price: 18,
					url: "",
					introduce: "12341",
					stock: true,
					id: 3
				},
				{
					name: "绿茶",
					price: 58,
					url: "",
					introduce: "12341",
					stock: true,
					id: 4
				}
			],
			[
				{
					name: "安利",
					price: 18,
					url: "",
					introduce: "12341",
					stock: true,
					id: 5
				},
				{
					name: "脑白金",
					price: 8,
					url: "",
					introduce: "12341",
					stock: true,
					id: 6
				}
			],
			[{
				name: "五粮液",
				price: 18,
				url: "",
				introduce: "12341",
				stock: true,
				id: 7
			},
			{
				name: "茅台",
				price: 8,
				url: "",
				introduce: "12341",
				stock: true,
				id: 8
			}]
		],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */

	//改变当前导航
	changeNav: function (event) {
		this.setData({
			currentTab: event.target.dataset.currentab,
		})
	},
	//添加菜品操作
	ordinInCart: function (event) {
		console.log(event);
		let id = event.currentTarget.dataset.id;
		let stock = event.currentTarget.dataset.stock;
		if (stock) {
			this.changes(id);
		} else {
			
		}
	},
	//改变按钮，购物车操作
	changes: function (id) {
		var carts = this.data.cart;
		for (let key of this.data.classifyList) {
			key.forEach((item) => {
				if (item.id == id  && item.stock) {
					if (!item.selected) {
						console.log("addsuccess");
						this.data.cart.push(item);
						this.data.cartTotal++;
						this.data.cartTotalPrice += item.price;
						item.selected = true;
						console.log( this.data);
					}else if(item.selected){
						console.log( this.data);
						console.log( this.data.cart);
						carts = this.data.cart.filter((cartItem)=>{
							// console.log(id);
							console.log(cartItem.id);
						 	return cartItem.id !=id;
						 }); 
						console.log("deletesuccess");
						console.log(carts);
						this.data.cartTotal--;
						this.data.cartTotalPrice -= item.price;
						item.selected = false;
					}
				}
			});
		}
		console.log(carts);
		this.setData({
			cart : carts,
			cartTotal: this.data.cartTotal,
			cartTotalPrice : this.data.cartTotalPrice,
			classifyList: this.data.classifyList,
		});
	},

	onLoad: function (options) {

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