const express = require('express');
const Twitter = require('twitter');

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(express.static('public'));

app.get('/getFollowerCount', async (req, res) => {
  try {
    const user1 = await client.get('users/show', { screen_name: 'biiordache' });
    const user2 = await client.get('users/show', { screen_name: 'hanzimmer' });
    
    res.json({
      user1: {
        name: user1.name,
        handle: user1.screen_name,
        profile_image: user1.profile_image_url_https.replace('_normal', ''),
        followers_count: user1.followers_count
      },
      user2: {
        name: user2.name,
        handle: user2.screen_name,
        profile_image: user2.profile_image_url_https.replace('_normal', ''),
        followers_count: user2.followers_count
      }
    });
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${port}`);
});
