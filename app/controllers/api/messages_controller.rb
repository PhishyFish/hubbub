class Api::MessagesController < ApplicationController
  before_action :require_login

  def create
    @message = Message.new(message_params)
    @message.messageable_id = params[:channelId]

    if params[:serverId] = "@me"
      @message.messageable_type = "DirectMessage"
    else
      @message.messageable_type = "Channel"
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
    params.require(:message).permit(
      :body, :author_id, :messageable_id, :messageable_type
    )
  end
end
