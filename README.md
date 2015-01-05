react-flash
===========

Spawn flash messages with React

## Important Notice

**01/05/2015**

I might be discontinuing this project for a few reasons:

1. I thought, this kind of feature do not belong with mere views itself;
2. Maybe, coupling this implementation along with a Flux implementation is a better idea
3. I am out of design ideas.

## Design Goals

### Basic goals
1. Reusable
2. Flash has a timer which causes it to die after few seconds (or given time)
3. Flash timer stops when hovered
4. Able to add flash ```this.props.flash()```
5. Able to remove flash ```this.props.remove(key||id)```
6. Able to flush flash ```this.props.flush()```

### Usage

We want 3 basic components:

[1] ```Container```

To contain the list of / stack of messages and utility methods (```remove```, ```flush```, ```add```). Container for all ```Drawer``` components.

Should be a mixin for the current / active route's ```view-component```.

```js
var FlashContainerMixin = require('..').ContainerMixin;
var App = React.createClass({
  mixins: [FlashContainerMixin],
  render: function() {
    return (
      <div>
        <Drawer />
        <Drawer />
      </div>
    );
  }
});
```

[2] ```Drawer```

Contains a list of messages, filtered / unfiltered. It should be possible to have multiple of this.

```js
<div>
  <Drawer filter="notification" />
  <Drawer filter="alert" />
  <RouteHandler />
</div>
```

[3] ```Message```

The message component / template itself. Should be reusable since we'd want custom stuff / flexibility.

```js
var MessageMixin = require('...');
var MyMessage = React.createClass({
  mixins: [MessageMixin],
  render: function() {
    // ?
  }
});

// ```Container``` stuff
<Drawer filter="notification" template={MyMessage} />
```

1. `Mixin` for the `Message` component for reusability (since we'd like our messages to be used in a a way we'd like it to be).

### Other goals
1. Filter flash messages by type / category ```<GroupOfMessages filter="notification" />```
2. Custom message templates [by using a mixin]
3. Custom position of message by groups(filtered)
4. Settings (properties)
  * Duration
  * Unique

### Future goal
1. es6
