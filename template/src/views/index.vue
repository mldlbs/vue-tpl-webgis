<template>
  <div style="position: absolute;">
    <gis-dialog-list />
  </div>
</template>

<script>
export default {
  name: 'WebGisHome',
  mounted() {
    const panelData = [
      {
        title: '工具栏',
        name: 'GisTest',
        data: {},
        conf: {
          type: 'tp1'
        },
        style: {
          width: 400,
          height: 310,
          top: 0,
          left: 0,
          margin: '0px',
          border: 'none',
          borderRadius: 0,
          background: '#0e0e1499'
        },
        drag: {
          enabled: true
        }
      }
    ]
    this.$Panel.createFromJson(panelData)
  }
}
</script>

<style>
</style>
