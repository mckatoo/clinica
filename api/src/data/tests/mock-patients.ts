import { SavePatients } from '@/domain/usecases'
import faker from 'faker'

export const mockPatient = (
  quantity: number = 1
): Array<SavePatients.Params> => {
  let patients: Array<SavePatients.Params> = []
  while (patients.length <= quantity) {
    patients = [
      ...patients,
      {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        address: faker.address.streetAddress(true),
        age: faker.datatype.number(),
        pathology: faker.lorem.paragraph(),
        telephone: faker.phone.phoneNumber()
      }
    ]
  }

  return patients
}
