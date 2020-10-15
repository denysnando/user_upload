# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    login { Faker::Internet.email }
    password { 123_123 }
  end
end
