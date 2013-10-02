
class <%= _.classify(pluralControllerName) %> extends Monocle.Controller

    constructor: ->
        super
        @routes
            "/<%= _.underscored(pluralControllerName) %>" : @list<%= _.classify(pluralControllerName) %>
            "/<%= _.underscored(controllerName) %>/:id"   : @view<%= _.classify(controllerName) %>
        Monocle.Route.listen()

    list<%= _.classify(pluralControllerName) %>: (params) ->
        console.log "List all tasks"
    view<%= _.classify(controllerName) %>: (params) ->
        console.log "You choose <%= _.humanize(controllerName) %> with id: #{params.id}"

controller = new <%= _.classify(pluralControllerName) %> "section#<%= _.underscored(pluralControllerName) %>"