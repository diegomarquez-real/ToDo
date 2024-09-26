var AddEditTaskViewModel = function () {
    var self = this;
    self.taskId = ko.observable();
    self.description = ko.observable(),
    self.title = ko.computed(function () {
        return self.taskId() == null ? "Add Task" : "Edit Task";
    });
    self.saveTask = function () {
        var createTaskModelJSON = {
            Description: this.description()
        };

        $.ajax({
            url: '/Task/Create',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(createTaskModelJSON),
            beforeSend: function () {
            },
            success: function (response) {
                var item = {
                    taskId: response,
                    description: self.description
                };
                toDoVM.tasks.push(item);
                $('#modal-placeholder').find('.modal').modal('hide');
            },
            error: function (jqXHR, textStatus, errorThrown) {
            },
            complete: function () {
            }
        });
    }
};

var addEditTaskVM = new AddEditTaskViewModel();

$(function () {
    ko.applyBindings(addEditTaskVM, $('#addedit-task-modal')[0]);
});