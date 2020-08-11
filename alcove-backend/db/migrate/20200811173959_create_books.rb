class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :quotes
      t.boolean :completed
      t.integer :genre_id

      t.timestamps
    end
  end
end
