@events.each do |event|
  json.set! event.id do
    json.partial! "api/events/event", event: event,
                                      events: @events
  end
end
