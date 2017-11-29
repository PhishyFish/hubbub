@message.includes(:author)

json.extract! @message, :id, :body, :author, :created_at
