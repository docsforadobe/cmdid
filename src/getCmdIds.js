export const getCmdIds = (datFile) => {
	return new Promise((resolve) => {
		const stream = require('stream')
		const fs = require('fs')
		const readline = require('readline')
		const instream = fs.createReadStream(datFile, 'utf16le')
		const outstream = new stream()
		const file = readline.createInterface(instream, outstream)
		let menuIDs = {}
		file.on('line', line => {
			if (line.match(/\$\$\$\/AE\/MenuID/)) {
				line = line.substring(line.lastIndexOf('/') + 1)
				const data = line.match(/[a-z|A-Z|0-9]*\_[0-9]*/)
				if (data) {
					const name = data[0].match(/[a-z|A-Z|0-9]*\_/)[0].slice(0, -1)
					const number = data[0].match(/\_[0-9]*/)[0].substr(1)
					menuIDs[number] = name
				}
			}
		})
		file.on('close', () => resolve(menuIDs))
	})
}

const datFile = path.join(
	decodeURI(
		require('path')
			.dirname(
				new CSInterface()
					.getSystemPath('hostApplication')
			)
	),
	'Dictionaries',
	'es_ES',
	'after_effects_es_ES.dat'
)

getCmdIds(datFile).then(res => console.log(res))
