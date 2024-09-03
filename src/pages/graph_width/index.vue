<script setup>
import {Graph} from '@antv/x6'
import {onMounted} from "vue";
import {Snapline} from "@antv/x6-plugin-snapline";

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  // 边：连接节点
  edges: [
    {
      shape: 'edge',
      source: 'node1', // 开始节点
      target: 'node2', // 目标节点，会建立从开始节点到目标节点的连线
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
}

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container'),
    autoResize: true,
    width: 800,
    height: 600,
    background: {
      color: '#F2F7FA',
    },
  })
  graph.fromJSON(data) // 渲染元素
  graph.centerContent() // 居中显示

  // 使用插件
  graph.use(
      // 自动对齐
      new Snapline({
        enabled: true,
      }),
  )

  // 数据导出
  console.log(graph.toJSON())
})
</script>

<template>
  <div style="width:100%; height:100%">
    <div id="container"></div>
  </div>
</template>

<style scoped>

</style>