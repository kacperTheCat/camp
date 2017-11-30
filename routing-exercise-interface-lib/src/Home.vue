<template>
<div class="home-window md-elevation-20">
  <h2>I'm home!</h2>
  <p>nothing to do here... pisk an user :D</p>
  <md-content class="md-scrollbar">
    <p>Autem enim asperiores consequuntur neque sequi ea similique ex maxime, repudiandae doloremque aliquam exercitationem omnis assumenda. Rem suscipit pariatur vero facere?</p>
    <p>Necessitatibus aut cumque sit ad. Tempora perferendis nostrum, in assumenda accusantium vitae vero pariatur sapiente nam quisquam, ducimus distinctio quae nisi.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed perspiciatis sit quaerat molestiae iusto adipisci possimus cum modi quam qui esse vero provident, ad, deserunt laborum quas eligendi beatae quibusdam.</p>
  </md-content>
</div>
</template>
<script>
export default {
  name: 'ScrollbarExample'
}
</script>
<style media="screen">
.home-window {
  /*background: #d4e137;*/
  width: 30vw;
  height: 30vh;
  overflow: auto;
     overflow-y: scroll;
     overflow-x: hidden;
}

.md-content {
  overflow: auto;
}
::-webkit-scrollbar {
    width: .5rem;
}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #666;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
	background: #999;
}
</style>
