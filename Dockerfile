# Use official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD ["npm", "start"]
