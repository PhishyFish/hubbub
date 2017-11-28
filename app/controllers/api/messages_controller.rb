class Api::MessagesController < ApplicationController
  before_action :require_login

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if params[:serverId] = "@me"
      @message.messageable = DirectMessage.find(params[:channelId])
    else
      @message.messageable = Channel.find(params[:channelId])
    end

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 400
    end
  end

  def update
    @message = Message.find(params[:id])
  end

  def destroy
  end

  def message_params
    params.require(:message).permit(:body)
  end
end
