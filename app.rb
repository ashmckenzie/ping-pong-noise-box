require 'sinatra/base'
require 'sinatra/reloader'

class PingPongNoiseBox < Sinatra::Base

  configure :development do
    register Sinatra::Reloader
  end

  # set :views, File.dirname(__FILE__) + '/views'
  # set :public_folder, File.dirname(__FILE__) + '/public'

  # use SprocketsMiddleware, %r{/assets} do |env|
  #   env.append_path "assets/stylesheets"
  #   env.append_path "assets/javascripts"
  #   env.append_path "assets/images"
  #   env.append_path "assets/fonts"
  # end

  get '/' do
    erb :index
  end
end
