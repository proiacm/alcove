class BookSerializer < ActiveModel::Serializer
    attributes :id, :title, :author, :quotes, :completed
    belongs_to :genre
  end