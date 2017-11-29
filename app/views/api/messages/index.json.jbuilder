@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :author
    json.created_at message.created_at.strftime("%A, %B %d, %Y at %I:%M %p")
  end
end
