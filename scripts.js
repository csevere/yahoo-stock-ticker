// console.log("test")
//1.Make an Ajax request when the user submits the form
//2. Get the user's input
//3. When the AJAX has a response/JSON, check to see if there was any valid data
//4. If there is, load up the table with data

//1.) give the user the ability to search for multiple symbols: goog, yahoo
//2.) Multiple will bring back an array inside of quote, a single with back / use split, an array

// add a new row each time you search, return html and append to end of the table




$(document).ready(function(){

    var userStockSavedIfAny = localStorage.getItem('lasSymbolSearched');
      // console.log(userStockSavedIfAny);

  $('.yahoo-finance-form').submit((event)=>{
      //prevent the browser from submitting the form. Js will handle everything
      event.preventDefault();
      // console.log("The form was just submitted.")

      //get whatever the user typed and stash it in a var
      var symbol = $('#symbol').val();
      var url = encodeURI(`http://query.yahooapis.com/v1/public/yql?q=env%20%27store://datatables.org/alltableswithkeys%27;select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${symbol}%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json`);

      // console.log(url);

      // var url = "http://query.yahooapis.com/v1/public/yql?q=env%20%27store://datatables.org/alltableswithkeys%27;select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22goog%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json"

      $.getJSON(url,function(theDataJSFound){
              // console.log(theDataJSFound);
              if(theDataJSFound.query.count > 1){
                  // we need to loop
                  var stocksArray = theDataJSFound.query.results.quote;
                  var newRow = '';
                  for(let i = 0; i< stocksArray.length; i++){
                    newRow += buildStockRow(stocksArray[i]);
                  }
              }else{
                  var newRow = buildStockRow(theDataJSFound);
              }
              //update the HTML inside of the table body
              $('#stock-ticker-body').append(newRow);

              // console.log(stockInfo)


      function buildStockRow(stockInfo){

        var stockInfo = data.query.results.quote;
        if (data.query.count > 1){

        }else{
          continue;
        }
        //build the table's new HTML
        var newHTML = ';'
        newHTML+= '<tr>';
          newHTML += '<td>' + stockInfo.Symbol + '</td>';
          newHTML += '<td>' + stockInfo.Name + '</td>';
          newHTML += '<td>' + stockInfo.Ask + '</td>';
          newHTML += '<td>' + stockInfo.Bid + '</td>';
          newHTML += '<td>' + stockInfo.Change + '</td>';
        newHTML += '</tr>'
          $('#stock-ticker-body').append(newRow);
        return newHTML;
          // console.log(newHTML);
          // stockArray.push($('#stock-ticker-body').html(newHTML));

      }

//
//               buildStockRow(stockInfo);
//               $( ".table" ).append(buildStockRow(stockInfo));
//               // $(selector).append(content,function(index,html))






              //build the table's new html
              // var newHTML = ';'
              // newHTML+= '<tr>';
              //   newHTML += '<td>' + stockInfo.Symbol + '</td>';
              //   newHTML += '<td>' + stockInfo.Name + '</td>';
              //   newHTML += '<td>' + stockInfo.Ask + '</td>';
              //   newHTML += '<td>' + stockInfo.Bid + '</td>';
              //   newHTML += '<td>' + stockInfo.Change + '</td>';
              // newHTML += '</tr>'

              console.log(newHTML);

              // $( ".table" ).append( "#stock-ticker-body" );

              //update the HMLT inside of the table body
              // $('#stock-ticker-body').html(newHTML);

      });

  });





});
