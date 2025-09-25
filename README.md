# 📈 Stocks Portfolio Manager React App

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Material-UI](https://img.shields.io/badge/Material--UI-5.10.15-blue?style=for-the-badge&logo=mui)

**A comprehensive stock portfolio management application with real-time trading capabilities**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://lively-dodol-cc397c.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Heroku-430098?style=for-the-badge&logo=heroku)](https://your-backend-url.herokuapp.com)

</div>

---

## 🌟 Features

### 🔐 **Authentication & User Management**
- ✨ **User Registration** with secure password validation
- 🔑 **JWT-based Authentication** for secure login
- 👤 **User Profile Management** with personal details
- 💰 **Virtual Balance** - Start with $500,000 virtual money

### 📊 **Stock Trading & Portfolio**
- 📈 **Real-time Stock Data** via Finnhub API
- 🛒 **Buy/Sell Stocks** with instant transactions
- 📋 **Portfolio Management** with P&L tracking
- ⭐ **Watchlist** - Add/remove stocks to monitor
- 📊 **Trading History** - Complete transaction records

### 📱 **User Interface**
- 🎨 **Modern Material-UI Design** with responsive layout
- 📱 **Mobile-friendly** interface
- 🌙 **Dark/Light Theme** support
- 📊 **Interactive Charts** via TradingView integration
- 📰 **Stock News** and IPO listings

### 🔧 **Technical Features**
- ⚡ **Real-time Updates** for stock prices
- 🔄 **RESTful API** architecture
- 🗄️ **MongoDB Database** for data persistence
- 🛡️ **Input Validation** and error handling
- 📱 **Progressive Web App** capabilities

---

## 🚀 Tech Stack

### **Frontend**
- ⚛️ **React 18.2.0** - UI Library
- 🎨 **Material-UI (MUI) 5.10.15** - Component Library
- 🎯 **React Router 6.4.4** - Navigation
- 📊 **Recharts 2.1.16** - Data Visualization
- 📈 **TradingView Widget** - Stock Charts
- 🎨 **Sass** - Styling

### **Backend**
- 🟢 **Node.js** - Runtime Environment
- 🚀 **Express.js 4.18.2** - Web Framework
- 🗄️ **MongoDB 6.8.0** - Database
- 🔧 **Mongoose 6.8.0** - ODM
- 🔐 **JWT** - Authentication
- 🔒 **bcrypt** - Password Hashing

### **External APIs**
- 📊 **Finnhub.io** - Real-time Stock Data
- 📈 **TradingView** - Advanced Charts
- 🌐 **RESTful APIs** - Data Exchange

---

## 📦 Installation & Setup

### **Prerequisites**
- 📦 Node.js (v14 or higher)
- 🗄️ MongoDB Atlas account
- 🌐 Git

### **1. Download the Project**
```bash
# Download and extract the project files
# Navigate to the project directory
cd Stocks-Portfolio-Manager-React-App
```

### **2. Install Dependencies**
```bash
# Install all dependencies (root, backend, frontend)
npm run install:all

# Or install individually
npm install                    # Root dependencies
cd Backend && npm install     # Backend dependencies
cd ../Frontend && npm install # Frontend dependencies
```

### **3. Environment Setup**
Create a `.env` file in the Backend directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/stocks-portfolio
SECRET=your_jwt_secret_key_here
PORT=8080
FINNHUB_API_KEY=your_finnhub_api_key_here
```

### **4. Start the Application**
```bash
# Start both backend and frontend
npm start

# Or start individually
npm run start:backend   # Backend only (port 8080)
npm run start:frontend  # Frontend only (port 3000)
```

### **5. Access the Application**
- 🌐 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:8080

---

## 🎯 Usage Guide

### **Getting Started**
1. 🏠 **Landing Page** - View features and navigate to registration
2. 📝 **Register** - Create account with email and strong password
3. 🔑 **Login** - Access your portfolio dashboard
4. 💰 **Start Trading** - Use $500,000 virtual money to buy stocks

### **Trading Workflow**
1. 📊 **Browse Stocks** - View available stocks on dashboard
2. ⭐ **Add to Watchlist** - Click + icon to monitor stocks
3. 🛒 **Buy Stocks** - Select quantity and place buy orders
4. 📈 **Monitor Portfolio** - Track your investments and P&L
5. 💸 **Sell Stocks** - Liquidate positions when needed

### **Key Features**
- 📊 **Real-time Data** - Live stock prices and market updates
- 📈 **Portfolio Analytics** - Detailed investment tracking
- 📰 **Market News** - Stay updated with latest financial news
- 🏢 **IPO Listings** - Discover new investment opportunities

---

## 🏗️ Project Structure

```
Stocks-Portfolio-Manager-React-App/
├── 📁 Backend/
│   ├── 📁 api/
│   │   ├── 📁 controllers/     # API route handlers
│   │   ├── 📁 models/          # Database schemas
│   │   ├── 📁 routes/          # API endpoints
│   │   └── 📁 services/        # Business logic
│   ├── 📄 server.js            # Server entry point
│   └── 📄 package.json
├── 📁 Frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable components
│   │   ├── 📁 contexts/        # React contexts
│   │   ├── 📁 hooks/           # Custom hooks
│   │   ├── 📁 scenes/          # Page components
│   │   └── 📁 global/          # Global components
│   └── 📄 package.json
└── 📄 README.md
```

---

## 🔌 API Endpoints

### **Authentication**
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `GET /user/:id` - Get user details

### **Trading**
- `POST /trade/:id` - Place buy/sell orders
- `GET /trade/:id` - Get trading history

### **Portfolio**
- `GET /portfolio/:id` - Get user portfolio

### **Watchlist**
- `POST /temp/` - Add stock to watchlist
- `GET /temp/:id` - Get user watchlist
- `DELETE /temp/:id` - Remove from watchlist

---

## 🚀 Deployment

### **Frontend (Netlify)**
1. Build the React app: `npm run build`
2. Deploy to Netlify with the build folder
3. Set environment variables for production

### **Backend (Heroku)**
1. Connect GitHub repository to Heroku
2. Set environment variables in Heroku dashboard
3. Deploy automatically on push to main branch

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 📥 **Download** the project files
2. 🌿 **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📧 **Contact** the author for collaboration
5. 🔄 **Share** your improvements

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### **Created By Sunil Sharma ❤️**

*Full-Stack Developer & Stock Market Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-@sunbyte16-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil_Kumar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live_Site-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://lively-dodol-cc397c.netlify.app)
[![Email](https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sunilsharma.dev@gmail.com)

### 🌟 **About Me**
- 💻 **Full-Stack Developer** specializing in React & Node.js
- 📈 **Financial Technology** enthusiast with trading experience
- 🚀 **Open Source** contributor and tech blogger
- 🎯 **UI/UX** focused on creating exceptional user experiences

</div>

---

## 🙏 Acknowledgments

- 📊 **Finnhub.io** for real-time stock data
- 📈 **TradingView** for advanced charting capabilities
- 🎨 **Material-UI** for beautiful components
- ⚛️ **React Community** for excellent documentation
- 🌐 **MongoDB Atlas** for cloud database hosting

---

## 📞 Support

If you have any questions or need help, feel free to reach out:

<div align="center">

[![Email](https://img.shields.io/badge/Email-sunilsharma.dev@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sunilsharma.dev@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect_With_Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Site-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://lively-dodol-cc397c.netlify.app)

</div>

### 🆘 **Quick Help**
- 🐛 **Bug Reports**: Contact via email for bug reports
- 💡 **Feature Requests**: Share your ideas via email or LinkedIn
- ❓ **Questions**: Reach out for any questions or clarifications
- 📖 **Documentation**: Check the README for detailed information

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕

</div>#
