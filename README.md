![Get all the data!](http://upload.klustre.nl/data.jpg)

Attempt at gathering After Effects' command IDs to turn them into a convenient module. The goal is to have a version independent list of enums. Supporting AE 13.5+ (CC 2015).

Building on the work of [David Torno](https://www.provideocoalition.com/after-effects-menu-command-ids/) and [Justin Taylor](http://justintaylor.tv/after-effects-command-ids/).

Very much work-in-progress. Hoping to find some help.

### Usage
```js
app.executeCommand(Cmd.PREFS_GENERAL)
```

### Todo
- [ ] Rename duplicate command names
- [ ] Programmatically merge version specific cmds into `commands` object
- [ ] Add missing command IDs
