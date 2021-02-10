// NOTE: Written in Apple's JavaScript Automation (JXA)
export function menuItems(outputPath, aeqPath, jsonPath) {
    console.log(outputPath, '\n')
    const app = Application('Adobe After Effects')
    const system = Application('System Events')
    const process = system.processes.byName('Adobe After Effects')
    const menuBar = process.menuBars[0]
    const barItems = menuBar.menuBarItems()
    const mainMenus = barItems.map((item) => item.title())
    
    // NOTE: Get all the menu items
    let menuItems = mainMenus
        .map((name) => menuBar
            .menuBarItems
            .byName(name)
            .entireContents()
            .map((item) => ({
                label: item.title(),
                menu: name === 'After Effects' ? 'Preferences' : name,
            }))
            .filter((item) => item.label)
        )
    menuItems = menuItems.flat()
    // NOTE: Load `aeq` into global scope
    app.doscriptfile(aeqPath)
    // NOTE: Load `JSON` into global scope
    app.doscriptfile(jsonPath)
    // NOTE: Get all the menu command IDs
    const exitCode = app.doscript(
        // NOTE: Written in Extendscript (ES3)
        `(function() {
            var ids = aeq.arrayEx(
                ${JSON.stringify(menuItems)}
            ).map(function(item) {
                return ({
                    id: app.findMenuCommandId(item.label),
                    menu: item.menu,
                    label: item.label,
                })
            })
            // aeq.writeFile(
            //     '${outputPath}',
            //     encodeURIComponent(JSON.stringify(ids)),
            //     { overwrite: true } //, encoding: 'UTF-16'}
            // )
            aeq.command.call({
                mac: 'echo "' + encodeURIComponent(JSON.stringify(ids)) + '" > "${outputPath}"'
            })
        })()`
    )
    const success = exitCode === '0'
    if (!success) {
        throw new Error(`Extendscript error ${exitCode}`)
    }
}

// forEach(mainMenus, function(name) {
//     // TODO: Exclude `Effects` menu
//     // if (name !== 'Effects')
//     // menuItems[name] = menuBar.menuBarItems
//     menuBar.menuBarItems
//         .byName(name)
//         .entireContents()
//         .map((item) => item.title())
//         .filter((item) => item)
//         // TODO: Exclude submenus like `Extensions`
// })
// function forEach(arr, fn) {
//     for (var i = 0, len = arr.length; i < len; i++) {
//         fn(arr[i], i)
//     }
// }

   