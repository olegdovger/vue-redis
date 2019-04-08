<template>
  <div class="list">
    <div class="list__item list__item_head">
      <div class="list__item_dt">
        Date
      </div>
      <div class="list__item_title">
        Title
      </div>
      <div class="list__item_text">
        Text
      </div>
    </div>
    <div v-for="item in rslt" :key="item.dt" class="list__item">
      <div class="list__item_dt">
        {{ item.dt }}
      </div>
      <div class="list__item_title">
        {{ item.title }}
      </div>
      <div class="list__item_text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    margin: 10px;

    position: relative;
  }
  .list__item {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    padding: 5px;

    border-radius: 3px;
  }
  .list__item_head {
    background: #215bff;
    color: #F5F5F5;

    position: sticky;
    top: 0;
    left: 0;
  }
  .list__item_dt {
    white-space: nowrap;
    overflow: auto;
    text-overflow: ellipsis;
    width: 250px;
  }

  .list__item_title {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
    width: 350px;
  }

  .list__item_text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 5px;
  }
</style>
<script>
export default {
  head() {
    return {
      title: 'Data'
    }
  },

  async asyncData({ $axios }) {
    let err
    if (process.client) {
      const data = await $axios.get(`//${window.location.host}/api/data`).catch((error) => {
        err = error
      })

      if (err) {
        return { rslt: [] }
      } else {
        data.data.forEach((item) => {
          const dt = new Date(item.dt)
          item.dt = `${dt.toLocaleTimeString()} - ${dt.toLocaleDateString()}`
        })
        return { rslt: data.data }
      }
    } else {
      return []
    }
  }
}
</script>
