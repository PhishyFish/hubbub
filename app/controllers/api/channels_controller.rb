class Api::ChannelsController < ApplicationController
  before_action :require_login

  def index
    @channels = current_server.channels
    render :index
  end

  def show
    @channel = Channel.find(params[:id])

    if current_server.channels.include?(@channel)
      render :show
    else
      render json: ["Channel does not belong to this server"], status: 403
    end
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = current_server.id

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.update_attributes(channel_params)
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end

  def current_server
    @current_server = Server.find(params[:serverId])
  end
end
