export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Текст',
      author: 'Дмитрий Глуховский',
      price: 20,
      description: 'Смерть Кощеева, как известно, спрятана в яйце. А человеческая – в смартфоне. Как и жизнь. Слишком уж большой властью наделено это чудо техники.',
      imgUrl: 'https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/24426353-dmitriy-gluhovskiy-tekst.jpg'
    },
    {
      id: 2,
      title: 'Происхождение',
      author: 'Дэн Браун',
      price: 25,
      description: '«Происхождение» – пятая книга американского писателя Дэна Брауна о гарвардском профессоре, специалисте по религиозной символике Роберте Лэнгдоне.',
      imgUrl: 'https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie.jpg'
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something went wrong'));
        } else {
          resolve(this.data);
        }
      }, 700);
    })
  }
}