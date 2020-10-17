# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :user_images, :created_at

  def user_images
    object.user_images.order(:created_at)
  end

  def created_at
    object.created_at.strftime('%d/%m/%Y %H:%M:%S')
  end
end
