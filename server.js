const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
const isNumber = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
};

// Helper function to check if a string is an alphabet
const isAlphabet = (str) => {
    return /^[a-zA-Z]+$/.test(str);
};

// Helper function to check if a string is a special character
const isSpecialChar = (str) => {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
};

// Helper function to generate user_id
const generateUserId = (fullName) => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${fullName.toLowerCase()}_${day}${month}${year}`;
};

// Main BFHL endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Initialize arrays and variables
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let allAlphabets = '';

        // Process each element in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseFloat(str);
                if (Number.isInteger(num)) {
                    if (num % 2 === 0) {
                        evenNumbers.push(str);
                    } else {
                        oddNumbers.push(str);
                    }
                    sum += num;
                }
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                allAlphabets += str;
            } else if (isSpecialChar(str)) {
                specialCharacters.push(str);
            }
        });

        // Generate concatenated string with alternating caps in reverse order
        let concatString = '';
        const reversedAlphabets = allAlphabets.split('').reverse();
        reversedAlphabets.forEach((char, index) => {
            if (index % 2 === 0) {
                concatString += char.toUpperCase();
            } else {
                concatString += char.toLowerCase();
            }
        });

        // Generate user_id (you can customize the full name)
        const fullName = "john_doe"; // Change this to your actual name
        const userId = generateUserId(fullName);

        // Prepare response
        const response = {
            is_success: true,
            user_id: userId,
            email: "john@xyz.com", // Change this to your actual email
            roll_number: "ABCD123", // Change this to your actual roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error occurred while processing the request."
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'BFHL API is running successfully',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to BFHL API',
        endpoints: {
            'POST /bfhl': 'Main endpoint for processing arrays',
            'GET /health': 'Health check endpoint'
        },
        author: 'Your Name',
        version: '1.0.0'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found. Use POST /bfhl for the main functionality."
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        is_success: false,
        error: "An unexpected error occurred."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 BFHL API server is running on port ${PORT}`);
    console.log(`📝 Main endpoint: POST http://localhost:${PORT}/bfhl`);
    console.log(`🔍 Health check: GET http://localhost:${PORT}/health`);
});

module.exports = app;
