# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'bootsnap', '>= 1.1.0', require: false
gem 'carrierwave', '~> 2.0'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.4', '>= 5.2.4.4'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'jwt', '>= 2.2.2'

group :development, :test do
  gem 'pry-rails', '~> 0.3.9'
  gem 'rubocop-rails', '~> 2.7.1', require: false
  gem 'rubocop-rspec', '~> 1.43.2', require: false
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  # Automated tests Coverage
  gem 'database_cleaner', '1.7.0'
  gem 'factory_bot_rails', '5.0.1'
  gem 'faker', '1.9.3'
  gem 'rails-controller-testing', '1.0.4'
  gem 'rspec-rails', '~> 4.0.1'
  gem 'shoulda-matchers', '4.0.1'
  gem 'simplecov', '~> 0.19.0', require: false
  gem 'simplecov-json', '~> 0.2', require: false
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
