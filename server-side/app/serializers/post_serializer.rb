class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :flags, :user
  has_many :comments

  def user
    UserSerializer.new(self.object.user)
  end
  
end
