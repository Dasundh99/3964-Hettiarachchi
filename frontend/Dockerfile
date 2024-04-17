# Use official Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the frontend code
COPY . .

# Build the React app
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Command to serve the built React app
CMD ["npm", "start"]
