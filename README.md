# Hubbub

Hubbub is a live chat web application based on [Discord](https://www.discordapp.com/), offering multi-server and multi-channel support, as well as multi-person direct messages.

## Overview

Hubbub is built with React + Redux on the front-end and Ruby on Rails and PostgreSQL on the back-end. State is updated based on the data returned form the JSON API via Rails.

## Features

### Live Chat

![real-time messaging](http://g.recordit.co/pZ8Zvxfjcf.gif)

Instant messaging is made available through [Pusher](https://pusher.com/). A subscription to a new room-specific Pusher channel is made each time a user enters a direct message thread or channel.

```js
componentWillMount() {
  let { serverId, channelId } = this.props.match.params;
  this.channel = pusher.subscribe(`${serverId}-${channelId}`);
}

componentDidMount() {
  let { serverId, channelId } = this.props.match.params;
  this.props.fetchMessages(serverId, channelId);

  this.channel.bind('new-message', message => {
    this.props.fetchMessages(serverId, channelId);
  }, this);
}
```

### Direct Messages

![direct messages](http://g.recordit.co/CUmFM9sImk.gif)

Users can create individual or group direct messages with each other. To start a new thread, users can search through all available users. Messages are stored in the database, while React handles the updates client-side.

### Channels

![channels](http://g.recordit.co/MIILRmMxNX.gif)

Multiple channels are available in a server. Members can separate conversations by topic and easily navigate between channels.

The message model forms polymorphic associations between channels and direct messages. They are differentiated in the React state by looking at URL params, with a `/channels/@me` URL denoting a direct message.
