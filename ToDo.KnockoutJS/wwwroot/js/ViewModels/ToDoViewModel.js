function ToDoViewModel () {
    var self = this;
    self.tasks = ko.observableArray([]);
    self.addEditTask = function (modalPlaceholder, task) {
        $.get("/Task/GetAddEditTaskModal", function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#addedit-task-modal').modal('show');
            addEditTaskVM.task(task);
        });
    };
    self.deleteTask = function (modalPlaceholder, task, index) {
        $.get('/Task/GetDeleteTaskModal', function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#delete-task-modal').modal('show');
            deleteTaskVM.task(task);
            deleteTaskVM.index(index);
        });
    }
}

var toDoVM = new ToDoViewModel();

$(function () {
    $.ajax({
        url: '/Task/GetAll',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function () {
        },
        success: function (response) {
            LoadToDos(response);
            ko.applyBindings(toDoVM, $('#task-container')[0]);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        },
        complete: function () {
        }
    });

    function LoadToDos(items) {
        for (var i = 0; i < items.length; i++) {
            let item = {
                itemIndex: i,
                taskId: items[i].taskId,
                description: ko.observable(items[i].description) 
            };
            toDoVM.tasks.push(item);
        }
    }
});