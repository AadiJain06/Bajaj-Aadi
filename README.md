# BFHL API - VIT Full Stack Question Paper

A REST API that processes arrays and returns categorized data including even/odd numbers, alphabets, special characters, sum, and concatenated strings.

## Features

- **POST /bfhl** - Main endpoint for processing arrays
- **GET /health** - Health check endpoint
- **GET /** - API information and documentation

## Requirements Met

✅ Status (is_success)  
✅ User ID (user_id) in format: {full_name_ddmmyyyy}  
✅ Email ID  
✅ College Roll Number  
✅ Array for even numbers  
✅ Array for odd numbers  
✅ Array for alphabets (converted to uppercase)  
✅ Array for special characters  
✅ Sum of numbers (returned as string)  
✅ Concatenation of alphabetical characters in reverse order with alternating caps  

## Tech Stack

- **Backend**: Node.js with Express.js
- **Security**: Helmet.js for security headers
- **CORS**: Enabled for cross-origin requests
- **Error Handling**: Comprehensive error handling and validation

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bajaj-bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

### POST /bfhl

Main endpoint that processes arrays and returns categorized data.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /health

Health check endpoint to verify API status.

**Response:**
```json
{
  "status": "OK",
  "message": "BFHL API is running successfully",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### GET /

API information and available endpoints.

## Examples

### Example A
**Input:** `["a", "1", "334", "4", "R", "$"]`  
**Output:** Even numbers: ["334", "4"], Odd numbers: ["1"], Sum: "339", Concat: "Ra"

### Example B
**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`  
**Output:** Even numbers: ["2", "4", "92"], Odd numbers: ["5"], Sum: "103", Concat: "ByA"

### Example C
**Input:** `["A", "ABcD", "DOE"]`  
**Output:** Alphabets: ["A", "ABCD", "DOE"], Sum: "0", Concat: "EoDdCbAa"

## Customization

Before deploying, update the following in `server.js`:

```javascript
// Change these values to your actual information
const fullName = "your_full_name"; // Replace with your name
const email = "your_email@domain.com"; // Replace with your email
const rollNumber = "YOUR_ROLL_NUMBER"; // Replace with your roll number
```

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Railway
1. Connect your GitHub repository
2. Railway will automatically deploy from your main branch

### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

### Heroku
1. Install Heroku CLI
2. Run: `heroku create`
3. Deploy: `git push heroku main`

## Environment Variables

- `PORT` - Server port (default: 3000)

## Error Handling

The API includes comprehensive error handling:
- Input validation
- Try-catch blocks
- Proper HTTP status codes
- Descriptive error messages

## Security Features

- Helmet.js for security headers
- CORS enabled
- Input validation and sanitization
- Error message sanitization

## Testing

Test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

### cURL Example
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

## License

MIT License

## Author

Your Name - VIT Student

---

**Note**: Remember to update the personal information (name, email, roll number) in the code before submitting your assignment!
