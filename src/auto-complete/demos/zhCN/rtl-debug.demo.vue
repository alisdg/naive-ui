<markdown>
# Rtl Debug
</markdown>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-auto-complete
        v-model:value="value"
        :input-props="{
          autocomplete: 'disabled'
        }"
        :options="options"
        placeholder="邮箱"
      />
    </n-config-provider>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { unstableAutoCompleteRtl } from 'naive-ui'

export default defineComponent({
  setup () {
    const valueRef = ref('')
    return {
      rtlEnabled: ref(false),
      rtlStyles: [unstableAutoCompleteRtl],
      value: valueRef,
      options: computed(() => {
        return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
          const prefix = valueRef.value.split('@')[0]
          return {
            label: prefix + suffix,
            value: prefix + suffix
          }
        })
      })
    }
  }
})
</script>
