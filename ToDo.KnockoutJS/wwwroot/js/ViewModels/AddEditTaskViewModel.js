function AddEditTaskViewModel() {
    var self = this;
    self.description = ko.observable(),
    self.task = ko.observable();
    self.title = ko.observable('Add Task');
    self.url = '/Task/Create';
    self.task.subscribe(function (newValue) {
        if (newValue == null) {
            return;
        }
        self.description(newValue['description']());
        self.title('Edit Task');
        self.url = `/Task/Update/${newValue['taskId']}`;
    });
    self.saveTask = function () {
        var model = {
            Description: this.description()
        };

        $.ajax({
            url: self.url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(model),
            beforeSend: function () {
            },
            success: function (response) {
                if (self.task() == null) {
                    var item = {
                        itemIndex: toDoVM.tasks().length,
                        taskId: response,
                        description: ko.observable(self.description())
                    };
                    toDoVM.tasks.push(item);
                } else {
                    toDoVM.tasks()[self.task()['itemIndex']].description(self.description())
                }
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