 <template>
  <div>
    <form class="md-elevation-20 create-user-field">

    <md-field>
        <label>User name</label>
        <md-input v-model="initial"></md-input>
    </md-field>
    <md-field>
        <label>Email</label>
        <md-input v-model="initial"></md-input>
    </md-field>

      <md-card-actions>
         <md-button type="submit" class="md-elevation-5" >Create user</md-button>
       </md-card-actions>
     </md-card>

     </form>
  </div>
<!-- dodac walidacje -->

</template>
<style media="screen">
.create-user-field {
  max-width: 30vw;
  height: 30vh;
  padding: .5rem 1.5rem;
}

.md-field {}
</style>
