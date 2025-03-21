import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import axios from 'axios'

const API_URL = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore('counter', () => {
  // 定义数据 state
  const count = ref(0);
  // 定义修改数据的方法 （action 同步+异步）
  const increment = () => {
    count.value++
  }
  // getter 定义
  const doubleCount = computed(() => count.value * 2);

  // 自定义action
  const list = ref([]);
  const getList = async () => {
    const res = await axios.get(API_URL);
    list.value = res.data.data.channels
  }

  // 以对象的方式return 供组件使用
  return {
    count,
    increment,
    doubleCount,
    list,
    getList
  }
})
