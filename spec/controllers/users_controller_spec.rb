# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UsersController, type: :request do
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
end
