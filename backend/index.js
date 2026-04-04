const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serving static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const DATA_FILE = path.join(__dirname, 'data', 'news.json');

// Ensure directories exist
['data', 'uploads'].forEach(dir => {
    if (!fs.existsSync(path.join(__dirname, dir))) {
        fs.mkdirSync(path.join(__dirname, dir));
    }
});

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit for videos
});

// API Routes
app.get('/api/info', (req, res) => {
  res.json({ message: "O'zbekiston Davlat Konservatoriyasi Backend API Ishlayapti" });
});

app.get('/api/news', (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(data);
});

// POST new news item with optional file
app.post('/api/news', upload.single('media'), (req, res) => {
    const { title, content, date, category } = req.body;
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    
    const mediaPath = req.file ? `/uploads/${req.file.filename}` : null;
    const mediaType = req.file ? (req.file.mimetype.startsWith('video') ? 'video' : 'image') : null;

    const newNews = {
        id: Date.now(),
        title,
        content,
        date: date || new Date().toISOString(),
        category: category || 'Yangiliklar',
        media: mediaPath,
        mediaType: mediaType
    };
    
    data.push(newNews);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(newNews);
});

app.delete('/api/news/:id', (req, res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync(DATA_FILE));
    const itemToDelete = data.find(i => i.id == id);
    
    // Also delete the physical file if it exists
    if (itemToDelete && itemToDelete.media) {
        const fullPath = path.join(__dirname, itemToDelete.media);
        if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    }
    
    data = data.filter(item => item.id != id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
