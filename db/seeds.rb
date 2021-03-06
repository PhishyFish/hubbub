# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(username: "Hubbub", password: "hubadmin")
global = Server.create(name: "Global", owner_id: 1)
ServerMember.create(
  server_id: global.id,
  member_id: admin.id
)

Channel.create(name: "chatter", server_id: 1)
Channel.create(name: "news", server_id: 1)
Channel.create(name: "cat-gifs", server_id: 1)

demo_users = [
  "sheepie", "pnut", "Sneezy", "ZigZag", "Slush", "Ampharos", "Loki",
  "bluebelle", "Boston", "Kyoto", "bacon", "Rick", "Morty", "Summer",
  "Snowball", "santaslilhelper", "Markov", "Curie", "breakfast", "Sennacy"
]

avatars = [
  'https://i.lensdump.com/i/VjY21.png',
  'https://i.lensdump.com/i/VjLYH.png',
  'https://i.lensdump.com/i/Vjvqx.png',
  'https://i.lensdump.com/i/Vjn0k.png',
  'https://i.lensdump.com/i/VjSfe.png'
]

demo_users.each do |name|
  User.create(
    username: name,
    password: "password",
    img_url: avatars.sample
  )
  ServerMember.create(
    server_id: global.id,
    member_id: User.find_by(username: name).id
  )
end

cool_cats = DirectMessage.create(name: "Cool Cats")
demo_users.drop(16).each do |name|
  DirectMessageMember.create(
    direct_message_id: cool_cats.id,
    member_id: User.find_by(username: name).id
  )
  Message.create(
    body: "hi, I'm #{name}!",
    author_id: User.find_by(username: name).id,
    messageable: cool_cats
  )
end
