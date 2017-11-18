class Api::EventsController < ApplicationController
  def index
    @city = City.find_by(id: params[:city_id])
    @events = @city.events
    render "api/events/index"
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find_by(id: params[:id])

    if @event
      render :show
    else
      render json: "Event not found", status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render "api/events/show"
  end

  def update
    @event = Event.find_by(id: params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:date, :address, :description, :city_id, :spots)
  end
end
