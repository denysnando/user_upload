## README

Hi, This project is a [Rails](http://rubyonrails.org/) application for the [user_upload](https://user-upload.herokuapp.com/) company.


## Prerequisites

Have the following features with their respective versions installed on the machine:

* Ruby `2.7.1` - You can use [RVM](http://rvm.io)
* [PostgreSQL 12](http://www.postgresql.org/)
  * OSX - `$ brew install postgresql` or install [Postgress.app](http://postgresapp.com/)
  * Linux - `$ sudo apt-get install postgresql`
  * Windows - [PostgreSQL for Windows](http://www.postgresql.org/download/windows/)
* Bundler `2.1.4`
* NodeJS `12` - You can (and should) use [NVM](https://github.com/creationix/nvm)

## Setup the project

After you get all the [prerequisites](#prerequisites), simply execute the following commands in sequence:

```bash
1. Install the dependencies above
2. $ git clone git@github.com:denysnando/streaming_tv.git # Clone the project
3. $ cd user_upload # Go into the project folder
4. $ gem install bundler # Bundler install
5. $ bin/bundle install # Install the gem dependencies
6. $ yarn install # Install the ui dependencies
7. $ bin/rake db:create ; bin/rake db:migrate  # Reset and seed the database
8. $ bin/rspec # Run the specs to see if everything is working fine
```

## Running the project

1. `$ rake start` - Opens the server
2. Open [http://localhost:3001](http://localhost:3001)

#### Running specs and checking coverage
To run the tests it is necessary to have the [prerequisites](#prerequisites) and have also completed the [installation](#installation) of dependencies.

`$ bin/bundle rspec` to run the specs.

`$ coverage=on bin/bundle rspec` to generate the coverage report then open the file `coverage/index.html` on your browser.


## Thanks for the opportunity :+1:
