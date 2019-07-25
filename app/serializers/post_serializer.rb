class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :flags, :user
end
