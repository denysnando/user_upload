class UserImagesController < ApplicationController
  before_action :authorize_request

  def show
    user_image = UserImage.find(params[:id])

    render json: user_image, each_serializer: UserImageSerializer
  end

  def create
    user_image = UserImage.new(user_image_params)

    if user_image.save
      render json: user_image, each_serializer: UserImageSerializer
    else
      render json: { errors: user_image.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    def user_image_params
      params.permit(:image, :user_id)
    end
end
