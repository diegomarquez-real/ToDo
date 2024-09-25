var ToDoViewModel = function () {
    var self = this;
    self.tasks = ko.observableArray([]);
    self.addTask = function (modalPlaceholder) {
        $.get("/Task/AddEditTask", function (data) {
            modalPlaceholder.html(data);
            modalPlaceholder.find('#addedit-task-modal').modal('show');
        });
    };
    self.deleteTask = function (index, taskId) {
        $.ajax({
            url: `/Task/Delete/${taskId}`,
            type: 'POST',
            beforeSend: function () {
            },
            success: function (response) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
            },
            complete: function () {
                self.tasks.splice(index, 1);
            }
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