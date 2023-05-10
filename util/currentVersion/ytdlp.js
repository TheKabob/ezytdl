const { file, getPath } = require(`../filenames/ytdlp`);
const path = getPath()

const fs = require('fs');
const child_process = require('child_process');

let currentVersion = null;

module.exports = (forceCheck) => new Promise(async res => {
    if(!forceCheck && currentVersion) {
        return res(currentVersion);
    } else {
        const exists = path;
        console.log(`Exists? ${exists}`)

        if(exists) {
            const versionString = child_process.execSync(`${path} --version`).toString().trim();
    
            currentVersion = versionString;
        
            return res(currentVersion)
        } else {
            console.log(`File doesn't exist, returning null`);
            return res(null)
        }
    }
})