const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log("Connection done");
    } catch (error) {
        console.error("Connection error:", error);
    }
};

const saveMovie = async () => {
    try {
        const movieSchema = new mongoose.Schema({
            title: String,
            year: Number,
            score: Number,
            rating: String
        });

        const Movie = mongoose.model('Movie', movieSchema);

        const amadeus = new Movie({
            title: 'Amadeus',
            year: 1986,
            score: 9.2,
            rating: 'R'
        });

        await amadeus.save();
        console.log("Document saved");

    } catch (error) {
        console.error("Save error:", error);
    } finally {
        await mongoose.connection.close();
    }
};

const run = async () => {
    await dbConnect();
    await saveMovie();
};

run();
