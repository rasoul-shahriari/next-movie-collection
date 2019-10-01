export const router = () => {
  server.get('/api/mypage', (req, res) => {
    console.log('inside of router');
    res.send({ success: true });
  });

  server.get('/api/secondPage', (req, res) => {
    console.log('inside of router');
    res.send({ success: true });
  });
};
