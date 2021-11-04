  <!-- Page Signin with form -->
¨<template>
    <div class="vue-tempalte">
        <form id="test">
            <h3>sign in</h3>

            <div class="form-group">
                <label> Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>


            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
             <div class="form-group">
                <label>Confirm Password</label>
                <input type="confrim password" class="form-control form-control-lg" />
            </div>


            <button type="submit" class="btn btn-dark btn-lg btn-block">sign in</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
export default {
name : "signin"
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