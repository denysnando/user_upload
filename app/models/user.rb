# frozen_string_literal: true

class User < ApplicationRecord
  # Validates
  validates :login, presence: true, uniqueness: true
  validates :name, presence: true

  # Callbacks
  before_create :cryptography_password

  def authenticate(password:)
    return true if password_valid?(password: password)
  end

  private

  def password_valid?(password:)
    return true if self.password == Digest::MD5.hexdigest(password)

    raise ArgumentError, 'Password incorrect. User disabled!'
  end

  def cryptography_password
    self.password = Digest::MD5.hexdigest(password)
  end
end
