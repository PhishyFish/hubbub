require 'pusher'

Pusher.app_id = ENV['438869']
Pusher.key = ENV['16130caa1c2bfa995eaa']
Pusher.secret = ENV['9d7b411d4ef4d1b743ae']
Pusher.cluster = 'us2'
Pusher.logger = Rails.logger
Pusher.encrypted = true
