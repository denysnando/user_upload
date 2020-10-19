class UserImage < ApplicationRecord
  # Uploders
  mount_uploader :image, UserImageUploader

  # Associations
  belongs_to :user

  # Validates
  validates :image, presence: true
end
