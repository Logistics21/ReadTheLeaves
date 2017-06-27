Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :attendances, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :destroy, :update]
    resources :cities, only: [:index, :show, :create]
  end
end
