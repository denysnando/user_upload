class UserImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :image_name, :user_id, :created_at

  def created_at
    object.created_at.strftime('%d/%m/%Y %H:%M:%S')
  end
end
