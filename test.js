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
jQuery(document).ready(function(){
       $('#chat-icon').click(function(){
       $('#chat-window').show();
       $('#chat-icon').hide();
    });

    $('#chat-send-button').click(function(){
        var message = $('#chat-message-input').val();
        $('#chat-messages').append('<div class="chat-message"><b>You:</b> ' + message + '</div>');

        // Call the Python script via Ajax
        $.ajax({
            url: 'https://yonago-shop.com/python-test', // Change this to the path of your PHP script
            method: 'POST',
            data: { message: message },
            success: function(response) {
                $('#chat-messages').append('<div class="chat-message"><b>Bot:</b> ' + response + '</div>');
            }
        });

        $('#chat-message-input').val('');
    });
 });