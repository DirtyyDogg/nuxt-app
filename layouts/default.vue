<template>
  <a-layout>
    <a-layout-content>
      <nuxt/>
    </a-layout-content>
  </a-layout>
</template>
<style scoped>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.ant-layout {
  background: #fff;
}
.ant-layout-header,
.ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
.ant-layout-footer {
  line-height: 1.5;
}
.ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
.ant-layout-content {
  min-height: 120px;
}
.header-right{
  text-align: right;
}
</style>
