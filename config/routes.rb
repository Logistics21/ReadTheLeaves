Rails.application.routes.draw do

namespace :api, defaults: { format: :json } do
  resources :users, only: [:create, :show, :update]
  resource :session, only: [:create, :destroy]
  resources :cities, only: [:index, :show] do
    resources :events, only: [:index]
  end

  resources :events, only: [:show, :create, :destroy, :update]
  resources :attendances, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
