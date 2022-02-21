export default function handler(req, res) {
   try {
      console.log('----------------------- Request Data -----------------------');
      console.log(req.body);
      res.status(200);
      res.json({ message: 'Welcome to status API endpoint!' });
      res.end();
   } catch (err) {
      res.status(500);
      res.json({ message: 'Oops! something wen\'t wrong!' });
      res.end();
   }
}