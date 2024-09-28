var DeleteTaskViewModel = function () {
    var self = this;
    self.task = ko.observable();
    self.index = ko.observable();
    self.confirmDeleteTask = function() {
        $.ajax({
            url: `/Task/Delete/${self.task().taskId}`,
            type: 'POST',
            beforeSend: function () {
            },
            success: function (response) {
                toDoVM.tasks.splice(self.index(), 1);
                $('#modal-placeholder').find('.modal').modal('hide');
            },
            error: function (jqXHR, textStatus, errorThrown) {
            },
            complete: function () {
            }
        });
    }
}

var deleteTaskVM = new DeleteTaskViewModel();

$(function () {
    ko.applyBindings(deleteTaskVM, $('#delete-task-modal')[0]);
});