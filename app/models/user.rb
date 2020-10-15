# frozen_string_literal: true

class User < ApplicationRecord
  # Accessors
  attr_accessor :password_confirmation

  # Validates
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true

  # Callbacks
  before_create :cryptography_password

  def authenticate(password:)
    self.password == Digest::MD5.hexdigest(password)
  end

  private

  def cryptography_password
    self.password = Digest::MD5.hexdigest(password)
  end
end
