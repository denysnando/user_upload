# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: %i[create show]
  post '/auth/login', to: 'authentication#login'
end
