require 'rails_helper'


RSpec.describe ApplicationController, type: :request do
  let(:user) { create(:user) }

  describe '#authorize_request' do
    it 'error JWT::DecodeError return error' do
      get user_path(user), headers: { 'ACCEPT' => 'application/json', 'Authorization' => '1233123123' }

      expect(response).to have_http_status(:unauthorized)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:errors]).to eq('Not enough or too many segments')
    end

    it 'error ActiveRecord::RecordNotFound return error' do
      get user_path(user), headers: { 'ACCEPT' => 'application/json',
                                      'Authorization' => 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE2MDMxNTc0MjV9._EDjMBogokmj_4YmsZ3U4BzQbxBSDJXPnGqzmo7FcVg' }

      expect(response).to have_http_status(:unauthorized)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:errors]).to eq("Couldn't find User with 'id'=6")
    end
  end
end
