class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = current_user.direct_messages
    render :index
  end

  def show
    @direct_message = DirectMessage.find(params[:id])

    if @direct_message.members.include?(current_user)
      render :show
    else
      render json: ["You are not a member of this direct message"], status: 403
    end
  end
end
