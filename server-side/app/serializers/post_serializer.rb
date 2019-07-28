class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :flags, :user

  def user
    UserSerializer.new(self.object.user)
  end
  
end
