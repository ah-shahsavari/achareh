<template>
  <div
    class="container mx-auto flex justify-center"
    :class="state === 0 ? 'px-5' : ''"
  >
    <section
      class="lg:w-8/12 md:w-10/12 sm:w-11/12 w-full"
      :class="state === 0 ? 'mt-5' : ''"
    >
      <header
        class="flex items-center gap-2 mb-3"
        :class="
          state === 1
            ? 'sm:justify-start justify-center sm:bg-transparent bg-white/80 z-50 relative sm:mt-3 py-2'
            : ''
        "
      >
        <Icon
          v-if="state === 1"
          name="humbleicons:arrow-right"
          class="text-neutral-600 text-xl"
          @click="state = 0"
        />
        <label>
          {{ title[state] }}
        </label>
      </header>
      <AddressForm
        v-model="formInfo"
        @onSubmit="submitForm"
        v-if="state === 0"
      />
      <MapSelector v-model="mapPosition" v-if="state === 1" />
      <SuccessMessage v-if="state === 2" />
      <button
        class="submit-form mt-3 sm:static fixed bottom-0 left-0 !py-3 sm:rounded-sm rounded-none z-[1000000] flex justify-center"
        @click="addAddress"
      >
        <LoadingButton v-if="loading" class="w-10 h-6" />
        <span v-else> ثبت و ادامه </span>
      </button>
    </section>
  </div>
</template>

<script setup>
import AddressForm from "~/components/Address/AddressForm.vue"
import MapSelector from "~/components/Address/MapSelector.vue"
import SuccessMessage from "~/components/Address/SuccessMessage.vue"

// State of address form 0:addres 1:mapSelector 2:resault
const state = ref(0)

// Loading of send data
const loading = ref(false)

//FormModel
const formInfo = ref([])

// positon map (lat,lng)
const mapPosition = ref({
  lat: 35.7000894,
  lng: 51.3369652,
})

const title = ref(["ثبت آدرس", "انتخاب آدرس"])

// submit formAddress
const submitForm = () => {
  state.value = 1
}

const addAddress = async () => {
  loading.value = true
  let formData = {
    ...formInfo.value,
    ...mapPosition.value,
    region: "1",
  }
  await useFetchAchareh("api/karfarmas/address", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res?.status?.value === "error") {
        // let errors = res?.error?.value?.data
        useNuxtApp().$toast.error("برخی مقادیر مورد نیاز ارسال نشدند")
      } else {
        state.value = 2
      }
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
