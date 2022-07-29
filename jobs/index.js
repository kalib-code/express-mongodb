const cron = require('node-cron');

let SampleCron = cron.schedule('* * * * *', () => { 
  try {
    //Do something here
  } catch (error) {
    throw error;        
  }
});   

SampleCron.start();
