# frozen_string_literal: true

class User < ApplicationRecord
  # Validates
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validate :confirm_password, on: :create

  # Callbacks
  before_create :cryptography_password

  def authenticate(password:)
    self.password == Digest::MD5.hexdigest(password)
  end

  private

  def confirm_password
    return if password == password_confirmation

    errors.add :password, :invalid
  end

  def cryptography_password
    self.password = Digest::MD5.hexdigest(password)
  end
end
