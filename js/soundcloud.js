// initialize soundcloud API with key
SC.initialize({
    // This is the sample client_id. you should replace this with your own
    client_id: "enter id here"
});

function embed (id) {
  SC.oEmbed("http://soundcloud.com/" + id // user or playlist to embed
    , { color: "ff0066"
      , auto_play: true //should this be false?
      , maxwidth: 500
      , maxheight: 1000
      , show_comments: true } // options
    , document.getElementById("scWidget") // what element to attach player to
  );
}

$(document).ready(
  function () {
    embed("dj-faze"); //should this be changed?
  }
);