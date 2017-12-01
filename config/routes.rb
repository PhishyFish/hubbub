Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show, :update]
    resources :direct_messages, only: [:index, :show, :create, :update]
    resources :messages, only: [:index, :show, :create, :update]
    resources :servers, only: [:index, :show, :create, :update]
    resources :channels, only: [:index, :show, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
