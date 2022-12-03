<script setup>
import Child from "./components/Child.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <form @submit.prevent="send" action="" class="mt-5 d-flex">
            <input type="text" v-model="val" class="form-control" />
            <button class="btn btn-success">Gonder</button>
          </form>

          <ul class="list-group my-5">
            <li
              class="list-group-item"
              v-for="(item, index) in gelendata"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <Child :inpval="val" @valchange="gelendata = $event"></Child>
        </div>
      </div>
    </div>

    <button class="btn btn-info" @click="gonder">axios gonder</button>
    <table class="table table-striped table-success">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">userId</th>
          <th scope="col">id</th>
          <th scope="col">title</th>
          
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(item, index) in adata" :key="index" >
        
          
          <td   > {{item.userId}} </td>
            <td>{{item.id}}</td>
            <td> {{item.title}} </td>
            <td>{{item.body}} </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      val: "",
      gelendata: [],
      adata: [],
    };
  },
  methods: {
    gonder() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(({ data }) => {
          this.adata=data;
        });
    },
  },
};
</script>

<style scoped>
</style>
