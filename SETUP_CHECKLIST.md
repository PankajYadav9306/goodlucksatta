# ✅ Setup Checklist

Use this checklist to ensure your MongoDB setup is complete.

## 📋 Pre-Setup Checklist

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] npm is installed (`npm --version`)
- [ ] You're in the `goodlucksatta-mongodb` folder
- [ ] You have either:
  - [ ] MongoDB installed locally, OR
  - [ ] MongoDB Atlas account created

## 🔧 Installation Checklist

### 1. Install Dependencies
```bash
npm install
```
- [ ] Command completed without errors
- [ ] `node_modules/` folder created
- [ ] `package-lock.json` updated

### 2. Configure Environment
Edit `.env.local`:
```
MONGODB_URI=mongodb://localhost:27017/goodlucksatta
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=password123
```

**Check:**
- [ ] `.env.local` file exists
- [ ] All 4 variables are set
- [ ] No typos in keys

### 3. Start MongoDB

**If Local MongoDB:**
```bash
mongod
```
- [ ] MongoDB starts without errors
- [ ] Shows connection message
- [ ] Port 27017 is open

**If MongoDB Atlas:**
- [ ] Cluster is created
- [ ] Connection string copied to `.env.local`
- [ ] IP whitelist includes your machine

### 4. Start Development Server
```bash
npm run dev
```
- [ ] Shows "ready - started server on"
- [ ] No error messages
- [ ] Port 3000 is listening

## 🌐 Runtime Checklist

### 5. Access the Application
Open browser: http://localhost:3000

- [ ] Home page loads
- [ ] No console errors (F12)
- [ ] Looks same as original Sanity version

### 6. Test Admin Panel
Go to: http://localhost:3000/login

- [ ] Login page shows
- [ ] Enter: admin / password123
- [ ] Login succeeds
- [ ] Dashboard loads

### 7. Test Data Operations
In Admin Panel:

- [ ] Click "New Result" or similar button
- [ ] Fill form (game, date, result number, etc.)
- [ ] Click Save
- [ ] Data appears in dashboard
- [ ] Check MongoDB has data: 
  ```bash
  # In another terminal:
  mongosh
  > use goodlucksatta
  > db.results.find()
  ```

### 8. Test API Endpoints

**Terminal 1:** Keep `npm run dev` running

**Terminal 2:** Test endpoints
```bash
# Test 1: Get all results
curl http://localhost:3000/api/results

# Test 2: Create result
curl -X POST http://localhost:3000/api/results \
  -H "Content-Type: application/json" \
  -d '{"game":"disawer","date":"2025-02-26","resultNumber":"789","waitingGame":"gali"}'

# Test 3: Get settings
curl http://localhost:3000/api/settings
```

Check:
- [ ] All API calls return JSON
- [ ] No error messages
- [ ] Data is saved to MongoDB

## 🚀 Final Checks

### 9. Verify All Pages Work
Check these URLs load without errors:
- [ ] http://localhost:3000 (Home)
- [ ] http://localhost:3000/login (Admin login)
- [ ] http://localhost:3000/admin (After login)
- [ ] http://localhost:3000/chart (Charts if available)
- [ ] http://localhost:3000/contact (Contact if available)

### 10. Build Test
```bash
npm run build
```

- [ ] Build completes with no errors
- [ ] `.next/` folder created
- [ ] No TypeScript errors
- [ ] No deployment errors

## 📊 Optional: Database Browser

### MongoDB Compass (Visual)
1. Download: https://www.mongodb.com/products/compass
2. Install and open
3. Connect to: `mongodb://localhost:27017`
4. Check:
   - [ ] Database `goodlucksatta` appears
   - [ ] Collections `results` and `settings` exist
   - [ ] Sample data is visible

## 🏁 Success Criteria

When all checks pass, you have successfully:
- ✅ Cloned the site with MongoDB backend
- ✅ Removed all Sanity dependencies
- ✅ Set up API routes for all CRUD operations
- ✅ Verified the application works end-to-end
- ✅ Confirmed data persists in MongoDB

## 🆘 Troubleshooting

### If `npm install` fails:
```bash
rm -rf node_modules package-lock.json
npm install
```

### If `npm run dev` won't start:
1. Check port 3000 is free: `netstat -an | findstr :3000`
2. Try different port: `npm run dev -- -p 3001`
3. Check `.env.local` syntax
4. Restart terminal

### If MongoDB won't connect:
1. Verify `MONGODB_URI` in `.env.local`
2. For local: start `mongod` in separate terminal
3. For Atlas: check IP whitelist and credentials
4. Wait 30 seconds after starting mongod

### If login fails:
1. Check spelling in `.env.local` exactly
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try private/incognito window
4. Restart `npm run dev`

## ✨ Next Steps (After Success)

1. **Change Admin Password:**
   - Edit `.env.local`
   - Update `NEXT_PUBLIC_ADMIN_PASSWORD`
   - Restart dev server

2. **Add Sample Data:**
   - Use admin panel to add some results
   - Verify they appear on home page

3. **Customize Settings:**
   - Admin panel → Settings (if available)
   - Update site name, contact info, etc.

4. **Deploy to Production:**
   - Follow instructions in `MONGODB_SETUP.md`
   - Use MongoDB Atlas (free tier)
   - Deploy to Vercel/Netlify/Railway

## 📝 Troubleshooting Log

Keep track of any issues here:

```
Date: _______________
Issue: _______________
Solution: _______________
```

---

**Once all checkboxes are marked ✅, your MongoDB setup is complete!**

Need detailed help? See:
- **QUICKSTART.md** - Quick 5-minute setup
- **MONGODB_SETUP.md** - Comprehensive guide
- **SETUP_COMPLETE.md** - Full summary of changes
