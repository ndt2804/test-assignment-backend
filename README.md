## Getting Started

## Server deploy FREE, if you cant send api submmit form, please wait server wake up after 10-15 minute? 
If still not working please email me nduytan.dev@gmail.com



First, install package dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

WARNING
if you use nodejs > 20 then you don't have to modify anything ? but if you use <20 then you have to request to download additional nodemon and dotenv libraries for dev environment
```bash
npm install nodemon dotenv -D
# or
yarn add  nodemon dotenv -D
```
ENVIRONMENT 
```bash
PORT = port server chạy
DATABASE_URL="mysql://User:Password@Host:PortMySQL/DatabaseName" || server mysql của bạn
CORS_ORIGIN = url frontend của bạn
```


. API Endpoints

The backend exposes the following API endpoints:
```bash
    POST /api/v1/contact-us: Submit a contact form.
    GET /api/v1/get-contact: Get contact.
    GET /api/v1/home: Sample home route to check if the server is running.
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.