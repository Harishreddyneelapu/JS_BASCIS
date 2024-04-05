//! async makes a function return a Promise
//! await makes a function wait for a Promise

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I mean it !!");
//     });
//     console.log(await myPromise);
//   }
  
//   myDisplay();
  

  //! example without reject

//   async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I got it !!");
//     });
//     console.log(await myPromise)
//   }
  
//   myDisplay();

//! waiting for timeout

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I see You !!");}, 3000);
//     });
//     console.log(await myPromise)
//   }
  
//   myDisplay();

//! Example

// function fetchUserData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({ username: 'john_doe', email: 'john@example.com' });
//       }, 2000); 
//     });
//   }
//   async function getUserData() {
//     try {
//       const userData = await fetchUserData();
//       console.log('User data:', userData);
//       console.log('Username:', userData.username);
//       console.log('Email:', userData.email);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }
  
//   getUserData();
  

//! multiple asynchronous functions


function fetchUserProfile(username) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ username: username, followers: 100, following: 50 });
      }, 2000); 
    });
  }
  
  function fetchUserPosts(username) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Post 1', content: 'This is post 1' },
          { id: 2, title: 'Post 2', content: 'This is post 2' }
        ]);
      }, 1500); 
    });
  }
  
  
  async function displayUserProfile(username) {
    try {
      
      const userProfile = await fetchUserProfile(username);
      const userPosts = await fetchUserPosts(username);
  
      console.log('User Profile:', userProfile);
      console.log('User Posts:', userPosts);
    } catch (error) {
      console.error('Error fetching user profile or posts:', error);
    }
  }
  
  
  displayUserProfile('johndoe');
  