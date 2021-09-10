const { expect } = require('chai');

/*
  Como ainda não temos a implementação,
  vamos fixar um objeto que simula os métodos
  que iremos desenvolver, porém, eles não terão
  nenhum comportamento
*/

const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payLoadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payLoadMovie);
      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payLoadMovie);
      expect(response).to.have.a.property('id')
    });
  });

});
