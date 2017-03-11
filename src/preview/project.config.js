// 在DOM（文件）里查找标签，并返回内容
function getContent (tag) {
  // querySelector可以通过CSS定义，快速查找元素的方法。
  //   会返回最先符合tag这个条件的元素，是类似于jQuery的查找元素的方式
  var element = document.querySelector(tag);
  // 返回标签元素的内容文本
  return element.innerHTML;
}
// 返回随机数
function getRandomOf (max) {
  return (Math.random() * (max-1) + 1).toFixed();
}
// 处理相对路径
var ROOT_PATH = 'https://jonham.github.io/Vuejs-StepByStep-Basic/src/preview/';
function resolvePath (path) {
  return ROOT_PATH + path;
}

// 数据
var currentProjectList = [
  {
    title: '项目列表主页',
    url: resolvePath('')
  },
  {
    title: '00 列表渲染',
    url: resolvePath('00')
  },
];

// 创建一个组件 显示项目的名称和url
// 实质上，应该是创建了一个新的Vue实例，有自己的data methods等等
// Vue.component('project-item', projectItem) 也可以进行注册
var projectItem = {
  // 获取模板
  template: getContent('#project-item'),
  // name是标示这个模板的，可以不写
  name: 'ProjectItem',
  // 这个data只在这个组件里有效
  // 使用函数返回data的值，保证不会组件之间用到同一个变量
  data: function () {
    return {
      secrets: '我是project-item，我每次接收 index title url三个变量，然后展示出来。',

      // 展示vue里，给元素填充style的写法
      // 通过:style可以指定给元素
      linkStyle: {
        // 利用随机数函数，让组件的 超链接字体 大小随机
        fontSize: getRandomOf(5) + 'em',
        // 随机颜色
        color: 'rgba('+getRandomOf(255)+','+getRandomOf(255)+','+getRandomOf(255)+','+(Math.random())+')'
      }
    };
  },
  // props是会从父级得到的数据
  // 比如 <project-item index="12"> 这时 index === 12
  props: [
    'index',
    'title',
    'url'
  ],
  // methods是这个组件里，可以用的函数方法等等，可以用来处理事件
  methods: {
    onclick: function (event) {
      // 我可以想普通的事件监听函数一样处理
      console.log('ProjectItem: onclick事件被触发！');
      console.info('事件的对象如下：');
      console.log(event);
    }
  }
};

// 创建vue实例，读取组件的内容，渲染到指定的位置 （#app这个标签里）
new Vue({
  // 指定渲染的位置
  el: '#app',
  // 数据定义的地方：任何需要在项目中用到的数据，都可以在这里定义
  data: {
    projectList: currentProjectList
  },
  // "模板": 其实就是html代码，已标注了vue数据和逻辑插入的位置
  template: getContent("#project"),
  // 组件： 引入组件
  components: {
    'project-item': projectItem
  }
})
