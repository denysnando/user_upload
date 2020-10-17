# frozen_string_literal: true

module Request
  def request_auth(user = nil)
    user ||= create(:user, password: '123123')
    post '/auth/login', params: { email: user.email, password: '123123' }

    token = JSON.parse(response.body)['token']
    { 'ACCEPT' => 'application/json', 'Authorization' => token }
  end
end
