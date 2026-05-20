// UTC DATE
// Javascript date is timezone neutral
const serverTime = new Date();
//  E.G serverTime: 2026-05-20T06:55:07.512Z,

// UNIX timestamp
const timestamp = Date.now();
//e.g  timestamp: 1779260578876

// PASS timestamp into the date object
const timestampDate = new Date(0);

// PASS timestamp in seconds into the date object by multiply by 1000
const timestampSecondsDate = new Date(1000 * 1000);

console.log({ serverTime, timestamp, timestampDate, timestampSecondsDate });

// USING TIMESTAMP FOR PERFORMANCE MEASUREMENT
const startTime = Date.now();
for (let i = 5; i < 100; i++) {
  console.log(i);
}
const endTime = Date.now();
const duration = `${endTime - startTime}`;
console.log(`It took ${duration}ms for the loop to run`);

// UTC Midnight
const stringAsUTCDate = new Date('2026-05-19');
// e.g  2026-05-19T00:00:00.000Z

// UTC Explicitly
const stringAsUTCExpDate = new Date('2026-05-19T19:00:00Z');
// e.g  2026-05-19T00:00:00.000Z

// LOCAL TIME TO UTC
const localTimeToUTC = new Date('2026-05-19T19:00:00');
// e.g   2026-05-19T18:00:00.000Z ->because local time is +01:00 ahead of utc
console.log({ stringAsUTCDate, stringAsUTCExpDate, localTimeToUTC });

// LOCAL TIME
// LOCAL TIME MIDNIGHT
const date1 = new Date(2024, 0, 15);
// e.g 2024-01-14T23:00:00.000Z -> displayed in utc
const date2 = new Date(2024, 0, 15, 14, 30, 10);
// e.g 2024-01-15T13:30:10.000Z -> displayed in utc
console.log({ date1, date2 });

// JAVASCRIPT DATE GETTERS
// LOCAL TIME GETTERS
const sampleDate = new Date();
const year = sampleDate.getFullYear();
const month = sampleDate.getMonth(); //month is zero index
const date = sampleDate.getDate();
const day = sampleDate.getDay(); // week is zero index
const hour = sampleDate.getHours(); // if local time is 1 hour ahead of utc, hour->15
const minutes = sampleDate.getMinutes();
const seconds = sampleDate.getSeconds();
const milliseconds = sampleDate.getMilliseconds();
const localUTCDifference = sampleDate.getTimezoneOffset();
console.log({ sampleDate, year, month, date, day, hour, minutes, seconds, milliseconds, localUTCDifference });

// UTC TIME GETTERS
const sampleDate2 = new Date();
const utcYear = sampleDate.getUTCFullYear();
const utcMonth = sampleDate.getUTCMonth(); //month is zero index
const utcDate = sampleDate.getUTCDate();
const utcDay = sampleDate.getUTCDay(); // week is zero index
const utcHour = sampleDate.getUTCHours(); // if local time is 1 hour ahead of utc, hour->15
const utcMinutes = sampleDate.getUTCMinutes();
const utcSeconds = sampleDate.getUTCSeconds();
const utcMilliseconds = sampleDate.getUTCMilliseconds();
console.log({ sampleDate2, utcYear, utcMonth, utcDate, utcDay, utcHour, utcMinutes, utcSeconds, utcMilliseconds });

// FORMATTING DATES
const isoString = new Date().toISOString();
const localStringInUsLocaleCode = new Date().toLocaleString('en-US');
const localStringInGBLocaleCode = new Date().toLocaleString('en-GB');
const localStringInNGLocaleCode = new Date().toLocaleString('en-NG');

console.log({ isoString, localStringInUsLocaleCode, localStringInGBLocaleCode, localStringInNGLocaleCode });
// DATES ONLY
const shortDate = new Date('2026-01-25').toLocaleDateString('en-gb', { dateStyle: 'short' });
const longDate = new Date('2026-01-25').toLocaleDateString('en-us', { dateStyle: 'long' });
const fullDate = new Date('2026-01-25').toLocaleDateString('en-us', { dateStyle: 'full' });
const mediumDate = new Date('2026-01-25').toLocaleDateString('en-us', { dateStyle: 'medium' });
//   shortDate: '25/01/2026',
//   longDate: 'January 25, 2026',
//   fullDate: 'Sunday, January 25, 2026',
//   mediumDate: 'Jan 25, 2026'

console.log({ shortDate, longDate, fullDate, mediumDate });
