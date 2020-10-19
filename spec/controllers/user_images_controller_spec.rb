require 'rails_helper'

RSpec.describe UserImagesController, type: :request do
  let(:user) { create(:user) }
  let(:user_image) { create(:user_image) }

  describe '#show' do
    it 'must return show to user_image' do
      get user_image_path(user_image), headers: request_auth

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)

      expect(request[:id]).to eq(user_image.id)
      expect(request[:user_id]).to eq(user_image.user_id)

      expect(request[:image][:url]).to be_present
      expect(request[:image][:thumb]).to be_present
    end
  end

  describe '#create' do
    it 'when return success' do
      post user_images_path, params: { image: Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/case.png')),
                                       user_id: user.id }, headers: request_auth(user)

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)
      user_image_last = UserImage.last

      expect(request[:id]).to eq(user_image_last.id)
      expect(request[:user_id]).to eq(user_image_last.user_id)
      expect(request[:image][:url]).to be_present
      expect(request[:image][:thumb]).to be_present
    end

    it 'when return errors' do
      post user_images_path, params: { image: Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/case.png')) }, headers: request_auth(user)

      expect(response).to have_http_status(:unprocessable_entity)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:errors]).to eq(['User must exist'])
    end
  end
end
