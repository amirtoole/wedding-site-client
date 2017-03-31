<template>
  <div>
    <md-layout md-flex class="layout">
      <md-layout md-flex="25" class="personName">{{person.name}}</md-layout>

      <md-layout class="questions">
        <!-- attending -->
        <md-layout md-flex="90">
          <md-input-container v-bind:class="person.attending.length == 0 ? 'md-input-invalid' : ''">
            <label for="attending">Attending?</label>
            <md-select v-model="person.attending" name="attending" id="attending" required v-bind:disabled="submitting">
              <md-option value="y">Yes, excited to celebrate with you!</md-option>
              <md-option value="n">No, decline with regret</md-option>
            </md-select>
            <span class="md-error">Required</span>
          </md-input-container>
        </md-layout>

        <!--menu-->
        <md-layout md-flex="90">
          <md-input-container v-if="person.attending == 'y'" v-bind:class="[person.attending == 'y' && person.dinner.length == 0 ? 'md-input-invalid' : '', 'menu-container']">
            <label>Main course selection:</label>
            <md-select v-if="person.attending" v-model="person.dinner" name="menu" id="menu" required v-bind:disabled="submitting">
              <md-option value="child" v-if="person.child" selected>Children's meal (house-made chicken fingers)</md-option>
              <md-option value="beef">Roasted Alberta AAA Prime Rib of Beef</md-option>
              <md-option value="fish">Seared Atlantic Salmon Fillet</md-option>
              <md-option value="veg">Portobello Mushroom Ravioli (Vegetarian)</md-option>
              <md-option value="none">No meal</md-option>
            </md-select>
          </md-input-container>
        </md-layout>

        <!--comment-->
        <md-layout md-flex="90" class="comment-container">
          <md-input-container v-if="(person.attending == 'y' && person.dinner.length > 0) || person.attending == 'n'">
            <label>Comments<span v-if="person.attending == 'y'"> (allergies, dietary restrictions)</span></label>
            <md-textarea v-model="person.comments" v-bind:disabled="submitting"></md-textarea>
          </md-input-container>
        </md-layout>

      </md-layout>
    </md-layout>
  </div>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  .layout {
    margin: 10px 0;
  }

  .personName {
    margin-top: 22px;
    font-size: 1.2rem;
    @media (max-width: 600px) {
      flex: 0 1 100% !important;
      margin-bottom: 6px;
    }
  }

  @media (max-width: 600px) {
    .questions {
      flex-basis: 100%;
    }
  }

  .md-input-container {
    margin: 0 0 15px;
  }

  .md-theme-amir.md-input-container.md-input-invalid label, .md-theme-amir.md-input-container.md-input-invalid input, .md-theme-amir.md-input-container.md-input-invalid textarea, .md-theme-amir.md-input-container.md-input-invalid .md-error, .md-theme-amir.md-input-container.md-input-invalid .md-count, .md-theme-amir.md-input-container.md-input-invalid .md-icon:not(.md-icon-delete) {
    color: #ad1457 !important;
  }
  .md-theme-amir.md-input-container.md-input-invalid:after {
    background: none;
  }
  .comment-container {
    .md-input-container {
    }
  }
</style>
<!--@formatter:on-->

<script>
  export default {
    props: {
      person: {},
      submitting: Boolean
    },
    mounted() {
      setTimeout(() => {
        if (this.person.comments.length > 0) {
          this.person.comments += ' ';
        }
      }, 100);
    }
  };
</script>
