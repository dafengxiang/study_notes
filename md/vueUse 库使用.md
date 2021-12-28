# vueUse 库使用问题

* useElementSize 在老版本安卓手机不兼容，获取不到元素尺寸

  原因 window.resizeobserver 方法不支持
  
* useUrlSearchParams传入hash模式，造成#前查询参数拿不到

  ```js
  例如：http://test.m.iqiyi.com/?screen=half/#/
  ```

