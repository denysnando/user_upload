FactoryBot.define do
  factory :user_image do
    user
    image_name { Faker::Name.name }
    image_url { Faker::Internet.url }
  end
end
