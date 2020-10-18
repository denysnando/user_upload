require 'rails_helper'

RSpec.describe UserImage, type: :model do
  describe 'validations' do
    subject { FactoryBot.create(:user_image) }

    it { is_expected.to validate_presence_of(:image_name) }
    it { is_expected.to validate_presence_of(:image_url) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
  end
end
