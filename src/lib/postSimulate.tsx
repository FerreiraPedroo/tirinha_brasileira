export async function postSimulate() {
  const id = Math.ceil(Math.random() * 100000000);

  const article = await fetch(`https://lorem-api.com/api/article/foo${Math.random() * (0 - 10000)}`).then((response) =>
    response.json(),
  );
  console.log(await contents());
  const post = {
    id,
    title: article.title,
    subtitle: article.subtitle,
    category: category(),
    image: article.image,
    dateCreated: article.dateCreated,
    contents: await contents(),
    interactions: await interactions(),
    comments: await comment(),
    author: article.author,
  };

  return post;
}

const interactions = async () => {
  const type = Math.floor(Math.random() * 5);
  const interaction = [];

  switch (type) {
    case 0:
      interaction.push({ like: Math.floor(Math.random() * 500) });
      break;
    case 1:
      interaction.push({ nolike: Math.floor(Math.random() * 500) });
      break;
    case 2:
      interaction.push({ agree: Math.floor(Math.random() * 500) });
      break;
    case 3:
      interaction.push({ disapprove: Math.floor(Math.random() * 500) });
      break;
    default:
      break;
  }

  return interaction;
};

const comment = async () => {
  const count = Math.floor(Math.random() * 7);
  const comments = [];

  for (let i = 0; i < count; i++) {
    const article = await fetch(`https://lorem-api.com/api/article/foo${Math.floor(Math.random() * 50000)}`).then(
      (response) => response.json(),
    );
    const comment = await fetch("https://lorem-api.com/api/lorem").then((response) => response.text());

    comments.push({
      id: comments.length + Math.floor(Math.random() * 500000),
      comment,
      dateCreated: article.dateCreated,
      user: article.author,
    });
  }

  return comments;
};

const contents = async () => {
  const count = Math.floor(Math.random() * 7);
  const contents = [];

  for (let i = 0; i < count; i++) {
    const type = Number.parseInt((Math.random() * 4).toFixed(0));

    const article = await fetch(`https://lorem-api.com/api/article/foo${Math.floor(Math.random() * 50000)}`).then(
      (response) => response.json(),
    );
    const comment = await fetch("https://lorem-api.com/api/lorem").then((response) => response.text());

    switch (type) {
      case 0:
        contents.push({
          model: "IMG_TEXT",
          image: article.image,
          text: comment,
        });
        break;
      case 1:
        contents.push({
          model: "TEXT",
          image: null,
          text: article.content,
        });
        break;
      case 2:
        contents.push({
          model: "IMAGE_CAROUSEL",
          image: [
            article.image,
            "https://picsum.photos/seed/AgCjmHn/205/1181?grayscale&blur=5",
            article.image,
            "https://picsum.photos/seed/AgCjmHn/205/1181?grayscale&blur=5",
            article.image,
          ],
          text: null,
        });
        break;
      default:
        break;
    }
  }

  return contents;
};

const category = () => {
  const category = Math.floor(Math.random() * 5);

  return ["NOTICE", "EMPREGO", "LIVE", "INVESTIGAÇÃO", "OPNIÃO", "GAMES"][category];
};
