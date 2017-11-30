json.extract! @message, :id, :body
json.author @message.author, :id, :username, :img_url
if @message.created_at == @message.updated_at
  time = @message.created_at.localtime.strftime("%A, %B %d, %Y at %I:%M %p")
  json.created_at time
else
  time = @message.updated_at.localtime.strftime("%A, %B %d, %Y at %I:%M %p")
  json.created_at "Edited at #{time}"
end
