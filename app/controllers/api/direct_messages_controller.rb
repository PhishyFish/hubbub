class Api::DirectMessagesController < ApplicationController
  before_action :require_login

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

  def create
    @direct_message = DirectMessage.new(dm_params)

    # if params[:direct_message][:members].includes?(current_user)
    if @direct_message.save
      if params[:directMessage][:members]
        params[:directMessage][:members].each do |member|
          DirectMessageMember.create(
            member_id: member,
            direct_message_id: @direct_message.id
          )
        end
      end

      DirectMessageMember.create(
        member_id: current_user.id,
        direct_message_id: @direct_message.id
      )

      render :show
    else
      render json: @direct_message.errors.full_messages, status: 400
    end
  end

  def update
    @direct_message = DirectMessage.find(params[:id])
    @direct_message.update_attributes(dm_params)
    render :show
  end

  def dm_params
    params.require(:directMessage).permit(:name)
  end
end
