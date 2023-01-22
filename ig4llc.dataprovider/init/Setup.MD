PS C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider> firebase login
Already logged in as ira.gordon.iv@gmail.com
PS C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your 
choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, Hosting: Set up GitHub Ac
tion deploys, Emulators: Set up local emulators for Firebase products

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Add Firebase to an existing Google Cloud Platform project
? Select the Google Cloud Platform project you would like to add Firebase: icode4food-153000 (iCode4Food)
✔ Adding Firebase resources to Google Cloud Platform project

=== Your Firebase project is ready! ===

Project information:
   - Project ID: icode4food-153000
   - Project Name: iCode4Food

Firebase console is available at
https://console.firebase.google.com/project/icode4food-153000/overview
i  Using project icode4food-153000 (iCode4Food)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
+  Wrote public/index.html

i  Didn't detect a .git folder. Assuming C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider is the project root.
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=360567477&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

+  Success! Logged into GitHub as baushaug

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) baushaug/firebase

+  Created service account github-action-592085321 with Firebase Hosting admin permissions.
+  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_ICODE4FOOD_153000.
i  You can manage your secrets at https://github.com/baushaug/firebase/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? (npm ci && npm run build) 
? What script should be run before every deploy? npm ci && npm run build

+  Created workflow file C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider\.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? development

+  Created workflow file C:\Users\irago\source\repos\Firebase\ig4llc.dataprovider\.github/workflows/firebase-hosting-merge.yml 

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authenti
cation Emulator, Functions Emulator, Database Emulator, Hosting Emulator, Storage Emulator
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the database emulator? 9000
? Which port do you want to use for the hosting emulator? 5000
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 
? Would you like to download the emulators now? Yes
i  database: downloading firebase-database-emulator-v4.11.0.jar...
Progress: ====================================================================================================> (100% of 35MB) 
i  storage: downloading cloud-storage-rules-runtime-v1.1.3.jar...
Progress: ====================================================================================================> (100% of 53MB) 
i  ui: downloading ui-v1.11.2.zip...

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!
Progress: -------------------------------------------------------------------------------------------------------- (0% of 4MB)