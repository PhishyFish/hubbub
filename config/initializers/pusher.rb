require 'pusher'

Pusher.app_id = ENV["pusher_app_id"]
Pusher.key    = ENV["pusher_key"]
Pusher.secret = ENV["pusher_secret"]
Pusher.cluster = ENV["pusher_cluster"]
Pusher.logger = ENV["pusher_logger"]
Pusher.encrypted = ENV["pusher_encrypted"]
