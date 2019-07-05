class AddNameToUser < ActiveRecord::Migration[5.2]
  def change
    # この行を追加する
    add_column :users, :name, :string, null: false, default: '', limit: 100
  end
end
