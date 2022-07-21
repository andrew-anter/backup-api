const express = require("express");
const { exec } = require("child_process");
const app = express();

// Variables to change //
const minutesBetweenEveryCheck = 1; // Check happens every minute to ensure it runs at the exact time in runTime object, change this to lower checks with lower precision
const runTime = {   // Default runtime is 12:00AM everyday
    hours: 00,
    minutes: 00
}
const pathToCopyFrom = '';
const pathToCopyTo = '';
const PathToLogFile = '' + `.txt`; // Do not change the extension just write the file name and path

//! Don't change here !//

const twoDigitsNotation = (oneDigitNotation) =>{
    return oneDigitNotation < 10 ? '0' + oneDigitNotation : oneDigitNotation;
}

function backingUpServer() {
    const nowTime = new Date();

    if (nowTime.getHours() === runTime.hours && nowTime.getMinutes() === runTime.minutes) {
        exec(`robocopy ${pathToCopyFrom} ${pathToCopyTo} /e /mir /np /mt /log:${PathToLogFile}`, (error, stdout, stderr) => {
            if (stdout) {
                console.log(`Backup has completed successfully at ${twoDigitsNotation(nowTime.getHours())}:${twoDigitsNotation(nowTime.getMinutes())}` );
                console.log(`STDOUT: ${stdout}`);
            }
            else if (error) {
                console.log(`exec ERROR: ${error}`);
            }
            else if (stderr) {
                console.log(`exec STDERR: ${stderr}`);
            }
        });

    }
}

setInterval(backingUpServer, minutesBetweenEveryCheck * 60 * 1000);

app.listen(2000, () => {
    console.log('Backup Server is Up');
    console.log(`Backup Occurs at ${twoDigitsNotation(runTime.hours)}:${twoDigitsNotation(runTime.minutes)}`);
})