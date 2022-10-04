---
slug: animations-in-flutter-done-right
authors: alexmercerind
title: Animations in Flutter done right [Flutter 2 & 3]
tags: [flutter, animations, dart]
---

Animations are really important! It gives the sense of motion that drives the attention of users.

<!--truncate-->

Since [Flutter](https://flutter.dev/) draws everything pixel-by-pixel, it offers a lot of ways by which a really-really rich experience can be made.

## The 5 Ways

To me, there are five ways by which animations can be achieved in Flutter. They are:

The first two fall in the category of implicit animations. The third & the last one are explicit animations.

:::tip
**In a common & simple case, the first two will be enough for your purpose !!!**
:::

| Animation Type                                                                                                                                                                                                                                                                                                                                                                                                          | When To Use                                                                                                                                                                                                                                                                                                                              | Possible Cases                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AnimatedXYZ` `Widget`s e.g. [`AnimatedContainer`](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html), [`AnimatedOpacity`](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html), [`AnimatedScale`](https://api.flutter.dev/flutter/widgets/AnimatedScale-class.html), [`AnimatedRotation`](https://api.flutter.dev/flutter/widgets/AnimatedRotation-class.html) etc.                  | 1. Your animation is simple & operates only between discrete values e.g. from one value to another & then another.<br/>2. You don't want to listen the current animation position / percentage.<br/>3. There is no need of pausing / playing the animation.                                                                              | 1. Changing height of a `Container` from `32.0` to `156.0` with given duration & curve.<br/> 2. Increasing a scale of something upon tap/hover.<br/>3. Changing color to another color.                                                                                                                                     |
| [`TweenAnimationBuilder`](https://api.flutter.dev/flutter/widgets/TweenAnimationBuilder-class.html)                                                                                                                                                                                                                                                                                                                     | 1. You want to start your animation when your `Widget` is mounted.<br/>2. There is no requirement of listening to current animation position / percentage.<br/>3. There is no need of pausing / playing the animation.<br/>4. Existing `AnimatedXYZ` in Flutter aren't enough for your purpose.<br/>4. Works inside StatelessWidget.     | 1. Something that needs to be animated as soon as drawn to screen.<br/>2. Animating `Color` of something, see [`ColorTween`](https://api.flutter.dev/flutter/animation/ColorTween-class.html).                                                                                                                              |
| [`AnimationController`](https://api.flutter.dev/flutter/animation/AnimationController-class.html) + `XYZTransition` `Widget`s e.g. [`SlideTransition`](https://api.flutter.dev/flutter/widgets/SlideTransition-class.html), [`RotationTransition`](https://api.flutter.dev/flutter/widgets/RotationTransition-class.html), [`ScaleTransition`](https://api.flutter.dev/flutter/widgets/ScaleTransition-class.html) etc. | 1. You want to have strong control over the animation<br/>2. You need capablity of playing / pausing the animation<br/>3.You need access to current animation progress / percentage e.g. controlling another animation.<br/>4. More complex stuff / configuration in your animation.<br/>5. You possibly wanna repeat your animation upon completion (not mandatory). | Something very unique or some animated UI component with a lot of stuff going on in it.                                                                                                                                                                                                                                     |
| [`AnimationController`](https://api.flutter.dev/flutter/animation/AnimationController-class.html) + `AnimatedBuilder` / `AnimatedWidget`                                                                                                                                                                                                                                                                                | 1. You want to animate such UI property which is not already available as `XYZTransition` in Flutter.<br/>2. All same requirements as above one.                                                                                                                                                                                         | Likely, noone of the above options fit your needs & you wish to animate any arbitrary Flutter property of a `Widget` which isn't present as `AnimatedXYZ` or `XYZTransition` in Flutter.<br/>THOUGH, most options like scale, rotation, color, slide are already present. You should decide if you really want to use this. |
| [`Hero`](https://youtu.be/Be9UH1kXFDw) widget                                                                                                                                                                                                                                                                                | You need to animate an element between two screens as user navigates to the second screen from first one. This is very common & brings a nice experience to the navigation.                                                                                                                                                                                         | Most simple of all, just same `tag` to both `Hero` widgets wrapping the element you want to animate, one on the first screen & another on the screen you're navigating to. |

## Few Other Things

Two primary things that you'd generally define for any kind of animation are:

- The time that it takes to complete the animation. a.k.a `duration`.
- The curve (NOT the path, but how much percent of animation should be completed with respect to time at a given moment) that the animation should follow. a.k.a `curve`. See [THIS](https://api.flutter.dev/flutter/animation/Curves-class.html).

Other than this, we will be definitely providing the width / scale / rotation / color etc. values between which the animation should take place.

## Show Me Code

:::info

All the code snippets present here are complete & can be run just by copying & pasting a snippet entirely.

:::

### AnimatedContainer & friends

Here, you just need to use any of [`AnimatedContainer`](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html), [`AnimatedOpacity`](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html), [`AnimatedScale`](https://api.flutter.dev/flutter/widgets/AnimatedScale-class.html), [`AnimatedRotation`](https://api.flutter.dev/flutter/widgets/AnimatedRotation-class.html) etc. Find more of these with the help of intellisense in your code editor or on [flutter.dev](https://flutter.dev/docs).

:::tip

If you know how to use `setState`, you already know how this works.

:::

Example below shows `AnimatedRotation`, `AnimatedScale`, `AnimatedContainer` & `AnimatedSlide`.

<video controls autoplay style={{"max-width": "100%"}} src={require('@site/static/img/animations-1.mp4').default}></video>

```dart
import 'dart:math';

import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  double turns = 0.0;
  double scale = 1.0;
  Color color = Colors.blue;
  Offset offset = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('animations')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            height: 64.0,
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      turns += 1;
                    });
                  },
                  child: const Text('AnimatedRotation'),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      scale = scale == 1.0 ? 1.5 : 1.0;
                    });
                  },
                  child: const Text('AnimatedScale'),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      color = Color.fromARGB(
                        255,
                        Random().nextInt(256),
                        Random().nextInt(256),
                        Random().nextInt(256),
                      );
                    });
                  },
                  child: const Text('AnimatedContainer'),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      offset = offset == Offset.zero
                          ? const Offset(1.0, 1.0)
                          : Offset.zero;
                    });
                  },
                  child: const Text('AnimatedSlide'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: AnimatedSlide(
                offset: offset,
                duration: const Duration(milliseconds: 800),
                child: AnimatedScale(
                  scale: scale,
                  duration: const Duration(milliseconds: 800),
                  child: AnimatedRotation(
                    turns: turns,
                    duration: const Duration(milliseconds: 800),
                    // Animate any properties on the AnimatedContainer.
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 800),
                      curve: Curves.easeInOut,
                      height: 96.0,
                      width: 96.0,
                      color: color,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### TweenAnimationBuilder

Takes a [`Tween`](https://api.flutter.dev/flutter/animation/Tween-class.html) and a [`Widget`](https://api.flutter.dev/flutter/widgets/Widget-class.html) and animates the [`Widget`](https://api.flutter.dev/flutter/widgets/Widget-class.html) according to the [`Tween`](https://api.flutter.dev/flutter/animation/Tween-class.html) you provide. [`Tween`](https://api.flutter.dev/flutter/animation/Tween-class.html) actually defines a range of values defined by a `begin` and an `end`. These values may be `double` or even `Color`.

`TweenAnimationBuilder` automatically animates on mount & whenever the `Tween` changes due to `setState` etc.

<video controls autoplay style={{"max-width": "100%"}} src={require('@site/static/img/animations-2.mp4').default}></video>

:::tip

Notice how animation is automatically played on mount & changing the `Tween` causes the animation to continue from that point to new value.

:::

Notice the large number of methods & properties that are available to highly customize the animation.

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  double end = 1.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('animations')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            height: 64.0,
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      end = end == 0.0 ? 1.0 : 0.0;
                    });
                  },
                  child: Text('Tween<double>.end = ${end == 0.0 ? 1.0 : 0.0}'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: TweenAnimationBuilder<double>(
                tween: Tween<double>(begin: 0.0, end: end),
                duration: const Duration(milliseconds: 400),
                builder: (context, value, child) => Transform.scale(
                  scale: value,
                  child: Container(
                    height: 256.0,
                    width: 256.0,
                    alignment: Alignment.center,
                    color: Colors.blue,
                    child: child,
                  ),
                ),
                // Widget passed as child will not be redrawn when the animation is updated.
                child: const Text(
                  'This text is not being redrawn.',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### AnimationController & XYZTransition Widgets

Existence of an `AnimationController` itself gives a lot of configurable options & other features.

:::warning

For using `AnimationController` in your `Widget`, you need to use `TickerProviderStateMixin` or `SingleTickerProviderStateMixin` (if there's only one `AnimationController` animation).

e.g.

**From:**

```dart
class _MyHomePageState extends State<MyHomePage> {
```

**To:**

```dart
class _MyHomePageState extends State<MyHomePage> with SingleTickerProviderStateMixin {
```

:::

<video controls autoplay style={{"max-width": "100%"}} src={require('@site/static/img/animations-3.mp4').default}></video>

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  late AnimationController animationController;

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
      vsync: this,
      lowerBound: 0.0,
      upperBound: 2.2,
      duration: const Duration(seconds: 1),
      reverseDuration: const Duration(seconds: 1),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('animations')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            height: 64.0,
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    animationController.forward();
                  },
                  child: const Text('Forward'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.reverse();
                  },
                  child: const Text('Reverse'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.stop();
                  },
                  child: const Text('Stop'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.reset();
                  },
                  child: const Text('Reset'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: RotationTransition(
                turns: animationController,
                child: Container(
                  height: 96.0,
                  width: 96.0,
                  color: Colors.red,
                ),
              ),
            ),
          ),
          // Just for demo.
          AnimationControllerStateViewer(
            animationController: animationController,
          ),
        ],
      ),
    );
  }
}

