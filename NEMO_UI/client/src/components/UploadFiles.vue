<!--https://bootsnipp.com/snippets/D7MvX-->

<template>

  <div class="card mt-5" style="width: auto;">
    <div class="card-body">
      <div class="file-drop-area">
        <span class="choose-file-button">Choose files</span>
        <span class="file-message">or drag and drop files here</span>
        <input class="file-input" multiple type="file" @change="handleFileUpload( $event )">
      </div>
      <br>
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      files: []
    }
  },

  methods: {
    handleFileUpload(event) {
      this.files = event.target.files;
    },
    submitFiles() {
      let formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append(this.name, file);
      }
      axios.post('http://127.0.0.1:5000',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function () {
        console.log('SUCCESS!!');
      })
          .catch(function () {
            console.log('FAILURE!!');
          });
    }
  }
}

</script>


<style scoped>

</style>

