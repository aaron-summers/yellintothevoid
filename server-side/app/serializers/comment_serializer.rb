class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post, :user
  has_one :user
  has_one :post
end
