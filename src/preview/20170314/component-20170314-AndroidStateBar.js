// 注册组件
// 组件的 template在html上的 <script lang="x-template"> 上
// 这是官方推荐的做法，实质上就是读取这个script里的文本内容 innnerHTML

// 通用的Icon的元素
Vue.component('IconSwitch', {
  template: "#IconSwitch",
  props: ['icon']
})
// 信号
Vue.component('Signal', {
  template: "#Signal",
  props: [
    'signaltype',
    'condition'
  ]
})
// 电池
Vue.component('Battery', {
  template: "#Battery",
  props: ['num']
})
// 通用未读消息
Vue.component('CommonMessage', {
  template: "#CommonMessage",
  props: ['icon','num']
})
// 时间
Vue.component('TimeClock', {
  template: "#Time",
  props: {
    time: {
      type: Number
    }
  },
  methods: {
    format: function (time) {
      var t = new Date(time)
      return t.getHours() + ':' + ("00" + t.getMinutes()).substr(-2)
    }
  }
})

var vm = new Vue({
  el: "#android-state-bar",
  data: {
    signalType: '4G+',
    signalCondition: 5,
    unreadMessageCount: 2,
    time: 0,

    icon: {
      alert: './icons/icon-alert.png',
      battery: './icons/icon-battery.png',
      commonMessage: './icons/icon-common-message.png',
      vibrate: './icons/icon-vibrate.png',
    }
  },
  mounted: function() {
    var vm = this;
    setInterval(function() {
      vm.time = new Date().getTime();
    }, 100)
  }
})
