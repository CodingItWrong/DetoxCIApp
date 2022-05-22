# My Project

Describe your project here.

## Requirements

- [Node](https://nodejs.org)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)
- [Ruby](https://www.ruby-lang.org/)
- [Cocoapods](https://cocoapods.org/)
- [Android Studio](https://developer.android.com/studio) and/or [Xcode](https://developer.apple.com/xcode/)

## Installation

- Clone the repo
- Run `yarn install`
- Run `cd ios && pod install`

Dependencies are locked with `yarn.lock`; please use `yarn` rather than `npm` for installing.

## Running

- In one terminal, run `yarn start`
- In another terminal, run `yarn android` or `yarn ios`

## Unit Tests

- Run `yarn test`

## E2E Tests

- Run `detox build -c ios` (only needs to be run once per native code changes)
- Run `detox test -c ios`
