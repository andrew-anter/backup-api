
# Backup Api

This is a simple NodeJs application that make a backup of your files
in a specific folder using robocopy which synchronise your files
between the source and destination to be exactly the same files

The process does not copy all the files every time it makes Backup
it just copies files which was modified or new files since the last
backup time which handles resources more efficiently.



## Run

Clone the project

```bash
  git clone https://github.com/andrew-anter/backup-api
```

Go to the project directory

```bash
  cd backup-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Variables

To run this project, you will need to change the following
variables in backupServer script to match your personal perfences

`pathToCopyFrom` : the path to folder to copy data from

`pathToCopyTo` : the path to folder to copy data to

`PathToLogFile` : the path to log file 

`runTime` : an object contatining when to run the script by minutes and hours in 24 hour format - default 12:00AM -

`minutesBetweenEveryCheck` : how many minutes will pass before the application checks if it was the time to backup. (bigger values will lead to less checks and less precision but less resources use too) - default 1 minute -
