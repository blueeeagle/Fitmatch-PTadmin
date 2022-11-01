<template>
  <router-view/>
</template>

<style lang="scss">
$primary: #4361EE;
$danger: #F72585;

@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


#app {
  font-family: 'TT Norms Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

  height: 100vh;
  width: 100vw;
  font-size: 14px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
