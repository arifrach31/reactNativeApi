# reactNativeApi

1. Git clone https://github.com/arifrach31/reactNativeApi.git 
2. Npm install 
3. react-native link
4. open directory node_modules/rn-host-detect/index.js
5. bellow module.exports = function (hostname) {
6. change : 
```javascript
hostname !== 'localhost' && hostname !== '127.0.0.1'
```
to
```javascript
hostname !== '10.0.3.2' && hostname !== '127.0.0.1'
```
![alt text](https://image.ibb.co/kQCFMy/photo6242119208615913439.jpg)

7. save and exit
8. react-native run-android

> note : On Android emulator, the IP of host is `10.0.2.2` (Genymotion: 10.0.3.2)
