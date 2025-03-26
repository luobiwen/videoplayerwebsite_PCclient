<template>
    <div class="carousel-box">
      <el-carousel
        class="carousel"
        :interval="5000"
        :autoplay="true"
      >
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <el-image
            class="carousel-image"
            :src="item.idView"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const images = ref([
    { idView: 'image1.jpg' },
    { idView: 'image2.jpg' },
    { idView: 'image3.jpg' },
    // 更多图片对象...
  ]);
  </script>
  
  <style scoped>
  .carousel-box {
    width: 100%; /* 设置轮播图的宽度 */
    max-width: 600px; /* 最大宽度 */
    margin: auto; /* 水平居中 */
  }
  
  /* 使用 :deep() 函数穿透 scoped 样式 */
  .carousel-box :deep(.el-carousel__container) {
    max-height: 500px !important;
  }
  </style>