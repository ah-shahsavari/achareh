<template>
  <div class="flex flex-col justify-center">
    <div class="text-center flex flex-col">
      <Icon
        name="tabler:location-check"
        class="text-8xl mx-auto text-green-500"
      />
      <span class="text-neutral-600"> اطلاعات شما باموقیت ثبت شد </span>
    </div>

    <nuxt-link to="/address"
      class="mt-8 border w-fit mx-auto px-6 py-2 rounded-md border-[#45ccb9]
      text-[#45ccb9]">مشاهده آدرس ها</nuxt-link
    >
  </div>
</template>
