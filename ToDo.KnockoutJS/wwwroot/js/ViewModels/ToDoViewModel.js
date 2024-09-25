var ToDoViewModel = {
    tasks: ko.observableArray([]),
    isEmpty: ko.observable(true),
    addTask: function (modalPlaceholder) {
        $.get("/Task/AddEditTask", function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#addedit-task-modal').modal('show');
        });
    }
};

$(function () {
    $.ajax({
        url: '/Task/GetAll',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function () {
            console.log('Sending request...');
        },
        success: function (response) {
            LoadToDos(response);
            if (response.length > 0) {
                ToDoViewModel.isEmpty(false);
            }
            ko.applyBindings(ToDoViewModel, $('#task-container')[0]);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error');
        },
        complete: function () {
            console.log('Request completed.');
        }
    });

    function LoadToDos(items) {
        for (var i = 0; i < items.length; i++) {
            let item = {
                taskId: items[i].taskId,
                description: items[i].description
            };
            ToDoViewModel.tasks.push(item);
        }
    }
});