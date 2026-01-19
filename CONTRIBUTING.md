# Contributing to TGClone

Thank you for your interest in contributing to TGClone! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository
- Fork the project on GitHub
- Clone your fork locally

### 2. Set Up Development Environment
```bash
git clone https://github.com/your-username/tgclone.git
cd tgclone
npm run install-all
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Add comments where necessary
- Test your changes thoroughly

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: your descriptive commit message"
```

### 6. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```
Then create a Pull Request on GitHub.

## 📝 Code Style Guidelines

### JavaScript/React
- Use ES6+ features
- Use functional components with hooks
- Follow camelCase naming convention
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### CSS
- Use BEM methodology for class naming
- Keep styles modular and component-specific
- Use CSS custom properties for theming
- Ensure responsive design

### Backend
- Use async/await instead of callbacks
- Implement proper error handling
- Add input validation
- Follow RESTful API conventions

## 🧪 Testing

Before submitting a pull request:
- Test all functionality manually
- Ensure no console errors
- Test on different screen sizes
- Verify real-time features work correctly

## 📋 Pull Request Guidelines

### Title Format
- `Add: new feature description`
- `Fix: bug description`
- `Update: improvement description`
- `Refactor: code refactoring description`

### Description
Include:
- What changes were made
- Why the changes were necessary
- How to test the changes
- Screenshots (if UI changes)

## 🐛 Bug Reports

When reporting bugs, include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Screenshots or error messages

## 💡 Feature Requests

For new features:
- Describe the feature clearly
- Explain the use case
- Consider implementation complexity
- Discuss potential alternatives

## 🚀 Development Scripts

```bash
# Install all dependencies
npm run install-all

# Run development servers
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client

# Build for production
npm run build
```

## 📁 Project Structure

```
tgclone/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── contexts/    # React contexts
│   │   └── utils/       # Utility functions
│   └── public/          # Static assets
└── docs/                # Documentation
```

## 🔧 Environment Variables

### Backend
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tgclone
JWT_SECRET=your-jwt-secret
NODE_ENV=development
```

### Frontend
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
```

## 📞 Getting Help

- Open an issue for bugs or questions
- Check existing issues before creating new ones
- Be respectful and constructive in discussions

## 🎯 Priority Areas

We especially welcome contributions in:
- UI/UX improvements
- Performance optimizations
- Mobile responsiveness
- Accessibility features
- Documentation improvements
- Test coverage

Thank you for contributing to TGClone! 🚀