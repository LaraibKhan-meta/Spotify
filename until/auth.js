import axios from 'axios';
import {setAccessToken} from '../redux/authToken';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import App from '../App';

 const clientId='fae0936a402146688b9c322f225612a5';
 const clientSecret= '253aa54523f24feb9a7c19e569467a2c';
 const redirectURi = 'spotifyapp://callback';
const scopes = ['user-read-email', 'user-read-private', 'user-read-recently-played'];




// // for code
export const handleOpenInAppBrowser = async () => {
  // const scopes = encodeURIComponent('user-read-email user-read-private user-read-recently-played');
  
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURi}&scope=${scopes}&response_type=code`;
  console.log("Access Url");
  try {
    const response = await InAppBrowser.openAuth(authUrl, redirectURi, {});
    console.log(response);
    if (response.type === 'success' && response.url) {
      const code = response.url.match(/[\\?&]code=([^&]*)/)[1];
      console.log('Authorization Code:', code);
       if (code) {
        const res = await getAccessToken(code);
        console.log("GET ACCESS TOKEN",res);
        return res;
      }
     
    }
  } catch (error) {
    console.error('Error opening InAppBrowser:', error);
  }
};

export const getAccessToken = async code => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirectURi);

  const authString = `${clientId}:${clientSecret}`;
  const encodedAuth = btoa(authString);

  try {
    const result = await axios.post(
      'https://accounts.spotify.com/api/token',
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encodedAuth}`,
        },
      },
    );
    return result.data;
  } catch (error) {
    console.log('Spotify login failed', error.response?.data);
  }
};

const isTokenExpired = () => {
  if (!timestamp || !expiresIn) return true;
  const now = Date.now();
  return now - timestamp > expiresIn * 1000;
};


        
 
 // for token
// export const handleOpenInAppBrowser = async () => {
//     const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURi}&scope=${scopes}&response_type=token`; 
//     try {
//       const response = await InAppBrowser.openAuth(authUrl, redirectURi, {});
//       console.log(response)
//       if (response.type === 'success' && response.url) {
//         const accessToken = response.url.match(/access_token=([^&]*)/)[1];
//         console.log('Access Token:', accessToken);
//         // navigation.navigate('Profile', { token:accessToken });
//       }
//     } catch (error) {
//       console.error('Error opening InAppBrowser:', error);
//     }
//   };

// const config = {
//   clientId: 'fae0936a402146688b9c322f225612a5',
//   clientSecret: '253aa54523f24feb9a7c19e569467a2c',
//   redirectUrl: 'spotifyapp://callback',
//   scopes: ['user-read-email', 'user-read-private', 'user-read-recently-played'],
//   serviceConfiguration: {
//     authorizationEndpoint: 'https://accounts.spotify.com/authorize',
//     tokenEndpoint: 'https://accounts.spotify.com/api/token',
//   },
//   usePKCE: true,
// };

// export const spotifyLogin = async ({navigation, dispatch}) => {
//   try {
//     console.log('Trying to login with Spotify...');
//     const result = await authorize(config);
//     console.log('Access Token:', result.accessToken);
//     dispatch(setAccessToken(result.accessToken));
//     navigation.navigate('BottomTabs', {screen: 'Home'});

//     return result;
//   } catch (error) {
//     console.log('Login error', error);
//   }
// };

export const fetchRecentlyPlayed = async ({accessToken}) => {
  console.log("Fetch Access Token",accessToken);
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/recently-played',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const allTracks = response.data.items.map(item => ({
      id: item.track.id,
      name: item.track.name,
      image: item.track.album.images[1]?.url,
      width: item.track.album.images[1]?.width,
      height: item.track.album.images[1]?.height,
    }));

      const uniqueTracksMap = new Map();
      allTracks.forEach(track => {
        if (!uniqueTracksMap.has(track.id)) {
          uniqueTracksMap.set(track.id, track);
        }
      });
      
      const uniqueTracks = Array.from(uniqueTracksMap.values());
       console.log('Recently Played Tracks:', response.data);
    return  uniqueTracks;
  } catch (error) {
    if (error.response) {
      console.error(
        'Spotify API error:',
        error.response.status,
        error.response.data,
      );
    } else {
      console.error('Axios error:', error.message);
    }
  }
};
