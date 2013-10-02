
class <%= _.classify(viewName) %> extends Monocle.View

    container: "div#<%= _.underscored(pluralViewName) %>"

    template_url: "templates/<%= _.underscored(viewName) %>.mustache"