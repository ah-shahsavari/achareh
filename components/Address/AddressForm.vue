<template>
  <div class="bg-white rounded-sm shadow-md p-5 mt-3">
      <strong class="text-neutral-800">لطفا مشخصات خود را وارد کنید</strong>
      <FormKit type="form" @submit="handleSubmit" ref="addressForm">
        <div class="grid gap-5 sm:grid-cols-3 grid-cols-1  mt-5">
          <FormField
            v-for="field in fields"
            :key="field.name"
            :field="field"
            :formData="formData"
            @clearField="clearField"
          />
          <div class="sm:col-span-3">
            <FormKit
              type="radio"
              name="gender"
              label="جنسیت"
              :options="[
                { value: 'male', label: 'آقا' },
                { value: 'female', label: 'خانوم' },
              ]"
              v-model="formData.gender"
              validation="required"
            />
          </div>
        </div>
        <hr class="my-5" />
        <button type="submit" class="submit-form mb-3">ثبت و ادامه</button>
      </FormKit>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue"
import FormField from "./FormField.vue"

const props = defineProps({
  modelValue: Object,
})

const emit = defineEmits(["update:modelValue","onSubmit"])

const addressForm = ref(null)

const formData = reactive({ ...props.modelValue })

watch(
  formData,
  (newFormData) => {
    emit("update:modelValue", newFormData)
  },
  { deep: true }
)

const fields = [
  {
    name: "first_name",
    label: "نام *",
    validation: "required|length:3",
    placeholder: "نام خود را وارد کنید",
  },
  {
    name: "last_name",
    label: "نام خانوادگی *",
    validation: "required|length:3",
    placeholder: "نام خانوادگی خود را وارد کنید",
  },
  {
    name: "coordinate_mobile",
    label: "شماره موبایل *",
    validation: "required|matches:/^09[0-9]{9}$/",
    placeholder: "شماره موبایل خود را وارد کنید",
  },
  {
    name: "coordinate_phone_number",
    label: "شماره تلفن",
    validation: "length:11",
    placeholder: "شماره تلفن خود را وارد کنید",
  },
  {
    name: "address",
    label: "آدرس *",
    validation: "required|length:10",
    placeholder: "آدرس خود را وارد کنید",
    colSpan: 'sm:col-span-2 col-span-3',
  },
]

const handleSubmit = (data) => {
  emit('onSubmit',data)
}

const clearField = (field) => {
  formData[field] = ""
}
</script>

<style lang="scss">

.formkit-form {

  .formkit-message {
    font-size: 0.8rem;
    margin-top: 0.2rem;
    color: red;
  }
  .formkit-outer {
    [type="submit"] {
      display: none;
    }
    .formkit-label {
      margin-bottom: 0.3rem;
      display: block;
    }
    &[data-invalid="true"] {
      .formkit-input {
        border-color: red !important;
      }
    }
    .formkit-input[type="text"] {
      width: 100%;
      border: 1px solid #ccc;
      padding: 0.5rem;
      border-radius: 0.3rem;

      &:focus{
        outline-color: #45ccb9;
      }
    }
    .formkit-options {
      display: flex;
      .formkit-option {
        margin-left: 0.5rem;
        .formkit-wrapper {
          display: flex;
          span {
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
