$(document).ready(function() {

  var App = {
    init: function(apiUrl) {
      this.apiUrl = apiUrl;
      this.bindEventHandler();
      this.render();
    },
    bindEventHandler: function() {
      $('#js-newQuote').on('click', this.render.bind(this));
    },
    render: function() {
      $.getJSON({
      url: this.apiUrl,
      dataType: 'json',
      success: function(data) {
        var author = data.quoteAuthor ||'Anonymous'; //if unknown author, then replace with 'Anonymous'
        var quoteText = data.quoteText;
        
        var fullQuote = '<blockquote>';
        fullQuote += quoteText;
        fullQuote += '<cite>' + author + '</cite>';
        fullQuote += '</blockquote>';
      
        $('#js-quoteField').html(fullQuote);
      }
    });
    }
  } 

  App.init('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?');
  
});