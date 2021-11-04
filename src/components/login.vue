  <!-- Page login with form -->
<template>
      <div class="vue-tempalte">
        <form id="test">
            <h3>Login</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>

            <p class="create new account text-right mt-2 mb-4">
                <router-link to="/create new - account">Create new account ?</router-link>
            </p>
        </form>
    </div>
    
    
    
</template>
<script>
  
  export default {
    name: 'Login',
    
  }
</script>

  <!-- CSS -->
<style scoped>
  #test {
    margin : 20px;
  }
  form {
   max-width: 1000px;
   margin: 0 auto; 
   text-align: left;
}
.form-group > label {
    font-weight: 600;
}
</style>