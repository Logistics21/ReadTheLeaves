Rails.application.routes.draw do
#   namespace :api, defaults: { format: :json } do
#     resources :users, only: [:index, :create, :show, :destroy, :update]
#     resource :session, only: [:create, :destroy]
#     resources :attendances, only: [:create, :index, :destroy]
#     resources :events, only: [:index, :show, :create, :destroy, :update] do
#       delete '/events/:event_id/attendances', to: 'attendances#destroy'
#     end
#     resources :cities, only: [:index, :show, :create]
#   end
# end

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
