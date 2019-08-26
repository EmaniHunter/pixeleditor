//Select color input
//Select size input

var height, width, color;

//When size is submitted by the user, call makeGrid() function
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#input_height').val();
    width = $('#input_width').val();
    makeGrid(height, width);
})

function makeGrid(x,y) {
    $('tr').remove();

    for(var i = 1; i<= x; i++){
        $('#pixel_canvas').append('<tr id=table' + i + '></tr>');
        for (var j =1; j <= y; j++){
            $('#table' + i).append('<td></td>');
        }
    }

    //This adds color chosen to cell
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style','background-color:' + color);
        }
    })
}

