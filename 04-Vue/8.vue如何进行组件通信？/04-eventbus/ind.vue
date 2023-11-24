//定义中央事件总线
const EventBus = new Vue();
// 将中央事件总线赋值到 Vue.prototype 上，这样所有组件都能访问到了
Vue.prototype.$EventBus = EventBus;
const app = new Vue({
  el: '#app',
  template: `
    <div>
      <A />
      <B />
    </div>
  `
});


// 组件 A
Vue.component('A', {
  template: `
<div>
  <p>this is A component!</p>
  <input type="text" v-model="mymessage" @input="passData(mymessage)"> 
</div>
  `,
  data() {
    return {
      mymessage: 'hello brother1'
    }
  },
  methods: {
    passData(val) {
      //触发全局事件globalEvent
      this.$EventBus.$emit('globalEvent', val)
    }
  }
});


// 组件 B
Vue.component('B', {
  template:`
<div>
      <p>this is B component!</p>
      <p>组件A 传递过来的数据：{{brothermessage}}</p>
    </div>
  `,
  data() {
    return {
      mymessage: 'hello brother2',
      brothermessage: ''
    }
  },
  mounted() {
    //绑定全局事件globalEvent
    this.$EventBus.$on('globalEvent', (val) => {
      this.brothermessage = val;
    });
  }
});

