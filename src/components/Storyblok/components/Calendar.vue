<script setup>
import Button from "../partials/Button.vue"

const weekdays = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

// надо бы поставить timeout на появление book_zone чтобы уменьшение ширины типа плавно было

</script>
<script>
  import {ref} from "vue";
  let now = new Date();
  const months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = ref(now.getFullYear());
  let num_month = now.getMonth();
  let text_month = ref(months[num_month]);
  //получаем на вход день в виде ДД.ММ.ГГГГ
  let bookedHousesDates = [
    {date: '04.10.2023', time: '00:30'},
    {date: '11.02.2025', time: '12:30'},
    {date: '30.07.2024', time: '22:30'},
    {date: '05.07.2024', time: '22:30'},
  ]
  let FreeRaftingDays = [
    {date: '04.10.2024', time: '04:30'},
    {date: '11.02.2025', time: '12:30'},
    {date: '30.07.2024', time: '22:30'},
    {date: '05.07.2024', time: '09:00'},
    {date: '05.07.2024', time: '14:00'},
    {date: '05.07.2024', time: '18:30'},
    {date: '05.07.2024', time: '17:30'},
    {date: '05.07.2024', time: '08:30'},
    {date: '05.07.2024', time: '20:30'},
    {date: '05.07.2024', time: '18:30'},
    {date: '05.07.2024', time: '18:30'},
    {date: '05.09.2024', time: '18:30'},
    {date: '05.07.2024', time: '18:30'},
    {date: '05.07.2024', time: '18:30'},
    {date: '05.07.2024', time: '17:00'},
    {date: '05.07.2024', time: '17:30'},
    {date: '05.07.2024', time: '19:00'},
    {date: '05.07.2024', time: '05:00'},
    {date: '05.07.2024', time: '16:00'},
    {date: '05.07.2024', time: '08:00'},
  ]
  let FreeFishingDays = [
    {date: '05.10.2024', time: '04:30'},
    {date: '01.02.2025', time: '12:30'},
    {date: '16.07.2024', time: '22:30'},
    {date: '15.07.2024', time: '09:00'},
    {date: '15.07.2024', time: '14:00'},
    {date: '15.07.2024', time: '18:30'},
    {date: '15.07.2024', time: '17:30'},
    {date: '15.07.2024', time: '08:30'},
    {date: '15.07.2024', time: '20:30'},
    {date: '15.07.2024', time: '18:30'},
    {date: '15.07.2024', time: '18:30'},
    {date: '15.09.2024', time: '18:30'},
    {date: '15.07.2024', time: '18:30'},
    {date: '15.07.2024', time: '18:30'},
    {date: '15.07.2024', time: '17:00'},
    {date: '15.07.2024', time: '17:30'},
    {date: '15.07.2024', time: '19:00'},
    {date: '15.07.2024', time: '05:00'},
    {date: '15.07.2024', time: '16:00'},
    {date: '15.07.2024', time: '08:00'},
  ]


  // bookedHousesDates = bookedHousesDates.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse)
  // bookedHousesDates.sort((a, b) => a.time > b.time ? 1 : -1);

  export default {
    mounted() {
      function Calendar(date) {
        //создаем тело календаря
        const calendarBody = document.querySelector('.calendar__body');
        const calendarCont = document.querySelector('.calendar__container');
        const calendar = document.querySelector('.calendar');
        date.setDate(1);
        let startDay = date.getDay();
        const daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
        let content = '';
        if(startDay===0) startDay=7;
        for(let i = 1; i < startDay; i++) {
          content += '<div class="space"></div>';
        }
        for(let i = 1; i <= daysTotal; i++) {
          if(i<10){
            content += '<Button class="calendar__btn">' + '0'+i + '</Button>';
          }
          else{
            content += '<Button class="calendar__btn">' + i + '</Button>';
          }
        }
        calendarBody.innerHTML = content;


        const btns = document.querySelectorAll(".calendar__btn");
        //убираем класс у всех неактивных кнопок
        const removeAllActive = () => {
          return btns.forEach(item => item.classList.remove('calendar__btn_active'));
        };

        //бронирование для домов
        const houseBooking = function (FreeDays){

        }

        //бронирование для экскурсий
        const ToursBooking=function(tour){
          //удаление дубликатов и сортировка по времени
          tour = tour.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse)
          tour.sort((a, b) => a.time > b.time ? 1 : -1);

          let PrevButt = '0';
          //бронирование
          for(let btn of btns){
            btn.onclick = function (){
              //скрытие зоны бронирования и переход к первоначальному виду
              if (PrevButt===btn.textContent && calendarCont.classList.contains("calendar__container_active")){
                removeAllActive();
                calendar.lastChild.remove()
                calendar.style.display="block"
                calendarCont.classList.remove("calendar__container_active")
              }
              //добавление зоны бронирования
              else {
                removeAllActive();
                btn.classList.add("calendar__btn_active")
                calendarCont.classList.add("calendar__container_active")
                if(calendar.childElementCount>=2){
                  calendar.lastChild.remove()
                }
                calendar.insertAdjacentHTML("beforeend", "<div class='calendar__booking-zone'><h4 class='booking-zone__heading'>Выберите время:</h4><strong class='booking-zone__heading-date'>"+[btn.textContent, num_month>=9 ? num_month+1:'0'+(num_month+1), year.value].join('.')+"</strong></div>")
                const bookingZone = document.body.querySelector(".calendar__booking-zone")
                calendar.style.display = "flex"
                bookingZone.insertAdjacentHTML("beforeend","<div class='booking-zone__buttons'></div>")

                createBookZone(bookingZone, tour, [btn.textContent, num_month>=9 ? num_month+1:'0'+(num_month+1), year.value].join('.'))
                createBookZone(bookingZone, tour, [btn.textContent, num_month>=9 ? num_month+1:'0'+(num_month+1), year.value].join('.'))

                bookingZone.insertAdjacentHTML("beforeend","<Button class='booking-zone__continue-button' disabled>Продолжить</Button>")
                const continueButton=document.querySelector(".booking-zone__continue-button")

                let BookedTime=''
                const bookBtns = document.querySelectorAll(".booking-zone__time");
                const removeAllBookActive = () => {
                  return bookBtns.forEach(item => item.classList.remove('calendar__btn_active'));
                };
                for (let bookButton of bookBtns){
                  bookButton.onclick = function (){
                    removeAllBookActive();
                    bookButton.classList.add("calendar__btn_active")
                    BookedTime=bookButton.textContent
                    continueButton.removeAttribute('disabled')
                    continueButton.style.cursor='pointer'
                  }
                }
                continueButton.onclick=function (){
                  console.log(BookedTime)
                  // calendar.classList.add("")

                }
              }
              PrevButt = btn.textContent
            }

            let TourOnlyDays=new Set()
            let flag=0;
            for(let key in tour)
              TourOnlyDays.add(tour[key].date)
            for (let i of TourOnlyDays){
              if([btn.textContent,num_month>=9 ? (num_month+1):'0'+(num_month+1), year.value].join('.')===i)
                flag=1
            }
            if (flag===0){
              btn.classList.add("calendar__btn_booked")
              btn.disabled=true
            }

          }
          const createBookZone = function (zone,bookDates,date){
            for (let i of bookDates) {
              if(i.date===date){
                zone.lastChild.insertAdjacentHTML("beforeend","<Button class='booking-zone__time'>"+i.time+"</Button>")
              }
            }
          }
        }

        ToursBooking(FreeRaftingDays)
      }
      Calendar(new Date(year.value,num_month));

      const nav__buttons = document.querySelectorAll(".nav__button");

      for(let btn of nav__buttons){
        btn.onclick = function (){
          if(btn.classList.contains("nav__button_l")){
            previousMonth(num_month);
            Calendar(new Date(year.value,num_month));
          }
          if(btn.classList.contains("nav__button_r")){
            nextMonth(num_month);
            Calendar(new Date(year.value,num_month));
          }

        }
      }
      const previousMonth = function(){
        if(num_month<=0){
          num_month=11;
          year.value-=1;
        }

        else
          num_month-=1;
        text_month.value = months.at(num_month);
      }
      const nextMonth = function(){
        if(num_month>=11){
          num_month=0;
          year.value+=1;
        }

        else
          num_month+=1;
        text_month.value = months.at(num_month);
      }
    },
  };
