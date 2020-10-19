class SomeChangesToUserImages < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_images, :image_url
    rename_column :user_images, :image_name, :image
  end
end
