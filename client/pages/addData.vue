<template>
  <div class="form__container">
    <form method="post" @submit="postData">
      <label for="title">Title</label>
      <input id="title" v-model="title" type="text">
      <label for="text">Text</label>
      <textarea id="text" v-model="text" cols="30" rows="10" />
      <button type="submit">
        Add
      </button>
    </form>
  </div>
</template>
<style scoped>
  .form__container {
    display: flex;

    justify-content: center;
    align-items: center;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 320px;
  }

  label {
    margin: 10px 15px;
  }

  input {

  }

  textarea {

  }

  button {
    margin-top: 10px;
    padding: 5px 5px;

    background: #35495e;
    color: #F5F5F5;

    border: none;
  }
  button {

  }
</style>
<script>
export default {
  middleware: 'page-add-data',

  head() {
    return {
      title: 'Form'
    }
  },

  data() {
    return {
      title: '',
      text: ''
    }
  },

  methods: {
    async postData(e) {
      e.preventDefault()

      await this.$axios.post(`//${window.location.host}/api/data`, {
        title: this.title,
        text: this.text
      })

      this.title = ''
      this.text = ''
    }
  }
}
</script>
