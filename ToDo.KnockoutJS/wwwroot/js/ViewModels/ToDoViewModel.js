var ToDoViewModel = function () {
    var self = this;
    self.tasks = ko.observableArray([]);
    self.addEditTask = function (modalPlaceholder, taskId) {
        $.get("/Task/GetAddEditTaskModal", function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#addedit-task-modal').modal('show');
            addEditTaskVM.taskId(taskId);
        });
    };
    self.deleteTask = function (modalPlaceholder, taskId, index) {
        $.get('/Task/GetDeleteTaskModal', function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#delete-task-modal').modal('show');
            deleteTaskVM.taskId(taskId);
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
                itemId: i + 1,
                taskId: items[i].taskId,
                description: items[i].description
            };
            toDoVM.tasks.push(item);
        }
    }
});