<template>
    <qq2word /> 
    <qq2worddiwa />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import qq2word from './qq2word.vue'
  import qq2worddiwa from './qq2worddiwa.vue'
  
  
  </script>
  
  <style scoped>
  .page-container {
    font-family: "Microsoft JhengHei", sans-serif;
    background-color: #f2f6fc;
    padding: 30px 15px;
  }
  
  .intro-section {
    max-width: 900px;
    margin: auto;
    background-color: #e3f2fd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 0 8px rgba(0,0,0,0.05);
  }
  
  .intro-title {
    font-size: 28px;
    color: #0077cc;
    margin-bottom: 10px;
  }
  
  .intro-text {
    font-size: 16px;
    color: #333;
  }
  
  .container {
    max-width: 900px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    line-height: 1.8;
  }
  
  .brand {
    margin-bottom: 30px;
  }
  
  h2 {
    color: #0056b3;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
  }
  </style>
  