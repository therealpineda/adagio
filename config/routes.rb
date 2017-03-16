Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index] do
      resources :playlists, only: [:index]
      resources :user_follows, as: "follows", only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
    end
    resources :albums, only: [:show]
    resources :playlists, only: [:show, :create, :update, :destroy] do
      resources :songs, only: [:create, :destroy]
      resources :playlist_follows, as: "follows", only: [:create, :destroy]
    end
    resources :albums, only: [:index, :show]
    resources :search, only: [:index]
  end
end
