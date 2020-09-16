<template>
   <div>
      <weather-component />
   </div>
</template>

<script>
import WeatherComponent from '../components/WeatherComponent'
export default {
   name: 'WeatherPage',
   components: {
      WeatherComponent,
   }
}
</script>