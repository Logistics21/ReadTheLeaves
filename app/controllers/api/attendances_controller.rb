class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)
    @attendance.user_id = current_user.id

    if @attendance.save
      render :show
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @attendance = Attendance.find_by(
      event_id: params[:event_id],
      user_id: current_user.id)

    @attendance.destroy!
    render :show
  end

  private

  def attendance_params
    params.require(:attendance).permit(:event_id)
  end
end
