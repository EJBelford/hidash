//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//                        Classification: UNCLASSIFIED
//==============================================================================
//                Copyright, Belford DBA Consulting, LLC, 2022
//                      Unpublished, All Rights Reserved
//==============================================================================
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/
//
// Section 32: The Basic of Testing
// Lesson: 443
//
//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
// NOTES: 
//------------------------------------------------------------------------------

// apt list --upgradable
// sudo apt upgrade

// git clone https://github.com/EJBelford/<prjctnm>
 
// nodejs.org/api 
// node --inspect-brk <prjctNm>
 
// npm install chalk@4.1.2
// npm install express
// npm install nodemon
// npm install cookie-session
// npm install express-validator
// npm install multer
 
// npm update
// npm audit fix
// npm audit fix --force

// clear && npm start
// clear && date && npm run dev
// To stop: <CRTL>-C
// [nodemon] to restart at any time, enter `rs`

// sudo lsof -i :3000
// kill -9 9012
// killall node

// http://localhost:3000/

//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/

module.exports = {
  forEach(arr, fn) {
    // for (let i = 0; i < arr.length; i++) {
    //   const value = arr[i];
    //   fn(value, i);
    // }

    for (let index in arr) {
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  }
};

// forEach([1, 2, 3], (value) => {
//   console.log(value);
// });

