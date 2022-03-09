---
id: windows_taskbar
title: windows_taskbar
image: https://github.com/alexmercerind/windows_taskbar/blob/assets/bMebejv57F.gif?raw=true
description: Flutter plugin serving utilities related to Windows taskbar.
hide_title: true
---

# windows_taskbar

Flutter plugin serving utilities related to Windows taskbar.

### Jump to the [Tutorial](#tutorial) 🏁

## Install

```yaml
dependencies:
  windows_taskbar: ^1.0.0
```

## Demo

Checkout the example Flutter application [here](https://github.com/alexmercerind/windows_taskbar/blob/master/example/lib/main.dart).

<img width="600" src='https://github.com/alexmercerind/windows_taskbar/blob/assets/bMebejv57F.gif?raw=true'></img>
<br />
<img width="600" src='https://github.com/alexmercerind/windows_taskbar/blob/assets/OdzgD1yqEO.gif?raw=true'></img>

## Tutorial

### Set thumbnail toolbar

:::tip
Don't forget to add the icons into your `pubspec.yaml`.
:::

![](https://docs.microsoft.com/en-us/windows/win32/shell/images/taskbar/thumbbar.png)

```dart
WindowsTaskbar.setThumbnailToolbar(
  [
  ThumbnailToolbarButton(
    ThumbnailToolbarAssetIcon('assets/camera.ico'),
      'Turn On Camera',
      () {},
    ),
    ThumbnailToolbarButton(
      ThumbnailToolbarAssetIcon('assets/microphone.ico'),
      'Mute',
      () {},
      mode: ThumbnailToolbarButtonMode.disabled | ThumbnailToolbarButtonMode.dismissionClick,
    ),
    ThumbnailToolbarButton(
      ThumbnailToolbarAssetIcon('assets/end_call.ico'),
      'Disconnect',
      () {},
    ),
  ],
);
```

### Remove thumbnail toolbar

```dart
WindowsTaskbar.resetThumbnailToolbar();
```

### Set progress mode

![](https://docs.microsoft.com/en-us/windows/win32/uxguide/images/winenv-taskbar-image10.png)

```dart
WindowsTaskbar.setProgressMode(TaskbarProgressMode.indeterminate);
```

### Set progress

![](https://docs.microsoft.com/en-us/windows/win32/uxguide/images/winenv-taskbar-image10.png)

```dart
WindowsTaskbar.setProgress(69, 100);
```

### Set thumbnail tooltip

```dart
WindowsTaskbar.setThumbnailTooltip('Awesome Flutter window.');
```

### Flash windows taskbar app icon

```dart
WindowsTaskbar.setFlashTaskbarAppIcon(
  mode: TaskbarFlashMode.all | TaskbarFlashMode.timernofg,
  timeout: const Duration(milliseconds: 500),
);
```

### Stop flashing windows taskbar app icon

```dart
WindowsTaskbar.resetFlashTaskbarAppIcon();
```

### Set overlay icon (a badge)

![](https://docs.microsoft.com/en-us/windows/win32/uxguide/images/winenv-taskbar-image15.png)

```dart
WindowsTaskbar.setOverlayIcon(
  ThumbnailToolbarAssetIcon('assets/red_slash.ico'),
  tooltip: 'Stop',
);
```

### Remove overlay icon (a badge)

```dart
WindowsTaskbar.resetOverlayIcon();
```

## License

Copyright © 2021 & 2022, Hitesh Kumar Saini <<saini123hitesh@gmail.com>>

This library & all the work in this repository is under MIT license that can be found in the LICENSE file.
