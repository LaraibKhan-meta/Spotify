import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    url: 'https://dl.prokerala.com/downloads/ringtones/files/mp3/john-cena-the-time-is-now-mymp3song-com-19031.mp3',
    title: 'John Cena',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00',
    artwork: 'dfgdfgdffsg',
    duration: 55,
  },
  {
    id: 2,
    url: require('../src/assets/songs/squadGame.mp3'),
    title: 'Squid Game - Mingle Game mp3',
    artist: 'deadmau5',
    artwork: 'ssgsgdsgds',
    duration: 55,
  },
  {
    id: 3,
    url: require('../src/assets/songs/GetLow.mp3'),
    title: 'DJ Snake And Dillon Francis x O2Srk.mp3',
    artist: 'deadmau5',
    artwork: 'file:///storage/sdcard0/Downloads/cover.png',
    duration: 233,
  },
];

const TrackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setAllTrackMusic: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAllTrackMusic } = TrackSlice.actions;
export default TrackSlice.reducer;
