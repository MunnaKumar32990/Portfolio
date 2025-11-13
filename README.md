<<<<<<< HEAD
# Modern Portfolio Website

A beautiful, modern portfolio website built with React, Vite, and MongoDB. This project has been migrated from a file-based database to MongoDB for better scalability and reliability.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly
- ⚡ Fast performance with Vite
- 🗄️ MongoDB backend for data management
- 🔄 Real-time data updates via API
- 📊 Animated components with Framer Motion
- 🎯 SEO optimized

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
project/
├── server/                 # Backend server
│   ├── config/            # Database configuration
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── scripts/           # Migration scripts
│   └── server.js          # Server entry point
├── src/                   # Frontend React app
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── services/          # API services
│   └── utils/             # Utilities
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd project
```

2. **Install frontend dependencies:**
```bash
npm install
```

3. **Install backend dependencies:**
```bash
cd server
npm install
cd ..
```

### Configuration

1. **Backend Configuration:**
   - Navigate to `server` directory
   - Copy `.env.example` to `.env`
   - Update MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   CORS_ORIGIN=http://localhost:5173
   ```

2. **Frontend Configuration:**
   - Copy `.env.example` to `.env` (optional)
   - Default configuration uses Vite proxy for API requests

### Migration

1. **Start MongoDB:**
   - Local: Make sure MongoDB is running
   - Atlas: Verify your cluster is accessible

2. **Run migration:**
```bash
cd server
npm run migrate
```

This will import all portfolio data into MongoDB.

### Running the Application

1. **Start the backend server:**
```bash
cd server
npm start
# or for development
npm run dev
```

2. **Start the frontend (in a new terminal):**
```bash
npm run dev
```

3. **Open your browser:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/:field` - Get specific field
- `PUT /api/portfolio` - Update portfolio data

## Development

### Frontend Development
```bash
npm run dev
```

### Backend Development
```bash
cd server
npm run dev
```

### Building for Production
```bash
# Frontend
npm run build

# Backend
cd server
npm start
```

## Migration from File-Based Database

This project has been migrated from a file-based database (`src/utils/data.js`) to MongoDB. The migration includes:

- ✅ MongoDB connection and configuration
- ✅ Portfolio data models and schemas
- ✅ REST API endpoints
- ✅ Frontend API integration
- ✅ Fallback to local data if API is unavailable
- ✅ Migration script for data import

For detailed migration instructions, see [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md).

## Features

### Portfolio Sections
- Hero section with typewriter effect
- About section with timeline
- Education section
- Projects showcase
- Skills display
- Certifications
- Coding platforms
- Contact form
- Footer with social links

### Data Management
- MongoDB for data persistence
- REST API for data access
- Automatic fallback to local data
- Caching for better performance
- Real-time data updates

## Environment Variables

### Backend (`server/.env`)
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

### Frontend (`.env`)
```
VITE_API_URL=/api
```

## Troubleshooting

### MongoDB Connection Issues
- Check if MongoDB is running
- Verify connection string in `.env`
- Check firewall settings (for Atlas)

### API Not Working
- Ensure backend server is running
- Check CORS configuration
- Verify API endpoint URLs

### Frontend Not Loading Data
- Check browser console for errors
- Verify backend server is running
- Check network tab for API requests

## Deployment

### Backend Deployment
1. Set environment variables on hosting platform
2. Deploy to platforms like Heroku, Railway, Render, etc.
3. Update MongoDB connection string for production

### Frontend Deployment
1. Update `VITE_API_URL` in `.env` to production backend URL
2. Build the project: `npm run build`
3. Deploy to Vercel, Netlify, GitHub Pages, etc.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
- Check the [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- Review server logs
- Check browser console
- Verify environment variables

---

**Note:** The frontend includes automatic fallback to local data if the API is unavailable, ensuring your portfolio works even during development or if the backend is temporarily down.

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 9fd5605f5bed21736c6dc54d10531329d2e9d166
