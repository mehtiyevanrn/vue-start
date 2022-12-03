<template>
  <div>
    <button @click="send" class="btn btn-success mt-5">gonder</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: [],
    };
  },
  methods: {
    send(){
        this.todo.push(this.inpval)
        this.$emit('valchange',this.todo)
    }
  },
  props: ["inpval"],
  
};
</script>
