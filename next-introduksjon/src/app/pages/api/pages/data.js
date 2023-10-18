export default function handler(req, res) {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  
    res.status(200).json(data);
  }

  let data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(data);
    } else if (req.method === 'POST') {
      const newItem = req.body;
      data.push(newItem);
      res.status(200).json(newItem);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  