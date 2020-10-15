require 'rails_helper'

RSpec.describe AuthenticationController, type: :request do
  let!(:user) { create(:user) }

  context '#login' do
    it 'error password invalid and render to root create new session' do
      post '/auth/login', params: { email: user.email, password: 'as21sd' }
      expect(response).to have_http_status(401)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:error]).to eq('unauthorized')
    end

    it 'success and return token' do
      post '/auth/login', params: { email: user.email, password: '123123' }
      expect(response).to have_http_status(200)
      request = JSON.parse(response.body, symbolize_names: true)
      expect(request[:token]).to be_present
      expect(request[:exp]).to be_present
      expect(request[:name]).to eq(user.name)
    end
  end
end