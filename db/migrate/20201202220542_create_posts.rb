class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :image
      t.string :content
      t.string :price
      t.string :tags

      t.timestamps
    end
  end
end
