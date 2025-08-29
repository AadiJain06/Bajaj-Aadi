# Deployment Guide for BFHL API

This guide will help you deploy your BFHL API to various hosting platforms.

## Prerequisites

1. **GitHub Repository**: Push your code to a public GitHub repository
2. **Node.js**: Ensure your project runs locally with `npm start`

## Deployment Options

### 1. Vercel (Recommended - Free & Easy)

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Node.js project
5. Click "Deploy"
6. Your API will be available at: `https://your-project-name.vercel.app`

**Configuration:**
- Build Command: `npm install` (auto-detected)
- Output Directory: `./` (auto-detected)
- Install Command: `npm install` (auto-detected)

**API Endpoint:**
- Your main endpoint will be: `https://your-project-name.vercel.app/bfhl`

### 2. Railway

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up/login
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-deploy
6. Get your deployment URL from the dashboard

**API Endpoint:**
- `https://your-project-name.railway.app/bfhl`

### 3. Render

**Steps:**
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: `bfhl-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Create Web Service"

**API Endpoint:**
- `https://your-project-name.onrender.com/bfhl`

### 4. Heroku

**Steps:**
1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`
5. Open: `heroku open`

**API Endpoint:**
- `https://your-app-name.herokuapp.com/bfhl`

## Before Deployment

### 1. Update Personal Information

Edit `server.js` and update these lines:

```javascript
// Change these values to your actual information
const fullName = "your_actual_name"; // Replace with your name
const email = "your_actual_email@domain.com"; // Replace with your email
const rollNumber = "YOUR_ACTUAL_ROLL_NUMBER"; // Replace with your roll number
```

### 2. Test Locally

```bash
npm start
# Test with: node test.js
```

### 3. Commit and Push

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Post-Deployment

### 1. Test Your Deployed API

Test your deployed endpoint with the examples:

**Example A:**
```bash
curl -X POST https://your-deployed-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

**Example B:**
```bash
curl -X POST https://your-deployed-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'
```

**Example C:**
```bash
curl -X POST https://your-deployed-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A", "ABcD", "DOE"]}'
```

### 2. Verify Response Format

Ensure your response includes all required fields:
- ✅ `is_success`: true
- ✅ `user_id`: "your_name_ddmmyyyy"
- ✅ `email`: "your_email@domain.com"
- ✅ `roll_number`: "YOUR_ROLL_NUMBER"
- ✅ `odd_numbers`: array of odd numbers as strings
- ✅ `even_numbers`: array of even numbers as strings
- ✅ `alphabets`: array of uppercase alphabets
- ✅ `special_characters`: array of special characters
- ✅ `sum`: sum as string
- ✅ `concat_string`: concatenated alphabets in reverse with alternating caps

## Troubleshooting

### Common Issues:

1. **Port Issues**: Ensure your hosting platform can set the PORT environment variable
2. **Build Failures**: Check that all dependencies are in `package.json`
3. **Runtime Errors**: Check the hosting platform's logs
4. **CORS Issues**: The API includes CORS middleware, but some platforms may need additional configuration

### Testing Tools:

- **Postman**: Import the examples and test
- **Thunder Client**: VS Code extension for API testing
- **cURL**: Command line testing
- **Online Testers**: JSONPlaceholder, ReqBin, etc.

## Submission

Once deployed and tested:

1. **Copy your API endpoint URL** (e.g., `https://your-app.vercel.app/bfhl`)
2. **Submit to the form**: [https://forms.office.com/r/ZeVpUYp3zV](https://forms.office.com/r/ZeVpUYp3zV)
3. **Ensure the URL ends with `/bfhl`**
4. **Test with the provided examples before submitting**

## Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review the error logs
3. Test locally first
4. Ensure all requirements are met

---

**Good luck with your VIT Full Stack assignment! 🚀**
