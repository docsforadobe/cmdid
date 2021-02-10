export function enumify(obj) {
    const menu = 
    obj.menu === 'Preferences' ||
    obj.menu === 'Animation' ||
    obj.menu === 'Composition'
    ? obj.menu.slice(0, 4)
    : obj.menu
    const res = `${menu}_${obj.label}`
        // TODO: Verify completeness
        .replace(/[\s-:\./()“”+’]/g, '_')
        .replace(/_+/g, '_')
        .replace(/\.{3}/, '')
        .toUpperCase()
    return res.endsWith('_') ? res.slice(0, -1) : res
}

export function toMarkdown(cmds) {
    // Durrty 😈
    const arr = cmds
        .map((cmd) => ({
            menu: cmd.menu,
            id: cmd.id,
            label: cmd.label,
            enum: `Cmd.${cmd.enum}`,
        }))
    return [
        Object.keys(arr[0]).join('|'),
        ['-', '-', '-', '-'].join('|'),
        arr
            .map((line) => Object.values(line).join('|'))
            .join('\n')
    ].join('\n').toString()
}