</script>

<template>
  <div class="calendar _container">
    <div class="calendar__container">
      <nav class="calendar__nav">
        <div class="nav__buttons">
          <button class="nav__button nav__button_l">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.05332 13.0537C8.93194 13.1805 8.83678 13.33 8.77332 13.4937C8.63997 13.8183 8.63997 14.1824 8.77332 14.507C8.83678 14.6707 8.93194 14.8202 9.05332 14.947L13.0533 18.947C13.3044 19.1981 13.6449 19.3391 14 19.3391C14.3551 19.3391 14.6956 19.1981 14.9467 18.947C15.1977 18.6959 15.3388 18.3554 15.3388 18.0003C15.3388 17.6453 15.1977 17.3047 14.9467 17.0537L13.2133 15.3337H18C18.3536 15.3337 18.6928 15.1932 18.9428 14.9431C19.1928 14.6931 19.3333 14.3539 19.3333 14.0003C19.3333 13.6467 19.1928 13.3076 18.9428 13.0575C18.6928 12.8075 18.3536 12.667 18 12.667H13.2133L14.9467 10.947C15.0716 10.823 15.1708 10.6756 15.2385 10.5131C15.3062 10.3506 15.3411 10.1763 15.3411 10.0003C15.3411 9.82431 15.3062 9.65004 15.2385 9.48756C15.1708 9.32508 15.0716 9.17761 14.9467 9.05366C14.8227 8.92869 14.6752 8.8295 14.5128 8.7618C14.3503 8.69411 14.176 8.65926 14 8.65926C13.824 8.65926 13.6497 8.69411 13.4872 8.7618C13.3247 8.8295 13.1773 8.92869 13.0533 9.05366L9.05332 13.0537ZM0.666656 14.0003C0.666656 16.6374 1.44864 19.2153 2.91373 21.4079C4.37881 23.6006 6.4612 25.3096 8.89754 26.3187C11.3339 27.3279 14.0148 27.5919 16.6012 27.0775C19.1876 26.563 21.5634 25.2931 23.4281 23.4284C25.2928 21.5637 26.5627 19.1879 27.0771 16.6015C27.5916 14.0151 27.3276 11.3342 26.3184 8.89788C25.3092 6.46153 23.6002 4.37915 21.4076 2.91406C19.2149 1.44898 16.6371 0.666992 14 0.666992C12.249 0.666992 10.5152 1.01187 8.89754 1.68193C7.27987 2.35199 5.81001 3.33412 4.5719 4.57224C2.07141 7.07272 0.666656 10.4641 0.666656 14.0003ZM24.6667 14.0003C24.6667 16.11 24.0411 18.1723 22.869 19.9264C21.6969 21.6805 20.031 23.0477 18.0819 23.855C16.1329 24.6624 13.9882 24.8736 11.919 24.462C9.8499 24.0505 7.94928 23.0346 6.45752 21.5428C4.96576 20.051 3.94986 18.1504 3.53828 16.0813C3.1267 14.0122 3.33794 11.8674 4.14528 9.91837C4.95261 7.96929 6.31978 6.30339 8.07391 5.13132C9.82803 3.95925 11.8903 3.33366 14 3.33366C16.829 3.33366 19.5421 4.45747 21.5425 6.45785C23.5429 8.45824 24.6667 11.1713 24.6667 14.0003Z" fill="#EF4444"/>
            </svg>
          </button>
          <button class="nav__button nav__button_r">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9467 13.0537C19.0681 13.1805 19.1632 13.33 19.2267 13.4937C19.36 13.8183 19.36 14.1824 19.2267 14.507C19.1632 14.6707 19.0681 14.8202 18.9467 14.947L14.9467 18.947C14.6956 19.1981 14.3551 19.3391 14 19.3391C13.6449 19.3391 13.3044 19.1981 13.0533 18.947C12.8023 18.6959 12.6612 18.3554 12.6612 18.0003C12.6612 17.6453 12.8023 17.3047 13.0533 17.0537L14.7867 15.3337H10C9.64639 15.3337 9.30725 15.1932 9.0572 14.9431C8.80715 14.6931 8.66668 14.3539 8.66668 14.0003C8.66668 13.6467 8.80715 13.3076 9.0572 13.0575C9.30725 12.8075 9.64639 12.667 10 12.667H14.7867L13.0533 10.947C12.9284 10.823 12.8292 10.6756 12.7615 10.5131C12.6938 10.3506 12.6589 10.1763 12.6589 10.0003C12.6589 9.82431 12.6938 9.65004 12.7615 9.48756C12.8292 9.32508 12.9284 9.17761 13.0533 9.05366C13.1773 8.92869 13.3248 8.8295 13.4872 8.7618C13.6497 8.69411 13.824 8.65926 14 8.65926C14.176 8.65926 14.3503 8.69411 14.5128 8.7618C14.6753 8.8295 14.8227 8.92869 14.9467 9.05366L18.9467 13.0537ZM27.3333 14.0003C27.3333 16.6374 26.5514 19.2153 25.0863 21.4079C23.6212 23.6006 21.5388 25.3096 19.1025 26.3187C16.6661 27.3279 13.9852 27.5919 11.3988 27.0775C8.81239 26.563 6.43662 25.2931 4.57192 23.4284C2.70722 21.5637 1.43734 19.1879 0.922871 16.6015C0.408401 14.0151 0.672445 11.3342 1.68161 8.89788C2.69078 6.46153 4.39975 4.37915 6.59241 2.91406C8.78506 1.44898 11.3629 0.666992 14 0.666992C15.751 0.666992 17.4848 1.01187 19.1025 1.68193C20.7201 2.35199 22.19 3.33412 23.4281 4.57224C25.9286 7.07272 27.3333 10.4641 27.3333 14.0003ZM3.33334 14.0003C3.33334 16.11 3.95893 18.1723 5.131 19.9264C6.30307 21.6805 7.96898 23.0477 9.91805 23.855C11.8671 24.6624 14.0118 24.8736 16.081 24.462C18.1501 24.0505 20.0507 23.0346 21.5425 21.5428C23.0342 20.051 24.0501 18.1504 24.4617 16.0813C24.8733 14.0122 24.6621 11.8674 23.8547 9.91837C23.0474 7.96929 21.6802 6.30339 19.9261 5.13132C18.172 3.95925 16.1097 3.33366 14 3.33366C11.171 3.33366 8.45792 4.45747 6.45754 6.45785C4.45715 8.45824 3.33334 11.1713 3.33334 14.0003Z" fill="#EF4444"/>
            </svg>
          </button>
        </div>
        <span class="nav__date">{{text_month}}, {{year}}</span>
      </nav>

      <div class="calendar__head">
        <span class="calendar__weekdays" v-for="weekday in weekdays">{{weekday}}</span>
      </div>
      <div class="calendar__body">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.calendar{
  background-color: #111827;
  border-radius: 16px;
}
.calendar__container {
  padding: 46px;
  width: 100%;
}
//календарь при бронировании
.calendar__container_active{
  width: 75%;
}

