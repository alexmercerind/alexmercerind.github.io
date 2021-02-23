import Head from 'next/head';
import AppBar from '../components/appbar';
import Profile from '../components/profile';
import Project from '../components/project';

const DEVELOPER = 'alexmercerind';
const NAME = 'Hitesh Kumar Saini';

export default function MainPage() {
  return <div>
    <AppBar title={DEVELOPER} subtitle={NAME} />
    <body>
      <Head>
        <title>Hitesh Kumar Saini (alexmercerind)</title>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500&display=swap' rel='stylesheet'></link>
      </Head>
      <Profile />
      <Project
      maintainer={DEVELOPER}
      repository={'harmonoid'}
      links = {{
        'Download': 'https://github.com/alexmercerind/harmonoid',
        'Discord Server': 'https://discord.gg/mRxH9zYkGy',
      }}
      images={[
        'harmonoid/0.png',
        'harmonoid/1.png',
        'harmonoid/2.png',
      ]}
      achievements={[
        'Sorts & updates music into albums, artists etc. on deletion or addition of music.',
        'Plays & shows files on the filesystem. Supports creating playlists.'
        'Reads media metadata & builds collection.',
        'Has native media notifications & queue management.',
        'Uses Flutter UI toolkit.',
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
    <footer>
      This website is made with <a href='https://nextjs.org' target='__blank'>Next.js</a> by <a href='https://github.com/alexmercerind' target='__blank'>alexmercerind</a>.
    </footer>
  </div>
}
