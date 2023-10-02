jQuery(document).ready(function($) {
    $('#my_button').click(function(){
        var message = $('#my_input').val();

        $.post(
            my_script_data.ajax_url, 
            {
                'action': 'my_action',
                'message': message,
            }, 
            function(response) {
                $('#result').html(response);
            }
        );
    });
});