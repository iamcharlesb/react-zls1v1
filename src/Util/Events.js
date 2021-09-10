class Events {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, listener) {
    //make sure there is a topic and listener
    if (!topic || !listener) {
      return;
    }

    //create the topic if not yet created
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    //add the listener to queue
    this.topics[topic].push(listener);
  }

  publish(topic, data) {
    //make sure the topic and listeners exist
    if (!this.topics[topic] || this.topics[topic].length < 1) {
      return;
    }

    //send the event to all listeners
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
}

const EventObj = new Events();

export default EventObj;
