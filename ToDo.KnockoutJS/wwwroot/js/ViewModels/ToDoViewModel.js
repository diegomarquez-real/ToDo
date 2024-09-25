var ToDoViewModel = {
    tasks: ko.observableArray([]),
    addTask: function () {
        console.log('add task');
    }
};

$(function () {
    $.ajax({
        url: '/ToDo/GetAll',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function () {
            console.log('Sending request...');
        },
        success: function (response) {
            LoadToDos(response);
            ko.applyBindings(ToDoViewModel);
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
                id: i + 1,
                description: items[i]
            };
            ToDoViewModel.tasks.push(item);
        }
    }
});