markdown
# Ubuhanzi Connect

A creative-skills, mentorship and opportunity platform for Rwandan youth (15–30).
Prototype built for the ALU Software Engineering summative, based on the Ubuhanzi Connect SRS.

*Live site:* PASTE-YOUR-LIVE-URL-HERE
*SRS document:* PASTE-YOUR-SRS-LINK-HERE

## Features in this prototype

| SRS requirement | What works |
|---|---|
| FR 1.1 / 1.2 | Sign up as Youth, Mentor or Organization, with discipline, age range and location saved |
| NFR 1 | Email/password login; dashboard is only visible when logged in; only youth users can request mentors or apply |
| FR 2.1 | Browse learning pathways and filter by discipline |
| FR 2.2 | "Recommended for you" pathway based on the user's discipline |
| FR 3.1 | Request mentorship from verified mentors (saved to Firestore) |
| FR 4.2 | Apply to gigs, showcases and grants (saved to Firestore) |
| FR 5.1 | Partner training programs listed |
| Business rule | Every opportunity shows its compensation (Paid / Stipend / Unpaid) |
| SRS 3.1 | Three main tabs: Learn, Connect, Opportunities |

*Not yet built (planned for later sprints):* admin verification and moderation (FR 7), direct messaging (FR 6), mentors accepting/declining requests (FR 3.2), organizations posting opportunities (FR 4.1), and the Kinyarwanda language toggle. Pathways, mentors and opportunities currently use sample data.

## Tech stack

- HTML, CSS, JavaScript (no framework, no build step)
- Firebase Authentication (email/password)
- Cloud Firestore (users, mentorshipRequests, applications)
- Hosted on PASTE-HOSTING-HERE (e.g. GitHub Pages)

## How to run it on your computer

### 1. Install the tools
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- In VS Code, open Extensions (Ctrl + Shift + X), search *Live Server* (by Ritwick Dey) and click *Install*

### 2. Download the code
Open a terminal and run:
bash
git clone https://github.com/kendra-shenge/ubuhanzi.git
cd ubuhanzi


### 3. Open it in VS Code
File → Open Folder → choose the ubuhanzi folder.

### 4. Run it
Right-click index.html → *Open with Live Server*. The site opens at http://127.0.0.1:5500.
The project is already connected to a Firebase project, so sign up and login work straight away.
### 5. Try it
1. Click *Create an account, choose **Youth*, pick a discipline and sign up.
2. You land on the dashboard. Try the discipline filter in *Learn*.
3. In *Connect, click **Request mentorship*.
4. In *Opportunities, click **Apply*.
5. Click *Log out*.

## (Optional) Use your own Firebase project
1. Go to https://console.firebase.google.com and click *Add project*.
2. *Build → Authentication → Get started → Email/Password → Enable*.
3. *Build → Firestore Database → Create database, then in **Rules* paste:
   
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   
4. *Project settings → Your apps → Web (</>)*, register an app and copy the firebaseConfig values.
5. Paste them into js/firebase-config.js.
6. If you deploy, add your domain under *Authentication → Settings → Authorized domains*.

## Project structure

index.html        Landing page
signup.html       Sign up (role, discipline, age range, location)
login.html        Log in
dashboard.html    Learn / Connect / Opportunities tabs
css/style.css     Styles
js/firebase-config.js  Firebase connection
js/auth.js        Sign up and login logic
js/dashboard.js   Dashboard logic, requests and applications


## Known challenges
- The SRS plans a PostgreSQL backend; this prototype uses Firebase Firestore so it could be built and deployed quickly as a pilot.
- Content is sample data until partner organizations are onboarded.