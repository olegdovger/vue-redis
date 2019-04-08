<template>
  <div>
    <section class="container">
      <div class="sidebar">
        <nuxt-link to="/addData" class="sidebar__link">
          Form
        </nuxt-link>
        <nuxt-link to="/data" class="sidebar__link">
          Data
        </nuxt-link>
        <nuxt-link to="/logs" class="sidebar__link">
          Logs
        </nuxt-link>
      </div>
      <div class="content">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 4px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;

  height: calc(100vh - 20px);
  margin: 10px;

  min-width: 300px;

  background: rgba(255, 69, 0, 0.4);

  border-radius: 4px;
}

.sidebar__link {
  box-sizing: border-box;
  border-radius: 4px;

  padding: 3px 10px;
  margin: 3px 5px;
  width: inherit;

  color: white;
  background: rgba(57, 57, 57, 0.95);
}

.sidebar__link:not(.nuxt-link-active) {
  color: white;
  background: rgba(57, 57, 57, 0.95);
}
.sidebar__link.nuxt-link-active {
  color: rgba(57, 57, 57, 0.95);
  background: white;
}

.content {
  flex-grow: 10;
  box-sizing: border-box;

  height: calc(100vh - 20px);
  margin: 10px;

  background: rgba(20, 217, 56, 0.4);

  border-radius: 4px;

  overflow: auto;
}
</style>
