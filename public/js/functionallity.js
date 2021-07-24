$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.model_item').addClass('hide')
        }
    });
});