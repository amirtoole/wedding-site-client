<template>
  <page-content page-title="">
    <div class="main-content">
      <div class="introduction">
        <div class="button-actions">
          <div class="example">
            <img src="static/amyamir2.jpg" alt="Amy and Amir">
          </div>

          <div class="introduction">We're thrilled to invite you to our wedding!</div>

          <md-button class="md-primary md-raised" href="#/rsvp">RSVP</md-button>
        </div>

        <div class="row">
          <div class="column">
            <h2 class="md-headline">Details</h2>
            <p>McLean House - The Estates of Sunnybrook</p>
            <p>Sunday, May 21, 2017</p>
            <p>Ceremony at 4:00pm</p>
            <p>Dinner/Reception to follow</p>
          </div>
          <div class="column">
            <h2 class="md-headline">Directions</h2>
            <div>
              <div class="video-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11533.38968633367!2d-79.3705959!3d43.7241091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1099204bfc8060c!2sMcLean+house+-+The+Estates+of+Sunnybrook!5e0!3m2!1sen!2sca!4v1484703113228" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-content>
</template>

<!--@formatter:off-->
<style lang="sass" scoped>
  .main-content {
    padding-bottom: 30px;
  }

  .introduction {
    max-width: 700px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;
    border-radius: 10px;
  }

  .md-headline {
    margin: 10px 0 0 0;
  }
  p {
    margin: 5px;
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }

  }

  .row {
    /*margin: -10px;*/
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    /*margin: 0 10px;*/
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>
<!--@formatter:on-->
