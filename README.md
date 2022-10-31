## Fitmatch UI

**Used Tech Stack**

1.  Node JS v16.18
2.  Vue JS v3
3.  Bootstrap 5.2
4.  AXIOS
5.  ScSS

**How to run the app?**

**STEP 1**: Clone the application from git

Open the terminal and set the directory to a preferred location and paste the command 

```plaintext
git clone https://github.com/dev-hemkanth/fitmatch-ui.git 
```

**STEP 2:** Set Node Environment. Install node to version 16.18.

_**Linux / Mac**_

```plaintext
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

For more information, check the [official doc](https://github.com/nvm-sh/nvm).

_**Windows**_

Download the .exec file from the [git official repository](https://github.com/coreybutler/nvm-windows) and execute the file by double click.

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/1a6a1d20c39437554bee94e2171ca7f832fd965b0c16f3cd.png)

After successful installation of nvm. In the application directory, run **nvm use 16.18**. If nvm shows an error not installed, then run **nvm install 16.18** to install the node version of 16.18 and rerun the command **nvm use 16.18.**

**STEP 3** (optional)**:** For package manager, npm or yarn can be used. To install yarn, run **npm i -g yarn** in the terminal. For more information about yarn check [this link](https://yarnpkg.com/).

**STEP 4:** Install dependencies by running the command **yarn install** or **npm install** in the terminal.

**STEP 5:** On successful installation of packages. To build an application, run **yarn run build** or **npm run build** in the terminal. After successfully building the _**dist**_ folder created with minified src code and index.html to point out for deployment.

_(Optional) - to run the app locally run **yarn run serve** or **npm run serve**_