<template>
  <div class="home">
    <div class="grid-container">
  <div>
    <img id="selfimage" src="https://i.postimg.cc/FHyK7P9Z/Whats-App-Image-2023-01-19-at-09-51-37.jpg"/>
  </div>
  <div>2</div>
  
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>
<style lang="scss">
// scss styles
$background-color: white;
$image-width:25rem;
$image-height:25rem;
$max-radius:8px;
$min-radius:50%;
$image-fill:fill;
$shadow: 2px 2px 4px black;
$margin-top:5rem;

#selfimage{
height: $image-height;
width: $image-width;
border-radius: $min-radius;
object-fit: fill ;
box-shadow: $shadow;
// margin-top: $margin-top;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  background-color:$background-color;
  padding: 10px;
  margin-top: $margin-top;
}</style>
