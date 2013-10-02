
class <%= _.classify(modelName) %> extends Monocle.Model
    @fields "<%= modelFields.join('", "') %>"