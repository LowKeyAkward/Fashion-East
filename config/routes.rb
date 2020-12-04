Rails.application.routes.draw do
  resources :comments
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  post '/posts/:post_id/comments/:id', to: 'users#add_comment'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
