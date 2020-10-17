# frozen_string_literal: true

class UserImage < ApplicationRecord
  # Associations
  belongs_to :user

  # Validates
  validates :image_url, :image_name, presence: true
end
