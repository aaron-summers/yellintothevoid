class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post, :user
  belongs_to :user
  belongs_to :post
end
