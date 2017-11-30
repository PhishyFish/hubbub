json.extract! @message, :id, :body, :author
json.created_at @message.created_at.strftime("%A, %B %d, %Y at %I:%M %p")
