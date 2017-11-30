@messages.includes(:author)

@messages.each do |message|
  time = message.created_at.localtime.strftime("%A, %B %d, %Y at %I:%M %p")
  json.set! message.id do
    json.extract! message, :id, :body, :author
    json.created_at time
  end
end
