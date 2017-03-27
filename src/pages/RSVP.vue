<template>
  <page-content page-title="RSVP">
    <div class="main-content">
      <div class="step1" v-if="people.length == 0">
        <form @submit.stop.prevent="submitCode">
          <div class="input-field">
            <md-input-container v-bind:class="codeValidateClass">
              <label>Please enter your code</label>
              <md-input v-model="code" type="text" required autofocus v-bind:disabled="submitting"></md-input>
              <span class="md-error">Invalid code</span>
            </md-input-container>
            <md-layout md-align="center">
              <md-button type="submit" class="md-raised md-primary submitBtn" v-bind:disabled="submitting">Submit</md-button>
            </md-layout>
            <md-layout md-align="center">
              <md-spinner md-indeterminate v-if="submitting"></md-spinner>
            </md-layout>
          </div>
        </form>
      </div>

      <div v-if="people.length > 0 && !finished" class="step2">
        <h3>Welcome! We're very excited to share our special day with you.</h3>
        <form @submit.stop.prevent="submitAttending">
          <div class="person-container">
            <person v-for="person in people" :key="person.row" v-bind:person="person" v-bind:submitting="submitting"></person>
          </div>
          <md-layout md-align="center">
            <md-button type="submit" class="md-raised md-primary submitBtn" v-bind:disabled="submitting">Submit</md-button>
          </md-layout>
          <md-layout md-align="center">
            <md-spinner md-indeterminate v-if="submitting"></md-spinner>
          </md-layout>
        </form>
      </div>

      <div v-if="finished" class="finished">
        <div v-if="attending">
          <h2 class="md-headline">We're thrilled you can make it to our wedding!</h2>
          <div>
            Looking forward to seeing you on May 21st!
          </div>
        </div>

        <div v-else>
          <h2 class="md-headline">We're sorry you can't make it to our wedding.</h2>
          <div>We hope to be in touch soon.</div>
        </div>

        <div class="love">
          <div>Love,</div>
          <div>
            Amy and Amir
          </div>
        </div>
      </div>

      <md-layout md-align="center">
        <div class="error" v-if="serverError && !submitting">
          <div>An error occured! Please try again.</div>
          <div>Please email me at amir.toole@gmail.com if you're concerned.</div>
        </div>
      </md-layout>
    </div>
  </page-content>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  .main-content > div {
    margin: 0 auto;
  }

  .step1 {
    max-width: 500px;
  }

  .submitBtn {
    padding: 0 40px;
  }

  .step2 {
    max-width: 700px;

    @media (max-width: 600px) {
      max-width: 100%;
    }

    .person-container {
      margin-bottom: 30px;
      div:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
    }
  }

  .error {
    margin-top: 30px;
  }

  .finished {
    flex-direction: column;
    max-width: 500px;

    @media (max-width: 600px) {
      max-width: 100%;
    }

    .love {
      margin-top: 20px;
    }
  }
</style>
<!--@formatter:on-->

<script>
  export default {
    data: () => ({
      code: '',
      submitting: false,
      codeValidateClass: '',
      people: [],
      serverError: false,
      finished: false,
      attending: false
    }),
    methods: {
      submitCode() {
        this.submitting = true;
        this.serverError = false;
        if (this.code.trim().length === 0) {
          this.codeValidateClass = 'md-input-invalid';
          this.submitting = false;
          return;
        }
        this.code = this.code.trim().toUpperCase();
        this.$http.get('/api/code/' + this.code).then((response) => {
          this.submitting = false;
          if (response.body.length === 0) {
            this.codeValidateClass = 'md-input-invalid';
            return;
          }
          this.codeValidateClass = '';
          this.people = response.body;
        }, error => {
          console.error(error);
          this.submitting = false;
          this.serverError = true;
        });
      },
      submitAttending() {
        this.submitting = true;
        this.$http.post('/api/attendance/' + this.code, this.people).then((response) => {
          this.attending = false;
          for (let p of this.people) {
            if (p.attending === 'y') {
              this.attending = true;
              break;
            }
          }
          this.finished = true;
        }, error => {
          console.error(error);
          this.serverError = true;
        }).finally(() => {
          this.submitting = false;
        });
      }
    }
  };
</script>
