---
id: flutter_media_metadata
title: flutter_media_metadata
image: https://user-images.githubusercontent.com/28951144/151707391-a59bd40a-5303-4dd8-af35-ff8918894dbb.png
description: A Flutter plugin to read 🔖 metadata of 🎵 media files.
hide_title: true
---

import DocsHeader from "../src/components/DocsHeader";

# flutter_media_metadata

**A Flutter plugin to read 🔖 metadata of 🎵 media files.**

<DocsHeader repository="alexmercerind/flutter_media_metadata" type="pub.dev" />

## Install

Mention in your `pubspec.yaml`.

```yaml
dependencies:
  ...
  flutter_media_metadata: ^1.0.0
```

<img width="360" src="https://user-images.githubusercontent.com/28951144/151707391-a59bd40a-5303-4dd8-af35-ff8918894dbb.png"  />

_Example app running on Windows._

## Tutorial

### Windows, Linux, macOS, Android & iOS

```dart
final metadata = await MetadataRetriever.fromFile(File(filePath));

String? trackName = metadata.trackName;
List<String>? trackArtistNames = metadata.trackArtistNames;
String? albumName = metadata.albumName;
String? albumArtistName = metadata.albumArtistName;
int? trackNumber = metadata.trackNumber;
int? albumLength = metadata.albumLength;
int? year = metadata.year;
String? genre = metadata.genre;
String? authorName = metadata.authorName;
String? writerName = metadata.writerName;
int? discNumber = metadata.discNumber;
String? mimeType = metadata.mimeType;
int? trackDuration = metadata.trackDuration;
int? bitrate = metadata.bitrate;
Uint8List? albumArt = metadata.albumArt;
```

### Web

For using the plugin on web, add following line to your `index.html`.

```diff
   <link rel="manifest" href="manifest.json">
 </head>
 <body>
+  <script type="text/javascript" src="https://unpkg.com/mediainfo.js/dist/mediainfo.min.js"></script>
   <!-- This script installs service_worker.js to provide PWA functionality to
        application. For more information, see:
        https://developers.google.com/web/fundamentals/primers/service-workers -->
   <script>
     var serviceWorkerVersion = null;
     var scriptLoaded = false;
```

And use `MetadataRetriever.fromBytes` instead of `MetadataRetriever.fromFile`.

## Platforms

| Platform | Status |
| -------- | ------ |
| Windows  | ✔️     |
| Linux    | ✔️     |
| Android  | ✔️     |
| Web      | ✔️     |
| MacOS    | ✔️     |
| iOS      | ✔️     |

<img width="360" src="https://user-images.githubusercontent.com/28951144/151707427-76d75f04-9efe-4b1d-80fb-fdeea73dad26.png" />

_Example app running on Web._

<img width="360" src="https://user-images.githubusercontent.com/28951144/151707526-319ca3f5-9849-4d57-8ea4-9595ee67e99c.png" />

_Example app running on Linux._

## License

This library & work under this repository is MIT licensed.

Copyright (c) 2021-2022 Hitesh Kumar Saini <saini123hitesh@gmail.com>
