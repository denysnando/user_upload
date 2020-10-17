# frozen_string_literal: true

Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'

  resources :users, only: %i[create show]
  resources :user_images, only: %i[create show] do
    get :s3_presigned_urls, on: :collection
  end
end
