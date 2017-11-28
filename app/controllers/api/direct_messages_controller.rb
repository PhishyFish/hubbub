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

  # def create
  #   @direct_message = DirectMessage.create(dm_params)
  #
  #   # if params[:direct_message][:members].includes?(current_user)
  #   if @direct_message.save
  #     params[:direct_message][:members].each do |member|
  #       DirectMessageMembers.create(
  #         member_id: member.id,
  #         direct_message_id: @direct_message.id
  #       )
  #     end
  #     render :show
  #   else
  #     render json: @direct_message.errors.full_messages, status: 400
  #   end
  # end
  #
  # def update
  #   @direct_message = DirectMessage.find(params[:id])
  #   @direct_message.update_attributes(dm_params)
  #   render :show
  # end

  def dm_params
    params.require(:direct_message).permit(:name, :members)
  end
end
