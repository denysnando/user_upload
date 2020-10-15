# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authorize_request, except: :create

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
