Rails.application.routes.draw do
  resources :comments
  namespace :api do
      namespace :v1 do
          resources :users
          resources :posts, only: [:create, :show, :index]
          post '/login', to: 'auth#create'
          get '/validate', to: 'auth#validate'
      end
  end
end