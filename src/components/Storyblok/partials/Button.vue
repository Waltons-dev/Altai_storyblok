<script setup>
defineProps({ blok: Object })
</script>

<script>

</script>

<template>
  <button v-editable="blok">{{blok.text}}</button>
</template>



<style lang="scss">
.calendar__btn,.booking-zone__time,.booking-zone__continue-button{
  cursor: pointer;
  height: 60px;
  background-color: #EF4444;
  border: 3px solid #EF4444;
  border-radius: 12px;
  color: #F9FAFB;
  font-weight: 500;
  font-size: 20px;
  transition: color ease 0.5s;
}
.calendar__btn:hover, .booking-zone__time:hover{
  color: #111827;
}

.calendar__btn_booked{
  background-color: #111827;
  cursor: default;
  pointer-events: none;
}
.calendar__btn_active{
  color: #111827;
  font-weight: 700;
}
.booking-zone__time{
  padding: 14px 20px;
  margin-bottom: 6px;
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
.booking-zone__continue-button{
  background-color: #111827;
  margin-top: auto;
  margin-right: 25px;
  cursor:not-allowed;
}

.hero__button-request{
  padding: 10px 28px;
  border-radius: 16px;
  background-color: #EF4444;
  color: #F9FAFB;
  transition: all ease 0.4s;
  cursor: pointer;
  border: 2px solid #EF4444;
  font-size: 16px;
  font-weight: bold;
}
.hero__button-request:hover{
  background-color:#F9FAFB;
  color: #EF4444;
}

.hero__button-calendar{
  border: 2px solid #EF4444;
  padding: 10px 28px;
  border-radius: 16px;
  color: #EF4444;
  background-color: #F9FAFB;
  cursor: pointer;
  transition: all ease 0.4s;
  font-size: 16px;
  font-weight: bold;
}
.hero__button-calendar:hover{
  background-color: #EF4444;
  color:#F9FAFB;
}
</style>
