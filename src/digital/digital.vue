<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2021-11-24 13:37:29
 * @LastEditors: lc
 * @LastEditTime: 2021-11-24 14:22:36
-->
<template>
  <div
    class="number_scroll"
    :style="{
      width: width + 'px',
      height: height + 'px',
      lineHeight: height + 'px',
      fontSize: fontSize + 'px',
    }"
  >
    <div
      class="number_scroll_box"
      :style="{ transform: 'translateY(-' + num * height + 'px)' }"
    >
      <span v-for="idx in 10" :key="idx">{{ idx - 1 }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "digital",
  props: {
    num: {
      type: Number || String,
      default: 0,
    },
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 60,
    },
    fontSize: {
      type: Number,
      default: 32,
    },
  },
};
</script>
<style scoped>
.number_scroll {
  color: #cae097;
  position: relative;
  overflow: hidden;
  background: #0f3758;
  display: inline-block;
}
.number_scroll_box {
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.number_scroll_box > span {
  width: 100%;
  height: 100%;
  float: left;
  text-align: center;
}
</style>