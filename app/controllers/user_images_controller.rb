class UserImagesController < ApplicationController
  before_action :authorize_request

  def s3_presigned_urls
    presigned_post = S3_BUCKET.presigned_post(
      key: "uploads/user-id-#{current_user.id}/#{SecureRandom.uuid}-${filename}",
      success_action_status: '201', acl: 'public-read'
    )
    render json: { url: presigned_post.url, fields: presigned_post.fields }
  end

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
      params.permit(:image_name, :image_url, :user_id)
    end
end
