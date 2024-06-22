<template>
  <div :class="`${field.colSpan || 'sm:col-span-1 col-span-3'} relative`">
    <FormKit
      :name="field.name"
      :label="field.label"
      :validation="field.validation"
      :placeholder="field.placeholder"
      v-model="formData[field.name]"
    />
    
    <button
      v-if="formData[field.name]"
      type="button"
      @click="() => $emit('clearField', field.name)"
      class="clear-field-btn  rounded-full p-1 absolute left-2 top-[2.4rem] flex"
    >
      <!-- <XIcon size="1x" class="text-neutral-800" /> -->
      <Icon name="carbon:close-filled" class="text-neutral-400"/>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  field: Object,
  formData: Object,
})
</script>

