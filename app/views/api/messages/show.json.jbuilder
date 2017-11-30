time = @message.created_at.localtime.strftime("%A, %B %d, %Y at %I:%M %p")
json.extract! @message, :id, :body, :author
json.created_at time
