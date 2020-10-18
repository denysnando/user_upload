require 'rails_helper'

RSpec.describe UsersController, type: :request do
  let(:user) { create(:user) }

  describe '#create' do
    before { expect(User.count).to be_zero }

    it 'must create a user and to do login' do
      post '/users', params: { name: Faker::Name.name, email:
        Faker::Internet.email, password: 'as21sd',
                               password_confirmation: 'as21sd' }

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:token]).to be_present
      expect(request[:exp]).to be_present
      expect(request[:name]).to eq(User.last.name)
    end

    it 'must try create but fail' do
      post '/users', params: { name: Faker::Name.name, email:
        Faker::Internet.email, password: 'as21sd',
                               password_confirmation: 'as21' }

      expect(User.count).to be_zero
      expect(response).to have_http_status(:unprocessable_entity)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:errors]).to eq(['Password is invalid'])
    end
  end

  describe '#show' do
    before { create_pair(:user_image, user_id: user.id) }

    it 'must return show to user and associations' do
      get user_path(user), headers: request_auth(user)

      expect(response).to have_http_status(:ok)
      request = JSON.parse(response.body, symbolize_names: true)

      expect(request[:id]).to eq(user.id)
      expect(request[:name]).to eq(user.name)
      expect(request[:email]).to eq(user.email)

      expect(request[:user_images].count).to eq(2)
    end
  end
end
