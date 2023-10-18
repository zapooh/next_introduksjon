// pages/api/collection.js

export default (req, res) => {
    if (req.method === 'GET') {
      // Returnerer en samling
      res.status(200).json([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
      ]);
    } else if (req.method === 'POST') {
      // Simulerer å legge til et nytt element i samlingen
      const newItem = {
        id: Date.now(),
        name: req.body.name
      };
      res.status(201).json(newItem);
    } else {
      res.status(405).end();  // Metoden er ikke tillatt
    }
  };
  