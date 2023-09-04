window.onload = function() {
  fetch('/getFollowerCount')
    .then(response => response.json())
    .then(data => {
      document.getElementById('user1Image').src = data.user1.profile_image;
      document.getElementById('user1Name').textContent = data.user1.name;
document.getElementById('user1Name').innerHTML = `${data.user1.name} <span>@${data.user1.handle}</span>`;
      document.getElementById('user1Followers').textContent = data.user1.followers_count;

      document.getElementById('user2Image').src = data.user2.profile_image;
      document.getElementById('user2Name').textContent = data.user2.name;
document.getElementById('user2Name').innerHTML = `${data.user2.name} <span>@${data.user2.handle}</span>`;
      document.getElementById('user2Followers').textContent = data.user2.followers_count;

      if (data.user1.followers_count > data.user2.followers_count) {
          document.getElementById('user1Name').innerHTML = `👑 ${data.user1.name} <span>@${data.user1.handle}</span>`;
      } else if (data.user1.followers_count < data.user2.followers_count) {
          document.getElementById('user2Name').innerHTML = `👑 ${data.user2.name} <span>@${data.user2.handle}</span>`;
      }

      // ... (rest of your code)

const totalFollowers = data.user1.followers_count + data.user2.followers_count;
const totalWidth = document.querySelector('.progress-bar').offsetWidth;

const user1Position = (data.user1.followers_count / 1000) * totalWidth;
const user2Position = (data.user2.followers_count / 1000) * totalWidth;

// Set the position
document.getElementById('user1Progress').style.left = `${user1Position - 25}px`; 
document.getElementById('user2Progress').style.left = `${user2Position - 25}px`;

// Set the images
document.getElementById('user1ProgressImage').src = data.user1.profile_image;
document.getElementById('user2ProgressImage').src = data.user2.profile_image;

// Set the width of the progress-track based on the combined progress
document.querySelector('.progress-track').style.width = `${(totalFollowers / 1000) * 100}%`;

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
