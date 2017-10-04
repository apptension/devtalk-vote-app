#  Devtalk Vote App
An app allowing Devtalk attendees to vote for presented projects.  

## :arrow_up: How to Setup

**Step 1:** `git clone` this repo

**Step 2:** `cd` to the cloned repo

**Step 3:** Install node dependencies with:
```bash
yarn
```

**Step 4:** Install ruby dependencies with:
```bash
bundle install
```

**Step 4:** Install iOS certificates with:
```bash
bundle exec fastlane match develop --readonly
```

## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`
