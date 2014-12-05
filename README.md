react-flash
===========

Spawn flash messages with React

## Design Goals

### Basic goals
1. Reusable
2. Flash has a timer which causes it to die after few seconds (or given time)
3. Flash timer stops when hovered
4. Able to add flash ```this.props.flash()```
5. Able to remove flash ```this.props.remove(key||id)```
6. Able to flush flash ```this.props.flush()```

### Other goals
1. Filter flash messages by type / category ```<GroupOfMessages filter="notification" />```
2. Custom message templates [by using a mixin]
3. Custom position of message by groups(filtered)
4. Settings (properties)
  * Duration
  * Unique

### Future goal
1. es6