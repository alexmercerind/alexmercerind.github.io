
import {Component} from 'react';
import Head from 'next/head';
import Project from '../components/project';

const DEVELOPER = 'alexmercerind';


export default class MainPage extends Component {
  render() {
    return <body>
      <Head>
        <title>Hitesh Kumar Saini (alexmercerind)</title>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500&display=swap' rel='stylesheet'></link>
      </Head>
      <Project
      maintainer={DEVELOPER}
      repository={'harmonoid'}
      links = {{
        'Website': 'https://harmonoid.github.io',
        'Downloads': 'https://harmonoid.github.io',
        'Discord Server': 'https://discord.gg/mRxH9zYkGy',
      }}
      images={[
        'harmonoid/0.png',
        'harmonoid/1.png',
        'harmonoid/2.png',
      ]}
      achievements={[
        'Sorts & updates music in albums, artists, playlists etc. on filesystem while adding or deleting songs based on media tags.',
        'Has queue based downloads & supports native notifications.',
        'Uses Flutter UI toolkit.',
        'Uses Python backend made in FastAPI & deployed on Heroku.',
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'youtube-search-python'}
      links = {{
        'PyPI': 'https://github.com/alexmercerind',
      }}
      images={[
        'youtube-search-python/0.png',
      ]}
      achievements={[
        'Over 500k downloads on PyPI.',
        'Searches & gets information from YouTube without official rate limiting API.',
        'Has asynchronous support.',
        'Added additional features other than searching after requests from dependents. First project to reach 100 stars.'
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'flutter_audio_desktop'}
      links = {{
        'pub.dev': 'https://pub.dev/packages/flutter_audio_desktop',
        'miniaudio': 'https://github.com/mackron/miniaudio',
        'Medium Article': 'https://medium.com/flutter/announcing-flutter-windows-alpha-33982cd0f433',
      }}
      images={[
        'flutter_audio_desktop/0.png',
      ]}
      achievements={[
        'Got mentioned in the official Flutter medium article about Flutter for Windows.',
        'Very precisely implements material design & animation guidelines.',
        'One of the very first plugins ever made for Flutter Windows.',
        'Uses miniaudio in C++ for low level cross platform audio playback APIs.'
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'media_metadata_retriever'}
      links = {{
        'pub.dev': 'https://pub.dev/packages/media_metadata_retriever',
      }}
      achievements={[
        'Gets metadata of media files from filesystem for Flutter apps.',
        'Works on Linux & Windows.',
        'Uses MediaMetadataRetriever on Android & lib-mediainfo on Linux.'
      ]}
      />
    </body>
  }
}