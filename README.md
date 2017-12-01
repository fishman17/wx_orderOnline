### 项目初览
> 仿造盒马鲜生，实现了部分功能。<br>

盒马鲜生是阿里巴巴对线下超市完全重构的新零售业态，热度十分


![](https://user-gold-cdn.xitu.io/2017/12/1/1601101dde0a0185?w=343&h=631&f=gif&s=2404841)

![](https://user-gold-cdn.xitu.io/2017/12/1/1600fe4fd66b3587?w=237&h=420&f=png&s=117741)



![](https://user-gold-cdn.xitu.io/2017/12/1/16011022ca8663da?w=343&h=631&f=gif&s=589002)




![](https://user-gold-cdn.xitu.io/2017/12/1/16011026998ea9e9?w=365&h=640&f=gif&s=1556064)
![](https://user-gold-cdn.xitu.io/2017/12/1/16010029fe869d94?w=263&h=460&f=png&s=37249)

#### 项目功能
    * 用户信息注册
    * 首页几个轮播和界面交互
    * 分类商品管理购买
    * 购物车界面交互及其操作
    * 个人信息界面
    
## 小程序设计过程
小程序是一个易上手的东西， 对于新手来说，多看官方文档，可以初步做出比较完整的小程序，正是因为简单上手，功能实现简单，小程序是越来越火，商业价值也越来越大。

#### 1.项目工具和文档
1. 微信web开发者工具：[微信小程序官网](https://mp.weixin.qq.com/debug/wxadoc/dev/)  这是个比较好用的编辑器，对于小程序编辑很方便。
2. 开发文档：[微信小程序宝典秘籍](https://www.w3cschool.cn/weixinapp/9wou1q8j.html) 通过这个查找微信小程序的API，组件，框架等等。
3. 图标库： [Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 这个可以找到自己想要的几乎所有的小图标，十分方便。
4. Easy Mork： [easy-mock](www.easy-mock.com) 用于后台的模拟，得到JSON数据；
5. weui框架引入， 例如个人信息界面，用weui可以很快很方便的做

#### 2.项目开发

微信小程序开发和传统的H5开发还是有些不同的， 容易踩坑。
小程序是基于MVVM的的框架，合理利用数据绑定实现界面的更新是很关键的
开发时不要一股脑的写写写，多看看文档，你会发现你不小心原生写了个组件。。

#### 3.项目发布
进入开发平台，注册项目信息->在编辑器中上传版本->在开发版本中选择提交审核->审核通过->项目上线



## 部分功能解析
先看看我的项目目录
```
    "pages": [
     "pages/index/index",  //主界面
      "pages/person/person", //个人界面
     "pages/classify/classify", //分类商品界面
     "pages/class/myFruits/myFruits", //水果商店
     "pages/class/myMeat/myMeat", //肉类食品商店
     "pages/myCart/myCart"    //购物车
     ],
```
### 1.首页轮播图

轮播有几种形式， 比如常见的横向海报图片展示， 还有横纵向商品列表展示，头条信息框轮换
siwper组件很好的实现了横向海报图片展示，比如
```
        <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
            <block wx:for="{{imgUrls}}" wx:key="index">
                <swiper-item>
                    <image src="{{item}}" class="slide-image"  />
                </swiper-item>
            </block>
        </swiper>
```
然而横向滑动需要注意些别的细节  
首先要给swiper组件加上scroll-x-="true"  
然后给轮播的子元素父容器设置display: inline-block; white-space: nowrap; 

头条信息框转换采用上下轮换， 使用scroll-view嵌套swiper完成

```
    <scroll-view scroll-y-="true"  >
                <swiper autoplay="{{autoplay}}" interval="{{interval1}}" duration="{{duration}}" vertical="true">
                    <block wx:for="{{something}}" wx:key="index">
                         //内容 
                    </block>
                </swiper>
    </scroll-view>
```

### 2.分类商品管理
首先在index界面通过onLoad生命周期函数 ，
通过easy-moc获取后台数据，将必要的信息送给全局的globalData  
 ```    
 wx.request({
       url: 'http://www.easy-mock.com/mock/5a1ffb42583969285ab22bb7/orderOnline/orderOnline',
       complete: res => {
         this.globalData.classifyList = res.data;
       },
     })
```
对于数据处理，需要理清哪些是全局信息， 哪些是局部信息 
比如所有商品的信息，购物车里的商品，就得放到全局中 ，而有些比如当前界面的状态，一般放到当前界面的Data里面保存

而有些个人信息，比如出生年月，账号信息   则可以通过wx.setStorage 和wx.getStorage放入本地存储

### 3.购物车操作
购物车中的操作无非是些加加减减，需要自己不断调试，找出哪里不合常理
通过view，button里的bindtap等操作，实现对商品信息的修改，购物车状态的处理


举个例子  减少购物车中的商品的数量操作
```
reduceItems: function (e) {
    let carts = app.globalData.carts;    //获取购物车的信息
    let classifyList = app.globalData.classifyList;  //获取商品的信息
    for (let key of carts) {                        //遍历购物车数组
      if (key.id === e.target.dataset.id) {         //通过WXML中 view里面的bind-id传过来的参数进行查找
        key.cartSelected = true;
        if (key.num === 1) {                  //如果数量为1还要减
          key.num--;
          key.cartSelected = false;           //购物车不选中
          key.selected = false;               //商品中不选中
          app.globalData.carts = carts.filter((item) => {    //进行购物车中商品剔除
            return item.id != e.target.dataset.id;
          })
        } else {
          key.num--;
        }
      }
    }
    let num = 0;                                 //实时更新购物车小计界面显示
    let totalPrice = 0;
    for (let key of carts) {
      if (key.cartSelected) {
        num += key.num;
        totalPrice += key.num * key.price;
      }
    }
    this.setData({                          //通过setData进行当前页面Data数据管理
      cart: app.globalData.carts,
      cartTotal: num,
      cartTotalPrice: totalPrice,
    })
  },
```
### 4.weui框架引入
**在全局CSS样式中 添加的CSS适配于所有的页面，由此可以引入weui ,做一些界面真的很方便**
```
@import './styles/weui.wxss';
```

## 总结
1. 微信小程序的组件，API很强大，需要不断的探索，不断的学习，多看文档
2. 善于利用有效资源， 比如iconfont  esay-moc weui等
3. 切页面要细心，善于利用弹性布局等布局方法，小程序的rpx确实很好用
4. 不要一股脑的写代码， 当函数具有复用性，应该抽象出来，封装好，这样代码才易于维护，易读

### 项目地址:
https://github.com/fishman17/wx_orderOnline   内含详细注释

### 个人简介
github : https://github.com/fishman17
邮箱 : 734583898@qq.com  

**最后 如果您喜欢这个项目的话，给个star哦 谢谢！**
