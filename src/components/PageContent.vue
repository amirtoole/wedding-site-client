<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" class="main-header">
      <div class="md-title">
        <router-link exact to="/">
          <md-icon>face</md-icon>
          Amy and Amir's Wedding
        </router-link>
      </div>
      <div class="rsvp" v-if="pageTitle != 'RSVP'">
        <router-link exact to="/rsvp">
          <md-button class="md-raised md-primary">RSVP</md-button>
        </router-link>
      </div>
    </md-whiteframe>

    <slot>
    </slot>
    <footer>
      <a href="https://github.com/hellofornow/wedding-site-client" target="_blank">
        <md-layout md-align="center" class="md-primary">
          <div class="md-primary">Built with</div>
          <div class="heart">
            <md-icon md-iconset="fa fa-heart"></md-icon>
          </div>
          <div>by Amy and Amir</div>
        </md-layout>
      </a>
    </footer>
  </div>

</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  a:hover {
    text-decoration: none !important;
  }
  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  .main-header {
    height: 60px;
    z-index: 200;
    color: #fff !important;
    position: fixed;
    width: 100%;
    background: url('/static/background.jpg') no-repeat left !important;
  }
  .md-title {
    a {
      color: #ad1457 !important;
    }
    flex: 1;
    .md-icon {
      vertical-align: top;
    }
    @media (max-width: 920px) {
      margin-left: 8px;
    }
    @media (min-width: 920px) {
      margin-left: 15% !important;
    }
  }
  .rsvp {
    @media(max-width: 920px) {
      margin-right: 5px;
    }
    @media(min-width: 920px) {
      margin-right: 20px;
    }
  }
  footer {
    margin-top: 20px;
    padding: 20px 0;
    a {
      color: #ad1457 !important;
    }
    a:hover {
      color: #d81b60 !important;
    }
  }
  .heart  {
    margin: 0 5px;

    .md-icon {
      font-size: 12px;
      width: auto;
      min-width: auto;
      padding-bottom: 3px;
    }
  }
</style>
<!--@formatter:on-->

<script>
  export default {
    name: 'page-content',
    props: {
      pageTitle: String
    },
    methods: {
      toggleSidenav() {
        this.$root.toggleSidenav();
      }
    }
  };
</script>
