<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     
       <router-link tag="li" active-class="active" to="/" exact>Home</router-link> 
      
      
       <router-link to="/user" tag="li" active-class="active">User</router-link>
       
     
    
    </ul>
  </div>
</nav>
</template>
<script>
export default {};
</script>
<style>
.active
{
    color:blue
}
</style>
