let obj = {
  name: "asa",
  age: 1,
};
const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target);
    return target[key];
  },

  set: function (target, key, newValue) {
    console.log(`监听到对象的${key}被设置值`, target);
    target[key] = newValue;
  },

  // 监听in的捕获器
  has: function (target, key) {
    console.log(`监听到对象的${key}属性in操作`, target);
    return key in target;
  },

  // 监听属性删除的操作
  deleteProperty: function (target, key) {
    console.log(`监听到对象的${key}属性被删除了`, target);
    delete target[key];
  },
});
"age" in objProxy;
delete objProxy.age;
