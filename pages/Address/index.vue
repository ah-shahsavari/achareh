<template>
  <div class="container mx-auto mt-3 p-5">
    <h1 class="text-lg">آدرس ها و مشخصات</h1>
    <!-- {{ items }} -->
    <section
      class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5 gap-5 my-5 bg-white w-full [&>div]:flex [&>div]:flex-col [&_strong]:text-neutral-800 [&_label]:text-neutral-500 [&_label]:mb-2"
      v-for="item in items"
    >
      <div>
        <label for="">نام:</label>
        <strong>{{ item.first_name }}</strong>
      </div>
      <div>
        <label for="">نام خانوادگی:</label>
        <strong>{{ item.last_name }}</strong>
      </div>
      <div>
        <label for="">شماره همراه:</label>
        <strong>{{ item.coordinate_mobile }}</strong>
      </div>
      <div>
        <label for="">شماره ثابت:</label>
        <strong>{{ item.coordinate_phone_number }}</strong>
      </div>
      <div>
        <label for="">جنسیت:</label>
        <strong>{{ item.gender }}</strong>
      </div>
      <div class="sm:border-0 border-t pt-3 sm:pt-0">
        <label for="">آدرس:</label>
        <strong>{{ item.address }}</strong>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: items } = await useFetchAchareh("api/karfarmas/address")
</script>
