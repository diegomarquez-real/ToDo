var AddEditTaskViewModel = function () {
    var self = this;
    self.description = ko.observable(),
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
                    itemId: toDoVM.tasks().length + 1,
                    taskId: response,
                    description: self.description
                };
                toDoVM.tasks.push(item);
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