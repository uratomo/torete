Rails.application.routes.draw do
  devise_for :users
  root "top#index"
  get 'top/index'
  post "top/create"=>"top#create"
  resources :list, only:[:new ,:create,:edit,:update,:destroy] do
    resources :card, only:[:new,:create,:edit,:update,:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
