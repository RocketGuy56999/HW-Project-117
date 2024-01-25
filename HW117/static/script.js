$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date=new Date()
    var display_date="Date"+date.toLocaleDateString()
    $("#date").text("date:"+display_date)



    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#text').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'customer_review' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            url:"/predict",


            //  Data to be sent in JSON format
            data : JSON.stringify(input_text),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){
                var prediction=result.prediction
                var emoji_url=result.url
                $("#sentiment").text(prediction)
                $("#sentiment").show()
                $("#emoji").attr('src',emoji_url)
                $("#emoji").show()
                // extract prediction and emoticon url from result


                //  update the DOM elements


                //  show them

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})