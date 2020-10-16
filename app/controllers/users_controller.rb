# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  def create
    user = User.new(user_params)

    if user.save
      token = JsonWebToken.encode(user_id: user.id)
      time = Time.zone.now + 24.hours.to_i

      render json: { token: token,
                     exp: time.strftime('%m-%d-%Y %H:%M'),
                     name: user.name }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  def show
    render json: @user, status: :ok
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
