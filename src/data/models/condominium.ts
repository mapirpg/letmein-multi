import api from '../../infra/api'
import { ICondominium } from '../interfaces/condominium'

class CondominiumModel {
  public async getCondominiums() {
    const { data } = await api.get<Array<ICondominium>>('/products')

    return data?.map((item) => ({
      ...item,
      name: `Condomínio ${item?.id}`,
    }))
  }
}

const Condominium = new CondominiumModel()
export default Condominium
