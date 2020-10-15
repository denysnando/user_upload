# frozen_string_literal: true

class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :login, null: false
      t.string :name, null: false
      t.string :password, null: false

      t.timestamps
    end
    add_index :users, :login, unique: true
  end
end
