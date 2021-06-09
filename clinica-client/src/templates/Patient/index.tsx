import PatientInfo, { PatientInfoProps } from 'components/PatientInfo'
import Base from 'templates/Base'

import * as S from './styles'

export type PatientTemplateProps = {
  patientInfo: PatientInfoProps
}

const Patient = ({ patientInfo }: PatientTemplateProps) => (
  <Base>
    <S.Main>
      <S.SectionPatientInfo>
        <PatientInfo {...patientInfo} />
      </S.SectionPatientInfo>
    </S.Main>
  </Base>
)

export default Patient
