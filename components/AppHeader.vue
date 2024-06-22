<template>
  <div class="w-full bg-white shadow-sm z-50 relative" id="app_header">
    <div
      class="container mx-auto flex justify-between items-center h-[60px] p-3 z-50"
    >
      <nuxt-link to="/" class="h-full">
        <img
          src="/images/achareh-type-logo.81c41d5.png"
          height="80"
          width="146"
          alt="آچاره سازی"
          class="h-full w-auto"
        />
      </nuxt-link>

      <nav class="space-x-3 rtl:space-x-reverse text-neutral-800">
        <nuxt-link to="/">ثبت آدرس</nuxt-link>
        <nuxt-link to="/address"> مشاهده آدرس ها</nuxt-link>
      </nav>
    </div>
  </div>
</template>


<style lang="scss">
#app_header{
  .router-link-active{
    color:#00BFA5
  }
}
</style>