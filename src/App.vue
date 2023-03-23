<template>
  <nav>
    <router-link id="home" to="/">Home</router-link> | 
    <router-link id="about" to="/about">About</router-link> |
    <router-link id="project" to="/projects">Projects</router-link> |
    <router-link id="testimonials" to="/testimonials">Testimonials</router-link> |
    <router-link id="contact" to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
