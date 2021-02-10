import '@jxa/global-type'
import { run } from '@jxa/run'
import { menuItems } from './getMenuItems.js'
// import { getCmdIds } from './getCmdIds.js'
import { enumify, toMarkdown } from './utils.js'
import fs from 'fs-extra'
import path from 'path'

(async () => {
    const dist = path.resolve(`./dist`)
    // NOTE: Set arguments for JXA
    const outputFile = path.resolve('./.tmp.txt')
    const aeqPath = path.resolve(
        './node_modules/aequery/dist/aequery.js')
    const jsonPath = path.resolve(
        './node_modules/extendscript-json/lib/json2.js')
    // NOTE: Run JXA
    await run(menuItems, outputFile, aeqPath, jsonPath)
    // NOTE: Parse and modify JSON output from AE
    const encoded = await fs.readFile(outputFile)
    const json = decodeURIComponent(encoded)
    const enums = JSON.parse(json)
        .filter((cmd) => cmd.id > 0)
        .map((cmd) => ({
            ...cmd,
            enum: enumify(cmd),
        }))
    const output = JSON.stringify(
        enums.sort((a, b) => a.id - b.id),
        undefined, '\t')
    // NOTE: Write commands to `./dist`
    fs.outputFile(
        path.join(dist, 'cmds.json'), output)
    fs.outputFile(
        path.join(dist, 'cmds.js'), `var cmds = ${output}`)
    fs.outputFile(
        path.join(dist, 'README.md'), toMarkdown(enums))
})()
