class Api::ServersController < ApplicationController
  before_action :require_login

  def index
    if params[:join] == "true"
      @servers = Server.all.where.not(id: current_user.servers)
    else
      @servers = current_user.servers
    end
    render :index
  end

  def show
    @server = Server.find(params[:id])

    if @server.members.include?(current_user)
      render :show
    else
      render json: ["You are not a member of this server"], status: 403
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      Channel.create(name: "general", server_id: @server.id)
      ServerMember.create(server_id: @server.id, member_id: current_user.id)
      render :show
    else
      render json: @server.errors.full_messages, status: 400
    end
  end

  def update
    @server = Server.find(params[:id])
    @server.update_attributes(server_params)
    render :show
  end

  private

  def server_params
    params.require(:server).permit(:name, :img_url)
  end
end
