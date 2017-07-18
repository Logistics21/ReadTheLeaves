json.set! @event.id do
  json.partial! "api/events/event", event: @event
end
