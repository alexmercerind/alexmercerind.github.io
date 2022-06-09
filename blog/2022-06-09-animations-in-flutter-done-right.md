---
slug: animations-in-flutter-done-right
authors: alexmercerind
title: Animations in Flutter done right
tags: [flutter, animations, dart]
---

Animations on things drawn on screen & sense of motion that drives the attention of users is really important for a good user experience.

<!--truncate-->

Since [Flutter](https://flutter.dev/) draws everything pixel-by-pixel, it offers a lot of ways by which a really-really rich experience can be achieved either it be animations, painting something entirely custom or customization options available to existing `Widget`s.

## The 4 Ways

To me, there are four ways in which animations can be achieved in Flutter. They are:

The first two fall in the category of implicit animations. The third & the last one are explicit animations.

:::tip
**In a common & simple case, the first two will be enough for your purpose !!!**
:::

| Animation Type                                                                                                                                                                                                                                                                                                                                                                                                          | When To Use                                                                                                                                                                                                                                                                                                                          | Possible Cases                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AnimatedXYZ` `Widget`s e.g. [`AnimatedContainer`](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html), [`AnimatedOpacity`](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html), [`AnimatedScale`](https://api.flutter.dev/flutter/widgets/AnimatedScale-class.html), [`AnimatedRotation`](https://api.flutter.dev/flutter/widgets/AnimatedRotation-class.html) etc.                  | 1. Your animation is simple & operates only between discrete values e.g. from one value to another & then another.<br/>2. You don't want to listen the current animation position / percentage.<br/>3. There is no need of pausing / playing the animation.                                                                          | 1. Changing height of a `Container` from `32.0` to `156.0` with given duration & curve.<br/> 2. Increasing a scale of something upon tap/hover.<br/>3. Changing color to another color.        |
| [`TweenAnimationBuilder`](https://api.flutter.dev/flutter/widgets/TweenAnimationBuilder-class.html)                                                                                                                                                                                                                                                                                                                     | 1. You want to start your animation when your `Widget` is mounted.<br/>2. There is no requirement of listening to current animation position / percentage.<br/>3. There is no need of pausing / playing the animation.<br/>4. Existing `AnimatedXYZ` in Flutter aren't enough for your purpose.<br/>4. Works inside StatelessWidget. | 1. Something that needs to be animated as soon as drawn to screen.<br/>2. Animating `Color` of something, see [`ColorTween`](https://api.flutter.dev/flutter/animation/ColorTween-class.html). |
| [`AnimationController`](https://api.flutter.dev/flutter/animation/AnimationController-class.html) + `XYZTransition` `Widget`s e.g. [`SlideTransition`](https://api.flutter.dev/flutter/widgets/SlideTransition-class.html), [`RotationTransition`](https://api.flutter.dev/flutter/widgets/RotationTransition-class.html), [`ScaleTransition`](https://api.flutter.dev/flutter/widgets/ScaleTransition-class.html) etc. | 1. You want to have strong control over the animation<br/>2. You need capablity of playing / pausing the animation<br/>3.You need access to current animation progress / percentage e.g. controlling another animation.<br/>4. More complex stuff / configuration in your animation.                                                 | Something very unique or some animated UI component with a lot of stuff going on in it.                                                                                                        |
| [`AnimationController`](https://api.flutter.dev/flutter/animation/AnimationController-class.html) + `AnimatedBuilder` / `AnimatedWidget`                                                                                                                                                                                                                                                                                | 1. You want to start your animation when your `Widget` is mounted.<br/>2. There is no requirement of listening to current animation position / percentage.<br/>3. There is no need of pausing / playing the animation.<br/>4. Existing `AnimatedXYZ` in Flutter aren't enough for your purpose.                                      | Likely, noone of the above options fit your needs & you wish to animate any arbitrary Flutter property of a `Widget` which isn't present as `AnimatedXYZ` or `XYZTransition` in Flutter.       |

## Show Me Code

### AnimatedContainer & friends

Here, you just need to use any of [`AnimatedContainer`](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html), [`AnimatedOpacity`](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html), [`AnimatedScale`](https://api.flutter.dev/flutter/widgets/AnimatedScale-class.html), [`AnimatedRotation`](https://api.flutter.dev/flutter/widgets/AnimatedRotation-class.html) etc. Find more of these with the help of intellisense in your code editor or on [flutter.dev](https://flutter.dev/docs).

:::tip

If you know how to use `setState`, you already know how this works.

:::

Example below shows `AnimatedRotation`, `AnimatedScale`, `AnimatedContainer` & `AnimatedSlide`.

<video controls autoplay style={{"width": "auto"}} src={require('@site/static/img/animations-1.mp4').default}></video>

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
