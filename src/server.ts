import express from 'express';
import bodyParser from 'body-parser';
import { NFTStorage, File } from 'nft.storage';

const app = express();

const jsonParser = bodyParser.json();

const client = new NFTStorage({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzRUIyMDZiQUMyQ0NEMzNBNERiMTkwRThhODMxQkU5NmNEMjU1M2YiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Mjg1ODIzNjAwOCwibmFtZSI6IkhhY2thdG9uU1AifQ.Pi8t9LXFP4jwu5cuNA1nMF3Gd8Fye33273_5JnSPp5Y',
});

app.get('/', jsonParser, async (req, res) => {
  try {
    res.send('Hello EducaDAO');
  } catch (error) {
    console.log(error);
  }
});

app.post('/certificate', jsonParser, async (req, res) => {
  try {
    const { name: nameReq, description: descriptionReq } = req.body;

    const metadata = await client.store({
      name: 'EducaDAO',
      description: 'IPFS upload test.',
      image: new File(['hello world'], 'hello.txt'),
      properties: {
        name: nameReq,
        description: descriptionReq,
      },
    });

    console.log(metadata);

    res.send(metadata);
  } catch (error) {
    console.log(error);
  }
});

app.post('/course', jsonParser, async (req, res) => {
  try {
    const { name: nameReq, description: descriptionReq } = req.body;

    const metadata = await client.store({
      name: 'EducaDAO',
      description: 'IPFS upload test.',
      image: new File(['hello world'], 'hello.txt'),
      properties: {
        name: nameReq,
        description: descriptionReq,
      },
    });

    console.log(metadata);

    res.send(metadata);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
