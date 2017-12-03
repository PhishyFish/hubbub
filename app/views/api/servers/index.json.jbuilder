@servers.includes(:channels)

@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :channels
    json.members do
      json.array! server.members, partial: 'api/users/user', as: :user
    end
  end
end
