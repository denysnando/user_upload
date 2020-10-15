# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: [:show]
  post '/auth/login', to: 'authentication#login'
end
