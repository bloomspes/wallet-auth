# wallet-auth

https://wallet-auth.web.app

  ## Task overview
  - OAuth sign in
  - Wallet-based sign up
  - Single identity for multi-wallet
  - Email-based user linking
  - Wallet-based user linking

  ## Firebase Integration
  
  [Getting Started](https://firebase.google.com/docs/web/setup)

  ### Add Firebase to your web app  
  firebase를 로컬 환경에 설치하고, login oauth를 web app에서 확인할 수 있는 도구를 설치한다.
  
  ```
  npm init -y

  npm install firebase

  npm install -g firebase-tools
  ```

  firebase CLI를 설치했다면, 다음 과정에 y로 대답한다.
  
  ```
  ? Allow Firebase to collect CLI usage and error reporting information? (Y/n) 

  > Y
  
  이 후, Google 계정과 account connect 한다.

  터미널에 아래의 문구가 뜬다면 계정 연동에 성공한 것이다.

  Waiting for authentication...

  ✔  Success! Logged in as (계정명) 
  ```

  ### Init Firebase Project

  ```
  $ firebase init

  ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)

  질문에 다음의 선택지를 고른다.
  
  > ◯ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys 

  Setup project

  > Create a new project
  > Unique project ID
  > Project Name

  Hosting Setup
  
  ? What do you want to use as your public directory? public

  ? Configure as a single-page app (rewrite all urls to /index.html)? y

  ? Set up automatic builds and deploys with GitHub? N
  ```
  ### Deploy to Firebase Hosting

  ```
  firebase deploy
  ```
  ## Install and Start Ganache
  
  테스트 서버를 가동하기 위해 Ganache를 설치한다.
  
  ```
  npm install -g ganache-cli && ganache-cli
  ```
  아래와 같은 결과가 나오면 서버가 돌고 있다는 증거이다.

  ```
  Gas Price
  ==================
  20000000000

  Gas Limit
  ==================
  6721975

  Call Gas Limit
  ==================
  9007199254740991

  Listening on 127.0.0.1:8545
  ```

  ## Install Metamask Provider

  ```
  npm install @metamask/detect-provider
  ```
  ## Web 2.0 OAuth Login
  ### Front view
  - React.js
  
  ### Backend
  - Firebase SDK
  - Metamask API

  ### Assumption (작성 중)
  - A user MAY have one account or included google account.
  - A user MAY sign in through MetaMask Wallet.
  - A user MUST be able to see Wallet List.
  - A user MAY connect with MetaMask Wallets.
  - A user MAY delete MetaMask wallet from Wallet List.
  - A user MUST have single identity for multi-wallet.
  - An account May be connected with MetaMask's wallet. 
  - An account May be integrated if Email ID and Google email ID are same each other.


## Setup Project (Web2.0 Sign in)

우선, firebase로 통합 로그인을 해야하므로 firebase SDK를 사용해서 로그인을 구현하기로 했다.

### Install Firebase UI Kit

```
npm install firebase firebaseui --save
```

Email Provider, Google Provider 정보를 가져온다.

```
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'

const firebase = require('firebase');
const firebaseui = require('firebaseui');
```

### 프론트 환경 구축

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

### Install React.js

페이지 라우팅으로 사용할 프레임워크는 React.js를 사용하기로 결정했다.  

```
npm install react react-dom

npm install react-router

npm install react-router-dom
```
### Security

중요한 키는 깃에 올라가면 안되므로, 아래의 라이브러리를 설치한다.

```
npm install dotenv
```



