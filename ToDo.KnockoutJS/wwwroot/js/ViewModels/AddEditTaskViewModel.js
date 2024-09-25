var AddEditTaskViewModel = {
    description: ko.observable(),
    saveTask: function () {
        var createTaskModelJSON = {
            Description: this.description()
        };

        $.ajax({
            url: '/Task/Create',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(createTaskModelJSON),
            beforeSend: function () {
                console.log('Sending request...');
            },
            success: function (response) {
                console.log(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error');
            },
            complete: function () {
                console.log('Request completed.');
            }
        });
    }
};

$(function () {
    ko.applyBindings(AddEditTaskViewModel, $('#addedit-task-modal')[0]);
});