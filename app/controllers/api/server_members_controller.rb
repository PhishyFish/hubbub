class Api::ServerMembersController < ApplicationController
  def create
    @server = Server.find(params[:serverId])

    if @server
      if current_user.servers.include?(@server)
        render json: ['You are already a member of this server'], status: 412
      else
        @server_member = ServerMember.create(
          server_id: params[:serverId],
          member_id: current_user.id
        )

        render "api/servers/show"
      end
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def destroy
  end
end
