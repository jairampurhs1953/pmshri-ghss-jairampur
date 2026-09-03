# PM SHRI GHSS Jairampur — Version 2

## What is included

- Responsive premium school website
- Scroll reveal animations and reading progress bar
- Photo gallery with lightbox
- Notices, events and downloads
- Admin login and dashboard
- Admin CRUD-style editing for notices, events, gallery entries and documents
- Content persisted in browser localStorage for this demo
- Separate `assets/photos/` and `documents/` folders

## Demo admin login

Username: `admin`
Password: `PMShri@1953`

**Security warning:** this is a front-end demonstration. The password is visible in the JavaScript and therefore is NOT suitable for a real public production admin system. For deployment, use server-side authentication and a database/CMS (for example a secure WordPress setup, Firebase/Supabase auth + database, or a custom backend).

## Real school photographs

The supplied image files in `assets/photos/` are clearly labelled placeholders. Replace them with school-approved photographs:
- campus
- students
- classrooms
- teachers
- sports
- cultural activities

The gallery can then be managed from the admin dashboard by entering the image path.

## Official PM SHRI branding

The Government of India PM SHRI logo should be downloaded from the official government design resource and substituted for `assets/logo.svg` if the school has the approved brand asset. Do not use an unofficial recreation as the final public logo.

## Deployment

A production deployment should:
1. Put the website frontend on HTTPS hosting.
2. Replace the demo localStorage admin with real authentication.
3. Store notices/events/gallery/document metadata in a database/CMS.
4. Store uploaded images/PDFs in protected storage.
5. Add backups, role-based access and audit logging.
6. Add the school's official email, phone, CBSE affiliation number and other verified details if available.

## Editing static content

`script.js` contains the default public content. The admin dashboard can override it in a browser using localStorage. For a shared school website, move this data to a backend/CMS so all visitors see the same updates.
