<markdown>
# Rtl-Debug
</markdown>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space style="margin-bottom: 12px">
        <n-switch v-model:value="showRail" /> Rail
        <span style="margin-left: 12px">type: </span>
        <n-radio-group v-model:value="type">
          <n-radio value="rail">
            rail
          </n-radio>
          <n-radio value="block">
            block
          </n-radio>
        </n-radio-group>
      </n-space>
      <n-anchor
        :show-rail="showRail"
        :show-background="showBackground"
        :type="type"
      >
        <n-anchor-link title="演示" href="#演示">
          <n-anchor-link title="基础用法" href="#basic.vue" />
          <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
          <n-anchor-link title="固定" href="#rtl-debug.vue">
            <n-anchor-link title="Nested link" href="#rtl-debug.vue" />
          </n-anchor-link>
          <n-anchor-link title="滚动到" href="#scrollto.vue" />
        </n-anchor-link>
        <n-anchor-link title="API" href="#API" />
      </n-anchor>
    </n-config-provider>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { unstableAnchorRtl } from 'naive-ui'

export default defineComponent({
  setup () {
    return {
      rtlStyles: [unstableAnchorRtl],
      showRail: ref(true),
      showBackground: ref(true),
      type: ref('rail'),
      rtlEnabled: ref(false)
    }
  }
})
</script>
