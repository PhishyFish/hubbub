# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  User.create(username: name, password: "password", img_url: avatars.sample)
end
