Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
          resources :users
          resources :posts, only: [:create, :show, :index]
          resources :comments, only: [:create, :show, :index]
          post '/login', to: 'auth#create'
          get '/validate', to: 'auth#validate'
      end
  end
end