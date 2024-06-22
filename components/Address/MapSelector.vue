<template>
  <div class="relative bg-white">
    <span class="p-3 sm:block hidden"
      >موقعیت مورد نظر خود را روی نقشه مشخص کنید</span
    >
    <LMap
      ref="map"
      :zoom="zoom"
      :center="[lat, lng]"
      :use-global-leaflet="false"
      @moveend="moveMap"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[lat, lng]" draggable :z-index="1"></LMarker>
      <LControl position="bottomleft">
        <button
          class="bg-white p-2 flex shadow-md rounded-sm"
          @click="findLocation"
        >
          <Icon name="ic:sharp-my-location" class="text-2xl text-neutral-800" />
        </button>
      </LControl>
    </LMap>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import { useGeolocation } from "@vueuse/core"

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({ lat: 35.7000894, lng: 51.3369652 }),
  },
})
const emit = defineEmits(["update:modelValue", "addressSelected"])

const { coords } = useGeolocation()

const map = ref(null)

const lat = ref(props.modelValue.lat)
const lng = ref(props.modelValue.lng)
const zoom = ref(14)

const moveMap = (e) => {
  let center = e.target.getCenter()
  lat.value = center.lat
  lng.value = center.lng
  emit("update:modelValue", { lat: lat.value, lng: lng.value })
}

const findLocation = () => {
  if (coords.value.latitude) {
    map.value.leafletObject.flyTo(
      [coords.value.latitude, coords.value.longitude],
      zoom.value
    )
  }
}

const selectAddress = () => {
  emit("addressSelected", { lat: lat.value, lng: lng.value })
}
</script>
