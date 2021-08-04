
# SuperScrollView 针对CocosCreator cc.ScrollView做的优化 

[在线演示效果](https://icipiqkm.github.io/super-scrollview/)

[Cocos论坛地址](https://forum.cocos.org/t/topic/118518)

[CocosCreator2.x 旧版在这里](https://github.com/icipiqkm/UISuperScrollview)
# 说明
---
    整个列表数据的增减刷新都是在使用层去处理的，组件不需要知道你的数据结构是什么
    无论你对你的数组做了什么样的操作（push，pop ....）
    或者修改了某个元素的内容时，你只需要告诉组件你有多少条数据即可，
    也就是 SuperLayout.total这个方法

# 接口
* SuperLayout.total(length:number) 这个方法就是告诉组件你有多少条数据，每当你增加 删除 或者是你的数组长度没有变化 但是你数组的内容改变了 你都可以调用这个方法来刷新
* SuperLayout.scrollToHeader 滚动到起始位置
* SuperLayout.scrollToFooter 滚动到结束位置
* SuperLayout.scrollToIndex  滚动到指定位置
* 喜欢的话别忘记点个 Star 谢谢

# 撸码不易 手头宽裕打个赏 谢谢

<img src="https://icipiqkm.github.io/image/photo_2021-08-02_00-42-34.jpg" width="357">
<img src="https://icipiqkm.github.io/image/photo_2021-08-02_00-43-03.jpg" width="357">