/// Just to show the available properties in the [AnimationController] class.

class AnimationControllerStateViewer extends StatefulWidget {
  final AnimationController animationController;
  const AnimationControllerStateViewer({
    Key? key,
    required this.animationController,
  }) : super(key: key);

  @override
  AnimationControllerStateViewerState createState() =>
      AnimationControllerStateViewerState();
}

class AnimationControllerStateViewerState
    extends State<AnimationControllerStateViewer> {
  @override
  void initState() {
    super.initState();
    // Redraw this widget to show updated properties.
    widget.animationController.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12.0),
      width: double.infinity,
      height: 156.0,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'animationController.isAnimating: ${widget.animationController.isAnimating}',
          ),
          Text(
            'animationController.isCompleted: ${widget.animationController.isCompleted}',
          ),
          Text(
            'animationController.isDismissed: ${widget.animationController.isDismissed}',
          ),
          Text(
            'animationController.status: ${widget.animationController.status}',
          ),
          Text(
            'animationController.value: ${widget.animationController.value}',
          ),
          Text(
            'animationController.velocity: ${widget.animationController.velocity}',
          ),
        ],
      ),
    );
  }
}
```

:::tip

If you noticed, there's actually no `curve` argument in `AnimationController`. You need to use [`CurvedAnimation`](https://api.flutter.dev/flutter/animation/CurvedAnimation-class.html) together.

```dart
late AnimationController animationController;
late Animation<double> animation;

