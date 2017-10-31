<template>
  <div class="container">
  <div class="form-group">
    <label for="usr" class="pull-left">Name:</label>
    <input type="text" v-model ="name" class="form-control" id="name">
    <span class="input-group-btn">
        <button @click="add(name)" class="btn btn-primary pull-right" type="button">Add</button>
   </span>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-6">
            <h1>Unregistered List</h1>
              {{}}
              <hr>
              <ul >
                <li v-for='list in $store.state.unregistered'>
                  {{list}}
                  <button class="btn btn-danger" @click="remove(list)">Remove</button>
                  <button class="btn btn-success" @click="register(list)">Register</button>
                </li>
              </ul>

        </div>
        <div class="col-lg-6">
            <h1>Registered list</h1>
            <hr>
             <ul >
                <li v-for='list in $store.state.registered'>
                  {{list}}
                  <button class="btn btn-danger" @click="unregister(list)">Unregister</button>
                </li>
              </ul>
        </div>
    </div>
</div>

  
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',

  
  methods: mapActions([
    'add',
    'remove',
    'register',
    'unregister'
    ]),

  data () {
    return {
      name : ""

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->