.calendar__nav{
  display: inline-flex;
  gap: 10px;
  margin-bottom: 32px;
}
.nav__date{
  color: #F9FAFB;
  font-size: 24px;
  line-height: 32px;
}
.nav__buttons{
  display: flex;
  flex-direction: row;
  gap: 7px;
}
.nav__button{
  background-color: #111827;
  padding: 0;
  cursor: pointer;
}

.calendar__head{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 8.5%;
}
.calendar__body{
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  column-gap: 8.5%;
  row-gap: 12px;
}
.calendar__weekdays, .booking-zone__heading-date{
  color: #F9FAFB;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 28px;
  font-weight: 500;
}

.calendar__booking-zone{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px;
  width: 23%;
}
.booking-zone__buttons{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-height: 288px;
  overflow: auto;
  margin-bottom: 8px;
  padding-right: 12px;

}
.booking-zone__buttons::-webkit-scrollbar {
  width: 8px;
  background-color:#F9FAFB ;
  border-radius: 6px;
}
.booking-zone__buttons::-webkit-scrollbar-thumb {
  background-color: #EF4444AB;
  border-radius: 6px;
}
.booking-zone__heading{
  color: #F9FAFB;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 32px 0;
}

.booking-zone__heading-date{
  margin: 0 0 28px 0;
}
</style>