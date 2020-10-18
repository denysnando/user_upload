namespace :start do
  task development: :environment do
    exec 'foreman start -f Profile.dev'
  end
end

desc 'Start development server'
task start: 'start:development'
