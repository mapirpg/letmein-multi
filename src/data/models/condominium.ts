import { ICondominium } from '../interfaces/condominium'

class CondominiumModel {
  public async getCondominiums(): Promise<ICondominium[]> {
    const condominiums: ICondominium[] = [
      {
        id: 1,
        name: 'Residencial Vitta Verde',
        image:
          'https://scproduction.s3.sa-east-1.amazonaws.com/wysiwyg_uploads/cms/images/2018/10/05/17/1-ekwce98m.jpg',
      },
      {
        id: 2,
        name: 'Condomínio Jardim das Águas',
        image:
          'https://cdn.godoydosimoveis.com.br/wp-content/uploads/2024/01/10185159/condominios-de-Balneario-Camboriu.jpeg',
      },
      {
        id: 3,
        name: 'Vila Bela Vista',
        image:
          'https://morar.com.br/wp-content/uploads/2019/06/Aldeia-Imperial-Colatina-Morar-Construtora-5.jpg',
      },
      {
        id: 4,
        name: 'Morada das Acácias',
        image:
          'https://www.eztec.com.br/wp-content/uploads/2024/04/100378-5-motivos-para-morar-em-um-condominio-clube-1-1024x671.jpg',
      },
      {
        id: 5,
        name: 'Condomínio Parque das Flores',
        image:
          'https://mullerimoveisrj.com.br/wp-content/uploads/2024/09/Capa-4.jpg',
      },
      {
        id: 6,
        name: 'Residencial São Jorge',
        image:
          'https://judicearaujo.com.br/blog/wp-content/uploads/2021/02/iStock-902803740-1080x675.jpg',
      },
      {
        id: 7,
        name: 'Condomínio Vila Verde',
        image:
          'https://maraalcaineimoveis.com.br/wp-content/uploads/2022/11/condominio-rio-preto-8756.jpg',
      },
      {
        id: 8,
        name: 'Condomínio Lago Azul',
        image:
          'https://www.manageradm.com.br/wp-content/uploads/2021/12/07.12.21-Sustentabilidade-em-Condominios-747x380.jpg',
      },
      {
        id: 9,
        name: 'Condomínio Jardim das Flores',
        image: 'https://cdn.sindiconet.com.br/Conteudos/16845/gestaodeluxo.jpg',
      },
      {
        id: 10,
        name: 'Condomínio Parque das Árvores',
        image:
          'https://www.verabernardes.com.br/blog/wp-content/uploads/2022/06/blog-17.jpg',
      },
    ]

    return new Promise((resolve) => {
      setTimeout(() => resolve(condominiums), 2000)
    })
  }
}

const Condominium = new CondominiumModel()
export default Condominium
