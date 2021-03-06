class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  def create
    user = User.new(user_params)

    if user.save
      token = JsonWebToken.encode(user_id: user.id)
      time = Time.zone.now + 24.hours.to_i

      render json: { token: token,
                     exp: time.strftime('%m-%d-%Y %H:%M'),
                     name: user.name,
                     user_id: user.id }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  def show
    user = User.find(params[:id])

    render json: user, each_serializer: UserSerializer
  end

  private

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end
