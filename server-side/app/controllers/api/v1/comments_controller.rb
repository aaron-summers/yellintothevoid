class Api::V1::CommentsController < ApplicationController

  def create
    comment = Comment.create comment_params

    if comment.valid?
      comment.save
      render json: comment, status: :created
    else
      render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /comments
  def index
    render json: Comment.all
  end

  # GET /comments/1
  def show
    comment = Comment.find(params[:id])
    render json: {comment: CommentSerializer.new(comment) }
  end

  private
  
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
