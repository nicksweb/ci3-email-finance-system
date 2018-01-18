$(document).ready(function() {

    /**
     * Delete a user
     */
    $('.btn-delete-record').click(function() {
        window.location.href = "/admin/finance/delete/" + $(this).attr('data-id');
    });
    
    $('.btn-delete-catven').click(function() {
        window.location.href = "/admin/finance/delete_catven/" + $(this).attr('data-id');
    });


});
