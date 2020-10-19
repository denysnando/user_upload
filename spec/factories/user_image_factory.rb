FactoryBot.define do
  factory :user_image do
    user
    image { File.open("spec/fixtures/case.png") }
  end
end
