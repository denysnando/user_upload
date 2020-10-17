# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UserImagesController, type: :request do
  let(:user) { create(:user) }
  let(:user_image) { create(:user_image) }

  describe '#s3_presigned_urls' do
    it 'must return s3_presigned_urls' do
      get '/user_images/s3_presigned_urls', headers: request_auth

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:url]).to be_present
      expect(request[:fields]).to be_present
    end
  end

  describe '#show' do
    it 'must return show to user_image' do
      get user_image_path(user_image), headers: request_auth

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)

      expect(request[:id]).to eq(user_image.id)
      expect(request[:user_id]).to eq(user_image.user_id)
      expect(request[:image_url]).to eq(user_image.image_url)
      expect(request[:image_name]).to eq(user_image.image_name)
    end
  end

  describe '#create' do
    it 'when return success' do
      post user_images_path, params: { image_url: Faker::Internet.url,
                                       image_name: Faker::Name.name,
                                       user_id: user.id }, headers: request_auth(user)

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)
      user_image_last = UserImage.last

      expect(request[:id]).to eq(user_image_last.id)
      expect(request[:user_id]).to eq(user_image_last.user_id)
      expect(request[:image_url]).to eq(user_image_last.image_url)
      expect(request[:image_name]).to eq(user_image_last.image_name)
    end

    it 'when return errors' do
      post user_images_path, params: { image_url: Faker::Internet.url,
                                       image_name: Faker::Name.name }, headers: request_auth(user)

      expect(response).to have_http_status(:unprocessable_entity)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:errors]).to eq(['User must exist'])
    end
  end
end
