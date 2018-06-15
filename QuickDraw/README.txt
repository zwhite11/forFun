QuickDraw

Included are all the files necessary to run the QuickDraw Android app.

QuickDraw is a two player game in which players compete on the same screen to test their reflexes. When they players are alerted, they must try to tap their button faster than their opponent. If a player goes too early they lose. 

The app can be run on an emulator or an actual device.  It was created with Android Studio version 2.3.2. The contents of the build.gradle file are below.  QuickMaths was successfully run in Android Studio with Nexus 5x emulator (API 24).

apply plugin: 'com.android.application'

android {
    compileSdkVersion 25
    buildToolsVersion "25.0.3"
    defaultConfig {
        applicationId "white.zac.quickdraw"
        minSdkVersion 19
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    compile 'com.android.support:appcompat-v7:25.3.1'
    compile 'com.android.support.constraint:constraint-layout:1.0.0-alpha7'
    testCompile 'junit:junit:4.12'
}
