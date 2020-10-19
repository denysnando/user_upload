Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'

  resources :users, only: %i[create show]
  resources :user_images, only: %i[create show]

  # Fallback Routes to React
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