@override
void initState() {
  super.initState();
  animationController = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 1),
    reverseDuration: const Duration(seconds: 1),
  );
  animation = Tween<double>(begin: 0.0, end: 2.0).animate(
    CurvedAnimation(
      curve: Curves.easeInOut,
      reverseCurve: Curves.easeInCirc,
      parent: animationController,
    ),
  );
}
```

In above example, just use `CurvedAnimation` with `Tween<T>.animate` and then pass `animation` as the `turns` in `RotationTransition` instead of `animationController` itself.

:::

### AnimationController & AnimatedBuilder / AnimatedWidget

This should be only used when you wish to animate a Flutter `Widget` property which is not already present as `XYZTransition` in the Flutter framework.

**Here, I'll be animating `fontSize` of a `Text`.**

Though, it would've been better to use `ScaleTransition` instead!

<video controls autoplay style={{"max-width": "100%"}} src={require('@site/static/img/animations-4.mp4').default}></video>

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  late AnimationController animationController;

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
      vsync: this,
      lowerBound: 16.0,
      upperBound: 24.0,
      duration: const Duration(seconds: 1),
      reverseDuration: const Duration(seconds: 1),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('animations')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            height: 64.0,
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    animationController.forward();
                  },
                  child: const Text('Forward'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.reverse();
                  },
                  child: const Text('Reverse'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.stop();
                  },
                  child: const Text('Stop'),
                ),
                ElevatedButton(
                  onPressed: () {
                    animationController.reset();
                  },
                  child: const Text('Reset'),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: AnimatedBuilder(
                animation: animationController,
                builder: (context, child) => Text(
                  'Well, this is a text.',
                  style: TextStyle(
                    fontSize: animationController.value,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ),
          ),
          // Just for demo.
        ],
      ),
    );
  }
}
```

### End Notes

Even though, the examples shown above are quite simple, they show most of the things which are available to animate a Flutter `Widget` in your own way.

A lot of animations can be combined together to create a complex animation. A listener can be added to `AnimationController` to listen to various events & possibly alter the curve, duration or any other property of animation in the middle of animation itself etc. Endless possibilities are there!

Few of the properties were shown in the [AnimationController & XYZTransition Widgets](#animationcontroller--xyztransition-widgets) video.

So, these are my tips on adding animations in a Flutter app.
