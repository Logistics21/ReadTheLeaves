class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)

    if @attendance.save!
      render json: Event.find_by(event_id: params[:event_id])
    else
      render @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    attendance = Attendance.Find_by(id: params[:id])
    attendance.destroy
    render json: {}
  end

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
