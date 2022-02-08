const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername = "PutraXd Ofc"
global.ownernumber = "6283842942635"
global.botname = "PutraXd Bot"
global.thumbnail = fs.readFileSync("./settings/haruka.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/4e3581f3ae06bfa621247.jpg"
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
