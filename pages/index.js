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
      repository={'dart_vlc'}
      links = {{
        'pub.dev': 'https://pub.dev/packages/dart_vlc',
        'videoLAN retweet': 'https://twitter.com/videolan/status/1371774126080286722',
        'libVLC++': 'https://github.com/videolan/libvlcpp',
      }}
      images={[
        'dart_vlc/0.png',
        'dart_vlc/1.png',
      ]}
      achievements={[
        "World's first media playback library for Flutter and Dart apps on Windows & Linux.",
        'Has C++ based wrapper around libVLC++ & libVLC.',
        'Uses Platform Channels for Flutter & FFI for plain Dart apps.',
        'Retweed by official videoLAN Twitter account.',
        'Sends RAW video frame buffer to render using RawImage & show a video inside Widget tree.',
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'harmonoid'}
      links = {{
        'Download': 'https://github.com/alexmercerind/harmonoid',
        'Google Play Store': 'https://play.google.com/store/apps/details?id=com.alexmercerind.harmonoid',
      }}
      images={[
        'harmonoid/0.png',
        'harmonoid/1.png',
        'harmonoid/2.png',
      ]}
      achievements={[
        'Indexes, arranges, sorts & updates music into albums, artists etc. on deletion or addition of music, based on metadata tags.',
        'Plays & shows files on the filesystem. Supports creating playlists.',
        'Uses Provider state management.',
        'Has native media notifications.',
        'Uses Flutter UI toolkit.',
        'Has FastAPI based backend.',
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
        'Over 2M downloads on PyPI.',
        'Searches & gets information from YouTube without official rate limiting API.',
        'Has asynchronous support.',
        'Added additional features other than searching after requests from dependents. First project to reach 100 stars.',
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'flutter_audio_desktop'}
      links = {{
        'dart_vlc': 'https://pub.dev/packages/dart_vlc',
        'miniaudio': 'https://github.com/mackron/miniaudio',
        'Medium Article': 'https://medium.com/flutter/announcing-flutter-windows-alpha-33982cd0f433',
      }}
      images={[
        'flutter_audio_desktop/0.png',
      ]}
      achievements={[
        'Superseded by dart_vlc, based on libVLC.',
        'Got mentioned in the official Flutter medium article about Flutter for Windows.',
        'One of the very first plugins ever made for Flutter Windows.',
        'Uses miniaudio in C++ for low level cross platform audio playback APIs.'
      ]}
      />
      <Project
      maintainer={DEVELOPER}
      repository={'flutter_media_metadata'}
      links = {{
        'pub.dev': 'https://pub.dev/packages/flutter_media_metadata',
      }}
      images={[
        'flutter_media_metadata/0.png',
        'flutter_media_metadata/1.png',
      ]}
      achievements={[
        'Gets metadata of media files from filesystem for Flutter apps.',
        'Works on Linux & Android.',
        'Uses MediaMetadataRetriever on Android & lib-mediainfo on Linux.'
      ]}
      />
    </body>
    <footer>
      This website is made with <a href='https://nextjs.org' target='__blank'>Next.js</a> by <a href='https://github.com/alexmercerind' target='__blank'>alexmercerind</a>.
    </footer>
  </div>
}
