# cmdid
Attempt at gathering most After Effects' command IDs.

## Goal
To have a module of version independent enums that can be used in any script. Supporting AE 15.0 (CC 2018) and up.

### Usage
```js
app.executeCommand(Cmd.PREFS_GENERAL)
```

## Status
Very much work-in-progress, but check out the [initial list](https://github.com/aenhancers/cmdid/tree/main/dist) for AE 17.X.

Building on the work of [David Torno](https://www.provideocoalition.com/after-effects-menu-command-ids/) and [Justin Taylor](http://justintaylor.tv/after-effects-command-ids/).

### Todo
- [ ] Rename duplicate command names
- [ ] Programmatically merge version specific cmds into `commands` object
- [ ] Add missing command IDs
