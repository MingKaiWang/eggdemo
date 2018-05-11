<template>
  <div>
    <h1>Home Page 123</h1>
    <nuxt-link to="/detail">Go Detail</nuxt-link>
    <pre>{{data}}</pre>
    <a href="/api/json/xxx">show data</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    let { data } = await axios.get('http://localhost:7001/api/json/xxx')
    return data
  },
  data() {
    return {}
  }
}
</script>