<script setup>
defineProps({ blok: Object })
</script>

<script>

</script>

<template>
  <button v-editable="blok">{{blok.text}}</button>
</template>



<style lang="scss">
.calendar__btn{
  cursor: pointer;
  height: 60px;
  background-color: #EF4444;
  border: 3px solid #EF4444;
  border-radius: 12px;
  color: #F9FAFB;
  font-weight: 500;
  font-size: 20px;
}
.calendar__btn_booked{
  background-color: #111827;
  cursor: default;
}

.article__tag{
  background-color: #EF4444AB;
  border-radius: 16px;
  font-family: "SoyuzGroteskBold", sans-serif;
  color: white;
  font-size: 24px;
  line-height: 28.8px;
  padding: 4px 20px;
}
</style>
